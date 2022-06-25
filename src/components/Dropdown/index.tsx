import { useState, MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PageLink } from '@/types/common';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';

const Dropdown = (props: { items: PageLink[]; icon: JSX.Element }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div
        id="dropdown-button"
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.icon}
      </div>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'dropdown-button',
        }}
      >
        {props.items.map((item, index) => (
          <MenuItem onClick={handleClose} key={index}>
            {item.to ? (
              <Link to={item.to} className={classes.link}>
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Dropdown;
