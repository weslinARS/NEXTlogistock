interface CheckBoxInputProps {
  fieldName: string;
  value: boolean;
}

function CheckBoxInput({ fieldName, value }: CheckBoxInputProps) {
  return (
    <>
      <input type="checkbox" name={fieldName} className={"checkbox"} />
    </>
  );
}

export default CheckBoxInput;
