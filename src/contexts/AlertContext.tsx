'use client';
import { DaisyModal } from '@/components/Common/daisyModal';
import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

export type ModalOptions = {
	title?: string;
	text?: string;
	icon?: 'success' | 'error' | 'warning' | 'info' | ReactNode;
	showDenyButton?: boolean;
	showCancelButton?: boolean;
	confirmButtonText?: string;
	denyButtonText?: string;
	cancelButtonText?: string;
	customButtons?: ({
		onConfirm,
		onDeny,
		onCancel,
	}: {
		onConfirm: () => void;
		onDeny: () => void;
		onCancel: () => void;
	}) => ReactNode;
};

type InternalOptions = ModalOptions & {
	resolve?: (value: 'confirm' | 'deny') => void;
	reject?: (reason?: any) => void;
};

export const DaisyModalContext = createContext<{
	showModal: (opts: ModalOptions) => Promise<'confirm' | 'deny'>;
} | null>(null);

export function DaisyModalProvider({ children }: { children: ReactNode }) {
	const [options, setOptions] = useState<InternalOptions | null>(null);

	const showModal = (opts: ModalOptions) => {
		return new Promise<'confirm' | 'deny'>((resolve, reject) => {
			setOptions({ ...opts, resolve, reject });
		});
	};

	const handleConfirm = () => {
		options?.resolve?.('confirm');
		setOptions(null);
	};

	const handleDeny = () => {
		options?.resolve?.('deny');
		setOptions(null);
	};

	const handleCancel = () => {
		options?.reject?.(new Error('Cancel clicked'));
		setOptions(null);
	};

	return (
		<DaisyModalContext.Provider value={{ showModal }}>
			{children}
			{options && (
				<DaisyModal
					{...options}
					onConfirm={handleConfirm}
					onDeny={options.showDenyButton ? handleDeny : undefined}
					onCancel={options.showCancelButton ? handleCancel : undefined}
				/>
			)}
		</DaisyModalContext.Provider>
	);
}
