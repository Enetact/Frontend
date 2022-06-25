import type { Location } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useRouteChange(callback?: (location: Location) => void) {
  const location = useLocation();
  useEffect(() => {
    if (callback) {
      callback(location);
    }
  }, [location, callback]);
}
