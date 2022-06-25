import { format } from 'date-fns';

export const noop = () => undefined;

export const isEmpty = (value?: any) => {
  return (
    value === null ||
    value === undefined ||
    (Array.isArray(value) && value.length === 0) ||
    Object.keys(value).length === 0
  );
};

export const isDefined = (value?: any) => {
  return !!(value ?? false);
};

export const createLabelValue = (
  list: Record<string, unknown>[] = [],
  labelKey: string,
  valueKey?: string,
) => {
  return list.map(item => ({
    label: item[labelKey],
    value: item[valueKey || labelKey],
  }));
};

export const nested = (obj: Record<string, any>) => {
  return Object.entries(obj ?? {}).reduce((acc, [key, value]) => {
    const path = key.split('.');
    const last: string = path.pop() || '';

    const tmp = path.reduce((p, k) => {
      return (p[k] = p[k] || {});
    }, acc);

    tmp[last] = value;
    return acc;
  }, {} as Record<string, any>);
};

export const getDateOnly = (date?: Date) => {
  return date ? format(new Date(date), 'yyyy-MM-dd') : date;
};

/**
A function that returns a universally unique identifier (uuid).
@example: 1b83fd69-abe7-468c-bea1-306a8aa1c81d
*/
export const uuid = () => {
  const hashTable = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  let _uuid = [];
  for (let i = 0; i < 35; i++) {
    if (i === 7 || i === 12 || i === 17 || i === 22) {
      _uuid[i] = '-';
    } else {
      _uuid[i] = hashTable[Math.floor(Math.random() * hashTable.length - 1)];
    }
  }
  return _uuid.join('');
};

/**
 * Type guard to assert that hook is used within it's provider
 * @param data - to assert
 */
export function assertHookWithinProvider<T>(data: T | null): asserts data is T {
  if (!data) {
    throw new Error("Please check that this hook is used within it's provider");
  }
}
