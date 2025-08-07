'use client';
import {yupResolver } from '@hookform/resolvers/yup';
import { useEffect, type JSX, type ReactElement } from 'react';
import {
	useForm as createFormHook,
	FormProvider,
	type DefaultValues,
	type FieldValues,
	type Path,
	type SubmitHandler,
} from 'react-hook-form';
import { z } from 'zod';
import type { FormConfig, InputType } from './types/formFieldTypes';

import { Button } from '@/components/Common/Button';
import TitleComponent from '@/components/Common/TitleComponent';
import { getModifiedFields } from '@/utils/getModifiedFields.utils';
import { BasicInput } from '../formfields/BasicInput';
import { ComboBoxComponent } from '../formfields/ComboBoxComponent';
import { CreatableSelectInput } from '../formfields/CreatableSelectInput';
import { SelectInput } from '../formfields/SelectInput';
import {
	createBaseInput,
	createCreatableSelectInput,
	createSelectInput,
	isBaseInput,
	isCreatableSelectInput,
	isDebouncedComboboxInput,
	isSelectInput,
} from './types/formFieldTypes';

export interface DependencyRule<T extends FieldValues> {
	watchField: Path<T>; // field to watch
	update: Array<{
		field: Path<T>;
		compute: (allValues: T) => unknown; // what to do when  watchfield change
	}>;
}

interface DynamicFormProps<T extends Record<string, unknown>> {
	formConfig: FormConfig<T>;
	submitHandler: (values: Partial<T> | T) => Promise<void>;
	cancelHandler?: () => void;
	formTitle: string;
	formDescription?: string;
	formIcon?: ReactElement;
	isEditForm?: boolean;
	formState?: (data: T) => void;
	dependencyRules?: DependencyRule<T>[];
	buttonOrientation?: 'vertical' | 'horizontal';
}

function DynamicForm<T extends Record<string, unknown>>(
	props: DynamicFormProps<T>
): JSX.Element {
	const {
		submitHandler,
		cancelHandler,
		formDescription,
		formIcon,
		formConfig,
		formTitle,
		isEditForm,
		dependencyRules = [],
		buttonOrientation = 'horizontal',
	} = props;
	const {
		cancelButtonText,
		formSchema,
		formValidator,
		initialValues,
		showCancelButton,
		submitButtonText,
	} = formConfig;
	type formType = z.infer<typeof formValidator>;
	const formMethods = createFormHook<formType>({
		resolver: yupResolver(formValidator),
		defaultValues: initialValues as DefaultValues<T>,
		reValidateMode: 'onChange',
		mode: 'onBlur',
	});
	const { watch, setValue, getValues } = formMethods;

	const allValues = watch();

	// clean up values for hidden fields if showIf is set
	useEffect(() => {
		formSchema.forEach((col) =>
			col.inputs.forEach((inputDef) => {
				if ('showIf' in inputDef && typeof inputDef.showIf === 'function') {
					const field = (inputDef as any).fieldName as Path<formType>;
					const shouldShow = (inputDef as any).showIf!(allValues as formType);
					const current = getValues(field);
					if (!shouldShow && current !== undefined) {
						setValue(field, undefined as any, {
							shouldDirty: true,
							shouldValidate: false,
						});
					}
				}
			})
		);
	}, [allValues, formSchema, getValues, setValue]);

	// apply dependency rules
	useEffect(() => {
		if (dependencyRules.length === 0) return;
		const subscription = watch((values, { name }) => {
			if (!name) return;
			dependencyRules
				.filter((rule) => rule.watchField === name)
				.forEach((rule) => {
					rule.update.forEach(({ field, compute }) => {
						const newValue = compute(values as T);
						const currentValue = (values as any)[field];
						if (currentValue !== newValue) {
							setValue(field, newValue as any, {
								shouldDirty: true,
								shouldTouch: false,
								shouldValidate: true,
							});
						}
					});
				});
		});

		return () => subscription.unsubscribe();
	}, [watch, setValue, dependencyRules]);
	const onSubmit: SubmitHandler<formType> = async (data, event) => {
		event?.preventDefault();
		event?.stopPropagation();
		const valid = await formMethods.trigger();
		if (!valid) return;
		if (isEditForm) {
			const res = formValidator.parse(data); // validate the form
			const dirtyFields = getModifiedFields(formConfig.initialValues, res);
			return submitHandler(dirtyFields);
		}
		return submitHandler(data);
	};

	return (
		<div className="card flex flex-col justify-center items-center shadow-md border border-neutral py-4 px-2">
			<div className="card-title flex flex-col gap-2 items-center">
				<TitleComponent size="mini">
					{formIcon && formIcon} {formTitle}
				</TitleComponent>

				<div>
					<p className="textarea-md font-light max-w-[600px] text-center">
						{formDescription && formDescription}
					</p>
				</div>
			</div>
			<div className="card-body">
				<FormProvider {...formMethods}>
					<form
						onSubmit={formMethods.handleSubmit(onSubmit)}
						className="flex flex-col gap-2"
					>
						<div className="flex flex-col md:flex-row gap-2 ">
							{
								/* form columns */
								formSchema.map((column, index) => {
									return (
										<div
											className="flex flex-col gap-2"
											key={`column-${index}`}
										>
											{column.inputs
												.filter((input) => {
													if (
														'showIf' in input &&
														typeof input.showIf === 'function'
													) {
														return input.showIf(formMethods.getValues());
													}
													return true;
												})
												.map((input, inputIndex) => {
													const key = `input-${index}-${inputIndex}-${
														'fieldName' in input ? input.fieldName : inputIndex
													}`;
													if (isCreatableSelectInput(input)) {
														const creatableSelectInput =
															createCreatableSelectInput(input);
														return (
															<CreatableSelectInput<formType>
																key={key}
																fieldName={creatableSelectInput.fieldName}
																label={creatableSelectInput.label as string}
																placeHolder={creatableSelectInput.placeholder}
																options={
																	creatableSelectInput.creatableSelectConfig
																		.options as unknown as Array<string>
																}
															/>
														);
													} else if (isDebouncedComboboxInput(input)) {
														// <-- Nuevo bloque para el Combobox
														const debouncedComboboxInput = input; // Ya tiene los tipos correctos
														return (
															<ComboBoxComponent
																key={key}
																fieldName={debouncedComboboxInput.fieldName}
																label={debouncedComboboxInput.label as string}
																placeholder={debouncedComboboxInput.placeholder}
																fetchOptions={
																	debouncedComboboxInput.debouncedComboboxConfig
																		.fetchOptions
																}
																debounceTime={
																	debouncedComboboxInput.debouncedComboboxConfig
																		.debounceTime
																}
																valueKey="id" // Clave por defecto para el valor del objeto
																labelKey="name" // Clave por defecto para la etiqueta
															/>
														);
													} else if (isBaseInput(input)) {
														const baseInput = createBaseInput(input);
														return (
															<BasicInput<formType>
																key={key}
																fieldName={baseInput.fieldName}
																label={baseInput.label as string}
																placeholder={baseInput.placeholder as string}
																type={baseInput.type as InputType}
																required={baseInput.required}
																readOnly={baseInput.readOnly}
															/>
														);
													} else if (isSelectInput(input)) {
														const selectInput = createSelectInput(input);
														return (
															<SelectInput<formType, formType>
																key={key}
																fieldName={
																	selectInput.fieldName as unknown as Path<formType>
																}
																label={selectInput.label as string}
																placeHolder={selectInput.placeholder}
																objectArray={
																	selectInput.selectConfig
																		.options as unknown as Array<object>
																}
																optionContentKey={String(
																	selectInput.selectConfig.labelKey
																)}
																valueKey={String(
																	selectInput.selectConfig.valueKey
																)}
																additionalContentKey={String(
																	selectInput.selectConfig.additionalContentKey
																)}
																required={selectInput.required}
																isDisable={selectInput.readOnly}
															/>
														);
													}
													return null;
												})}
										</div>
									);
								})
							}
						</div>
						{/* form buttons */}
						<div
							className={`
               grid gap-x-5 gap-y-5
               grid-cols-1 grid-rows-2
               ${
									buttonOrientation === 'vertical'
										? 'sm:grid-cols-1 sm:grid-rows-2 '
										: 'sm:grid-cols-2 sm:grid-rows-1 '
								}
               `}
						>
							<Button
								key={`submit-button`}
								className="w-full"
								buttonType="submit"
								color="primary"
								content={submitButtonText ?? 'Enviar'}
								isLoading={formMethods.formState.isSubmitting}
							/>
							{showCancelButton && (
								<Button
									className="w-full"
									key={`cancel-button`}
									buttonType="button"
									color="secondary"
									content={cancelButtonText ?? 'Cancelar'}
									onClick={() => cancelHandler?.()}
								/>
							)}
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	);
}
export default DynamicForm;
