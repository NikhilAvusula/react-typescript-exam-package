import { FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";

const SelectField = ({
  input,
  label,
  isRequired,
  values,
  meta: { touched, error },
  disabled,
  placeholder,
  handleChange,
  className,
}: any) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <FormGroup className={`input-field ${className ?? ''}`}>
        <Label>
          {label}
          {isRequired && <span className="input-required">*</span>}
        </Label>
        <Input
          type="select"
          {...input}
          name="select"
          id="state"
          placeholder={placeholder}
          onChange={(e: { target: { value: any } }) => {
            input.onChange(e.target.value);
            handleChange && handleChange(e.target.value)
          }}
          disabled={disabled}
        >
          <option value="" hidden selected>{placeholder}</option>
          {!input.value ? (
            <option key="select" value="">
              {""}
            </option>
          ) : (
            <option key="select" value="">
              {""}
            </option>
          )}
          {values?.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </Input>
        {touched && input.value === "" ? (
          <h6 className="danger error">{error}</h6>
        ) : (
          ""
        )}
    </FormGroup>
  );
};
export default SelectField;
