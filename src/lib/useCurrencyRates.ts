'use client';

import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '@/lib/firebase';

export function useCurrencyRates() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const snapshot = await get(ref(db, 'landing/currencyRates'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Ensure all values are parsed as numbers
          const numericRates: Record<string, number> = {};
          for (const key in data) {
            numericRates[key] = Number(data[key]) || 1;
          }
          setRates(numericRates);
        }
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  return { rates, loading };
}
