import {
  useController,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { FaCalendar } from "react-icons/fa";
import { FieldErrorComponent } from "./FieldError";

interface DateFieldProps<T extends FieldValues> {
  fieldName: Path<T>;
  label: string;
  readonly?: boolean;
}

export default function DateInput<T extends FieldValues>({
  label,
  readonly,
  fieldName,
}: DateFieldProps<T>) {
  const { register, control } = useFormContext<T>();

  const {
    fieldState: { error },
  } = useController<T, Path<T>>({
    name: fieldName,
    control,
  });
  return (
    <fieldset className="fieldset w-[300px]">
      <legend className="fieldset-legend">{label}</legend>
      <div className="join join-horizontal w-full">
        <span className="bg-neutral join-item flex w-[56px] flex-col items-center justify-center px-5 font-semibold text-slate-50">
          <FaCalendar />
        </span>
        <input
          type="date"
          className={`input w-full border ${readonly && "disabled:bg-gray-500"} rounded-l-none`}
          {...register(fieldName)}
        />
      </div>
      <FieldErrorComponent errors={error} />
    </fieldset>
  );
}
