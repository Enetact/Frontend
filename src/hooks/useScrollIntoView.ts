import type { RefObject } from 'react';
import { useLayoutEffect } from 'react';
import { scroller } from 'react-scroll';

export default function useScrollIntoView(
  ref: RefObject<HTMLElement>,
  targetId: string,
  containerId: string = 'scroll-container',
) {
  const element = ref.current;
  useLayoutEffect(() => {
    if (element && targetId) {
      const elementBounds = element.getBoundingClientRect();
      const parentHeight = (window.innerHeight || 0) - 220;

      if (elementBounds.top > parentHeight) {
        scroller.scrollTo(targetId, {
          duration: 500,
          delay: 0,
          smooth: true,
          containerId,
          offset: 50,
        });
      }
    }
  }, [element, targetId, containerId]);
}
