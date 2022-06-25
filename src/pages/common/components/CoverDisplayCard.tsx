import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import { useState } from 'react';
import cx from 'classnames';
import classes from './styles.module.scss';

const CoverDisplayCard = (props: {
  title: string;
  secondary?: boolean;
  items?: Array<string>;
}) => {
  const [showAll, setShowAll] = useState(false);
  const allItems = props.items || [];
  const firstFive = allItems.slice(0, 5); // take 5 items

  return (
    <Box className={classes.display}>
      <Box className={classes.displayLabel}>
        {props.title && (
          <Typography
            variant="h5"
            className={cx(classes.displayHeader, {
              [classes.secondary]: props.secondary,
            })}
          >
            {props.title}
          </Typography>
        )}
        <span className={classes.subLabel} onClick={() => setShowAll(v => !v)}>
          {showAll ? 'See less' : 'See more'}
        </span>
      </Box>
      <Box className={classes.displayContent}>
        <List>
          {(showAll ? allItems : firstFive).map((item, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemText
                primary={item}
                className={classes.listItemText}
                primaryTypographyProps={{
                  fontSize: 12,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CoverDisplayCard;
