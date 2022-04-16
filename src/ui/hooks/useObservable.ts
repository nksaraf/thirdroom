import { BaseObservable } from "hydrogen-view-sdk";
import { useEffect, useReducer, useRef } from "react";

import useStableMemo from "./useStableMemo";

export function useObservable<O extends BaseObservable<H>, H, T>(
  observableFactory: () => O,
  createHandler: (update: (value: T) => void, observable: O) => H,
  getInitialValue: (observable: O) => T,
  deps: unknown[]
): T {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  const valueRef = useRef<T>();

  const subscriptionHandle = useStableMemo(() => {
    const update = (value: T) => {
      valueRef.current = value;
      forceUpdate();
    };

    const observable = observableFactory();

    const unsubscribe = observable.subscribe(createHandler(update, observable));

    valueRef.current = getInitialValue(observable);

    return unsubscribe;
  }, deps);

  useEffect(() => subscriptionHandle, [subscriptionHandle]);

  return valueRef.current as T;
}
