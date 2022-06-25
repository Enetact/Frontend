import { Chip as MChip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import classes from './styles.module.scss';

type ChipProps = {
  value?: string;
  label: string;
  onClick?: (label: string) => void;
  onDelete?: (label: string) => void;
};
const Chip = ({ value, label, onDelete, onClick }: ChipProps) => (
  <MChip
    label={label}
    deleteIcon={<CloseIcon className={classes.deleteIcon} />}
    onClick={onClick && (() => onClick(value || label))}
    onDelete={onDelete && (() => onDelete(value || label))}
    className={classes.chip}
  />
);

export default Chip;
