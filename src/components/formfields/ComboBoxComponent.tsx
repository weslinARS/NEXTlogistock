'use client';
import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
} from '@headlessui/react';
import { useEffect, useState } from 'react';
import {
	useController,
	useFormContext,
	type FieldValues,
	type Path,
} from 'react-hook-form';
import { FaArrowDown } from 'react-icons/fa';
import { useDebounce } from '@/hooks/useDebounce';

interface ComboBoxOption<T, F extends FieldValues> {
	fieldName: Path<F>;
	fieldOptions?: T[]; // Hacemos esta prop opcional
	valueKey: string;
	labelKey: string;
	placeholder?: string;
	fetchOptions?: (query: string) => Promise<T[]>;
	debounceTime?: number; // Agregamos la prop para el tiempo
	//de debounce

	label?: string; // Agregamos la prop label para el campo
}

export function ComboBoxComponent<T, F extends FieldValues>({
	fieldOptions = [],
	valueKey,
	label,
	labelKey,
	fieldName,
	fetchOptions,
	placeholder,
	debounceTime = 500,
}: ComboBoxOption<T, F>) {
	const context = useFormContext<F>();
	const fieldState = useController({
		name: fieldName,
		control: context.control,
	});

	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query, debounceTime); // Usamos la prop debounceTime
	const [options, setOptions] = useState<T[]>(fieldOptions); // Inicializa con opciones estáticas

	useEffect(() => {
		let isMounted = true;

		// Si no se proporciona una función de fetch, simplemente no hacemos nada aquí
		if (!fetchOptions) return;

		// Si el query debounced está vacío, no se realiza la llamada
		if (debouncedQuery.trim() === '') {
			setOptions([]);
			return;
		}

		const fetchData = async () => {
			setIsLoading(true);
			const data = await fetchOptions(debouncedQuery);
			if (isMounted) {
				setOptions(data);
				setIsLoading(false);
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, [debouncedQuery, fetchOptions]);

	const displayedOptions = fetchOptions
		? options
		: fieldOptions.filter((opt) =>
				String(opt[labelKey as keyof T])
					.toLowerCase()
					.includes(query.toLowerCase())
		  );

	return (
		<div className="flex flex-col gap-1">
			{label && <label className="text-sm font-medium">{label}</label>}
			<Combobox
				value={fieldState.field.value}
				onChange={fieldState.field.onChange}
			>
				<div className="relative">
					<ComboboxInput
						className={'select w-full'}
						displayValue={(item: T) =>
							item ? (item[labelKey as keyof T] as string) : ''
						}
						onChange={(event) => setQuery(event.target.value)}
						placeholder={placeholder}
					/>
					<ComboboxButton className={'group absolute inset-y-0 right-0 px-2.5'}>
						<FaArrowDown />
					</ComboboxButton>
				</div>
				<ComboboxOptions
					anchor="bottom"
					transition
					className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-leave:data-closed:opacity-0"
				>
					{isLoading && <div>Cargando...</div>}
					{!isLoading && displayedOptions.length === 0 && (
						<div>No se encontraron opciones</div>
					)}

					{!isLoading &&
						displayedOptions.map((option, index) => (
							<ComboboxOption value={option} key={`option-${index}`}>
								<div>{option[labelKey as keyof T] as string}</div>
							</ComboboxOption>
						))}
				</ComboboxOptions>
			</Combobox>
		</div>
	);
}
