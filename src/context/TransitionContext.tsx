import type { UseTransitionProps } from 'react-spring';
import { createContext, useMemo, useEffect, useContext, useState, useCallback } from 'react';
import { useTransition } from 'react-spring';
import { assertHookWithinProvider } from '@/utils/helper';

type TransitionContextValue = {
  queue: (number | string)[];
  queueMap: Record<number | string, boolean>;
  enqueue: (id: number | string | null) => void;
  dequeue: () => number | string | null;
  isItemNext: (id: number | string | null) => boolean;
  isItemAnimated: (id: number | string | null) => boolean | undefined;
};
const TransitionContext = createContext<TransitionContextValue | null>(null);

export const TransitionProvider = ({ children }: any) => {
  const [queueData, setQueueData] = useState<{
    queue: any[];
    queueMap: Record<number | string, boolean>;
  }>({
    queue: [],
    queueMap: {},
  });
  const { queue, queueMap } = queueData;

  const enqueue = useCallback((id: number | string | null) => {
    if (id) {
      setQueueData(d => {
        return {
          queue: [...d.queue, id],
          queueMap: { ...d.queueMap, [id]: false },
        };
      });
    }
  }, []);

  const dequeue = useCallback(() => {
    const item = queue[0];
    if (item) {
      setQueueData(d => {
        return {
          queue: [...d.queue.filter(v => v !== item)],
          queueMap: { ...d.queueMap, [item]: true },
        };
      });
    }
    return item;
  }, [queue]);

  const isItemNext = useCallback(
    (id: number | string | null) => {
      return queue.length > 0 && queue[0] === id;
    },
    [queue],
  );

  const isItemAnimated = useCallback((id: number | string | null) => queueMap[id!], [queueMap]);

  const value = useMemo(
    () => ({
      queue,
      queueMap,
      enqueue,
      dequeue,
      isItemNext,
      isItemAnimated,
    }),
    [queue, queueMap, isItemNext, enqueue, dequeue, isItemAnimated],
  );

  return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>;
};

export function useTransitionContext<T>(
  itemId: number | string,
  items: T | T[],
  props: UseTransitionProps<T> = {},
) {
  const { enter: to, ...rest } = props;
  const data = useContext(TransitionContext);
  assertHookWithinProvider<TransitionContextValue>(data);

  const { queueMap, enqueue: register, dequeue, isItemNext, isItemAnimated } = data;
  const isNext = isItemNext(itemId);
  const isAnimated = isItemAnimated(itemId);
  const enter = useCallback(
    (item, idx) => {
      if (isNext && !isAnimated) {
        return async (next: any) => {
          await next(to);
          if (!Array.isArray(items) || idx + 1 === items.length) {
            dequeue();
          }
        };
      }
    },
    [to, items, dequeue, isNext, isAnimated],
  );

  const transition = useTransition<T, UseTransitionProps<T>>(items, {
    delay: 200,
    trail: 500, // how fast do you want the next element to transition (trail - delay)
    ...rest,
    enter,
    reset: isNext && !isAnimated,
  });

  useEffect(() => {
    queueMap[itemId] ?? register(itemId);
  }, [itemId, register, queueMap]);

  const output = useMemo(
    () => ({
      transition,
      isNext,
      isAnimated,
    }),
    [isNext, isAnimated, transition],
  );

  return output;
}

export default TransitionContext;
