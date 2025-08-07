import { useEffect, useState } from 'react';

/**
 * Hook that debounces a value by a given delay.
 * @param value The input value to debounce
 * @param delay Delay in milliseconds
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		// Set up a timeout to update debouncedValue after the specified delay
		const handler = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Cleanup if value or delay changes or component unmounts
		return () => {
			window.clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
