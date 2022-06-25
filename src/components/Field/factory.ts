import type { AnySchema } from 'yup';
import type { FormState, Configuration, FieldConfig, CreateFieldFactory } from '@/types/field';
import { isDefined } from '@/utils/helper';

export const createFieldId = (name: string, groupId: string) =>
  typeof groupId === 'string' && groupId !== '' ? `${groupId}.${name}` : name;

export const createFieldName = (name: string, groupId: string) =>
  `['${createFieldId(name, groupId)}']`;

export const createFieldFactory: CreateFieldFactory =
  (groupId, getValidationRules) => configuration => {
    // selector function may be defined, if not field name is used instead
    const valueSelector: Record<string, Function> = {};
    if (typeof configuration.getFieldValue === 'function') {
      valueSelector.getFieldValue = configuration.getFieldValue;
    }

    const {
      id,
      name: _name,
      component,
      defaultProps = {},
      shouldDisplayAfterValid = [],
      ...rest
    } = configuration;
    const accessor = createFieldId(_name, groupId);
    const fieldName = createFieldName(_name, groupId);

    let validationRules = null;
    if (getValidationRules) {
      validationRules = getValidationRules(fieldName);
    }

    const fieldedShouldDisplayAfterValid = shouldDisplayAfterValid.map(fieldName =>
      createFieldId(fieldName, groupId),
    );

    return {
      ...rest,
      ...valueSelector,
      _name,
      accessor,
      id: id || fieldName,
      name: fieldName,
      component,
      defaultProps,
      validationRules,
      shouldDisplayAfterValid: fieldedShouldDisplayAfterValid,
      $cachedConfiguration: {
        groupId,
        getValidationRules,
        configuration,
      },
    };
  };

export const createFieldsFromConfigurations = (
  groupId: string,
  configurations: Record<string, Configuration> | Configuration[] = [],
  getValidationRules: AnySchema | null = null,
) => {
  const fieldFactory = createFieldFactory(groupId, getValidationRules);
  if (Array.isArray(configurations)) {
    return configurations.map(configuration => fieldFactory(configuration));
  }

  return Object.entries(configurations).map(([id, configuration]) =>
    fieldFactory({ id, ...configuration }),
  );
};

export const cloneField = (field: FieldConfig, configuration: Configuration) => {
  const cache = field.$cachedConfiguration;
  const createField = createFieldFactory(cache.groupId, cache.getValidationRules);
  return createField({ ...cache.configuration, ...configuration });
};

export const getInitialValuesFromConfigs = (configs: FieldConfig[]) => {
  return configs.reduce((acc, c) => {
    if (c.name) {
      acc[c.accessor] = null;
    }
    return acc;
  }, {} as Record<string, unknown | null>);
};

export const shouldDisplayField = (state: FormState, config: Configuration) => {
  const { shouldDisplay, shouldDisplayAfterValid } = config;
  let displayField = true;
  if (shouldDisplay) displayField &&= shouldDisplay(state);
  if (shouldDisplayAfterValid && shouldDisplayAfterValid.length > 0)
    displayField &&= shouldDisplayAfterValid.every(fieldId => isDefined(state[fieldId]));

  return displayField;
};
