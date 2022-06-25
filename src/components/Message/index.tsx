import React from 'react';
import cx from 'classnames';
import { Box, Grid, Avatar, Stack, Icon, IconTypeMap } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Animated from '@/components/Animated';
import classes from './styles.module.scss';

type MessageProps = {
  messages: (string | JSX.Element)[];
};
const Message = React.memo(({ messages }: MessageProps) => {
  return (
    <Box my={2}>
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
        <Animated props={{ delay: 0 }} component={Avatar} className={classes.avatar}>
          <FaceIcon />
        </Animated>
        <Box>
          <Grid container direction="column">
            <Animated
              items={messages}
              render={message => (
                <div className={classes.messageWrapper}>
                  <div>{message}</div>
                  <HelpOutlineOutlinedIcon className={classes.helpIcon} />
                </div>
              )}
            />
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
});

export const InfoContent: React.FC = ({ children, ...props }) => {
  return (
    <Box {...props} className={classes.infoWrapper} my={3} mx={-3}>
      <div className={cx(classes.infoEdge, classes.top)} />
      <div className={classes.infoContent}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          {children}
        </Stack>
      </div>
      <div className={cx(classes.infoEdge, classes.bottom)} />
    </Box>
  );
};

export const SimpleMessage = ({
  message,
  icon,
  color = 'inherit',
}: {
  message: string;
  icon?: IconTypeMap['props']['children'];
  color?: IconTypeMap['props']['color'];
}) => (
  <Box className={classes.simpleMessageWrapper} mb={2}>
    {icon && <Icon color={color}>{icon}</Icon>}
    <Box sx={{ color: `${color}.main` }} className={classes.simpleMessage}>
      {message}
    </Box>
  </Box>
);

export default Message;
