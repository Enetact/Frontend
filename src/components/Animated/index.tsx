import type { UseTransitionProps } from 'react-spring';
import { useRef } from 'react';
import { animated } from 'react-spring';
import { Element } from 'react-scroll';
import cx from 'classnames';
import { useTransitionContext } from '@/context/TransitionContext';
import { uuid } from '@/utils/helper';
import useScrollIntoView from '@/hooks/useScrollIntoView';

export enum AnimationType {
  FadeIn = 'FadeIn',
  ScaleOutTopLeft = 'ScaleOutTopLeft',
}

const ANIMATION_TYPE: Record<AnimationType, UseTransitionProps> = {
  [AnimationType.FadeIn]: { from: { opacity: 0 }, enter: { opacity: 1 } },
  [AnimationType.ScaleOutTopLeft]: {
    from: { opacity: 0, transformOrigin: 'top left', transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
  },
};

type AnimatedProps<T> = {
  items?: T | T[];
  type?: AnimationType;
  props?: UseTransitionProps;
  render?: (item: T) => JSX.Element | string | number | boolean;
  children?: JSX.Element | string | number | boolean | null;
  component?: any;
  className?: string;
  [key: string]: any;
};
function Animated<T>({
  type: animationType = AnimationType.ScaleOutTopLeft,
  props,
  items,
  render,
  children,
  component,
  className,
  ...rest
}: AnimatedProps<T>) {
  const uuidRef = useRef<string>(uuid());
  const fieldRef = useRef<HTMLDivElement>(null);
  useScrollIntoView(fieldRef, uuidRef.current);
  const { transition, isNext, isAnimated } = useTransitionContext(
    uuidRef.current,
    (items ?? true) as T,
    { ...ANIMATION_TYPE[animationType], ...props },
  );
  const Component = component ? animated(component) : animated.div;

  return (
    <>
      {isNext || isAnimated
        ? transition((style, item) => {
            return (
              <Element name={uuidRef.current}>
                <Component {...rest} className={cx(className)} style={style} ref={fieldRef}>
                  {children || (render && render(item)) || null}
                </Component>
              </Element>
            );
          })
        : null}
    </>
  );
}

export default Animated;
