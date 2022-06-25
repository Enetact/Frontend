import { ReactComponent as Yard } from '../../assets/icons/yard.svg';
import { ReactComponent as Person } from '../../assets/icons/person.svg';
import { ReactComponent as Persons } from '../../assets/icons/persons.svg';
import { ReactComponent as Lightning } from '../../assets/icons/lightning.svg';

const ICONS = {
  yard: Yard,
  person: Person,
  persons: Persons,
  lightning: Lightning,
};

export type IconType = keyof typeof ICONS;

export default ICONS;
