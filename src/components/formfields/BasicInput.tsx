import {
	useController,
	useFormContext,
	type FieldValues,
	type Path,
} from 'react-hook-form';

import { BasicTypeInput, InputType } from '../DynamicForm/types/formFieldTypes';
import { FieldErrorComponent } from './FieldError';

interface Props<T extends FieldValues> {
	placeholder: string;
	type: InputType | BasicTypeInput;
	fieldName: Path<T>;
	label: string;
	readOnly?: boolean;
	disabled?: boolean;
	required?: boolean;
}
export function BasicInput<T extends FieldValues>({
	placeholder,
	type,
	label,
	required = false,
	readOnly = false,
	disabled = false,
	fieldName,
}: Props<T>) {
	const { register } = useFormContext<T>();

	const {
		fieldState: { error },
	} = useController<T, Path<T>>({
		name: fieldName,
	});

	const registerOption =
		type === 'number'
			? {
					valueAsNumber: true,
			  }
			: undefined;
	return (
		<fieldset className="fieldset w-[300px]">
			<legend className="fieldset-legend">
				{label}
				{required && (
					<span className="text-error justify-self-center text-sm">*</span>
				)}
			</legend>

			<input
				id={fieldName}
				type={type}
				placeholder={placeholder}
				className={`input border ${
					readOnly && 'disabled:bg-gray-100 cursor-not-allowed'
				} `}
				{...{ disabled, readOnly }}
				{...register(fieldName, registerOption)}
			/>
			<FieldErrorComponent errors={error} key={`error-message-${fieldName}`} />
		</fieldset>
	);
}
