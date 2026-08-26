'use client';

import { useState, useEffect } from 'react';
import { getData } from './firebase';

const cache: Record<string, unknown> = {};

export function useFirebaseData<T>(path: string): { data: T | null; loading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(cache[path] as T | null ?? null);
  const [loading, setLoading] = useState(!cache[path]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cache[path]) {
      setData(cache[path] as T);
      setLoading(false);
      return;
    }

    let cancelled = false;

    getData<T>(path)
      .then((result) => {
        if (!cancelled && result !== null) {
          cache[path] = result;
          setData(result);
        }
        if (!cancelled) setLoading(false);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [path]);

  return { data, loading, error };
}
