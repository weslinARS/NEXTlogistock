import { DaisyModalContext } from '@/contexts/AlertContext';
import { useContext } from 'react';

export function useDaisyModal() {
	const ctx = useContext(DaisyModalContext);
	if (!ctx)
		throw new Error('useDaisyModal must be used within DaisyModalProvider');
	return ctx.showModal;
}
