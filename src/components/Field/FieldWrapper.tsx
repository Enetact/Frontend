import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import Message from '@/components/Message';
import Animated, { AnimationType } from '@/components/Animated';
import classes from './styles.module.scss';

type FieldWrapperProps = {
  prompt?: string | string[];
  title?: string;
  valid?: boolean;
  subtitle?: string;
  children: React.ReactNode;
};
const FieldWrapper = ({ prompt, title, subtitle, children }: FieldWrapperProps) => {
  const messages = useMemo(() => (typeof prompt === 'string' ? [prompt] : prompt), []);
  return (
    <Box mb={4}>
      {messages && <Message messages={messages} />}
      <Animated type={AnimationType.FadeIn}>
        <>
          {(title || subtitle) && (
            <Box mb={2}>
              {title && (
                <Typography variant="h5" className={classes.title}>
                  {title}
                </Typography>
              )}
              {subtitle && <Typography variant="body2">{subtitle}</Typography>}
            </Box>
          )}
          {children}
        </>
      </Animated>
    </Box>
  );
};

export default FieldWrapper;
