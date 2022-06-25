import type { ChangeEvent } from 'react';
import cx from 'classnames';
import { indigo } from '@mui/material/colors';
import type { IconType } from '../Icon/icons';
import Icon from '../Icon';
import classes from './style.module.scss';

type SelectionProps = {
  icon?: IconType;
  name: string;
  label: string;
  onChange: (value: string, checked: boolean) => void;
  controlProps?: {
    value: string;
    hidden?: boolean;
    checked?: boolean;
    component?: any;
  };
};
const Selection = ({
  icon,
  name,
  label,
  onChange,
  controlProps = { value: '' },
}: SelectionProps) => {
  const { component: Component, hidden, checked, value } = controlProps;
  const id = `${name}-${value}`;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    onChange(value, checked);
  };

  return (
    <label
      htmlFor={`${name}-${value}`}
      className={cx(classes.checkboxWrapper, {
        [classes.isChecked]: checked,
      })}
    >
      {Component && (
        <Component
          id={id}
          aria-labelledby={`${name}-${value}`}
          name={name}
          value={value ?? ''}
          checked={checked ?? false}
          className={cx(classes.checkbox, {
            [classes.hidden]: hidden || !checked,
            [classes.isChecked]: checked,
          })}
          onChange={handleChange}
          data-testid={id}
        />
      )}
      {icon && <Icon name={icon} stroke={checked ? indigo[100] : '#ffffff'} />}
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default Selection;
