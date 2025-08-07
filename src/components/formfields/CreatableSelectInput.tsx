import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  useController,
  useFormContext,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { FieldErrorComponent } from './FieldError';

interface CreatableSelectInputProps<T extends FieldValues> {
  fieldName: Path<T>;
  options: Array<string>;
  label: string;
  placeHolder?: string;
  disabled?: boolean;
  required?: boolean;
}

export function CreatableSelectInput<T extends FieldValues>({
  options: initialOptions,
  label,
  placeHolder,
  disabled,
  fieldName,
  required = false,
}: CreatableSelectInputProps<T>) {
  const context = useFormContext<T>();
  const { fieldState } = useController({
    name: fieldName,
    control: context.control,
  });
  const [options, setOptions] = useState<Array<string>>(initialOptions);
  const [inputValue, setInputValue] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions =
    inputValue === ''
      ? options
      : options.filter((o) =>
          o.toLowerCase().includes(inputValue.toLowerCase()),
        );

  const exactMatch = options.some(
    (o) => o.toLowerCase() === inputValue.toLowerCase(),
  );

  const handleSelect = (option: any) => {
    context.setValue(fieldName, option);
    setInputValue(option);
    setShowDropdown(false);
    setHighlightedIndex(-1);
  };

  const handleCreate = () => {
    const val = inputValue.trim();
    if (!val) return;
    if (!options.includes(val)) {
      setOptions((prev) => [...prev, val]);
    }
    handleSelect(val);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
    setHighlightedIndex(-1);
    context.setValue(fieldName, e.target.value as any);
    context.trigger(fieldName); // Disparar validación
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
        handleSelect(filteredOptions[highlightedIndex]);
      } else if (inputValue && !exactMatch) {
        handleCreate();
      }
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (context.getValues(fieldName) !== inputValue) {
      setInputValue(context.getValues(fieldName));
    }
  }, [context.getValues(fieldName)]);

  return (
    <fieldset className="fieldset w-[300px]">
      <legend className="fieldset-legend">
        {label} {required && <span className="text-error text-sm">*</span>}
      </legend>
      <div ref={containerRef} className="relative">
        <input
          type="text"
          className="input border rounded p-2 w-full"
          placeholder={placeHolder || label}
          value={inputValue}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          autoComplete="off"
          {...context.register(fieldName, {
            onChange: (e) => {
              handleInputChange(e as ChangeEvent<HTMLInputElement>);
            },
          })}
        />
        {showDropdown && (
          <ul className="absolute z-10 bg-base-100 border w-full mt-1 max-h-40 overflow-auto rounded shadow">
            {filteredOptions.length === 0 && !exactMatch && inputValue ? (
              <li
                className="p-2 cursor-pointer hover:bg-base-200"
                onMouseDown={handleCreate}
              >
                Crear "{inputValue}"
              </li>
            ) : null}
            {filteredOptions.map((option, idx) => (
              <li
                key={option}
                className={`p-2 cursor-pointer ${idx === highlightedIndex ? 'bg-base-200' : ''}`}
                onMouseDown={() => handleSelect(option)}
                onMouseEnter={() => setHighlightedIndex(idx)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <FieldErrorComponent
        errors={fieldState.error}
        key={`error-message-${fieldName}`}
      />
    </fieldset>
  );
}
