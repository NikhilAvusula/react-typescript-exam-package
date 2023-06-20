import { FormGroup, Label, Input } from "reactstrap";
import { ChangeEvent, FocusEvent } from "react";
import "../scss/Shared/commonFields.scss";

const TextField = ({
  input,
  label,
  meta: { touched, error },
  type,
  disabled,
  isRequired,
  max,
  min,
  textBlur,
  handleChange,
  autoComplete,
  className,
  shouldDisplayValue,
  displayValue,
  displayError,
  placeholder
}: any) => {
 
  const getFieldBottomClassName = () => {
    if (touched && error) {
      return 'field-bottom error danger'
    } else if (shouldDisplayValue && !error) {
      return 'field-bottom displayValueContainer'
    } else {
      return 'field-bottom'
    }
  }

  const getFieldBottomValue = () => {
    if (touched && error) {
      return touched && error ? error : ''
    } else if (shouldDisplayValue && !error) {
      return displayValue(input.value)
    } else {
      return ''
    }
  }
  
  return (
    <FormGroup className={`input-field ${className ?? ''}`}>
      <Label>
        {label}{isRequired && <span className="input-required">*</span>}
      </Label>
        <Input
          {...input} 
          type={type}
          maxLength={max}
          min={min}  
          disabled={disabled}  
          autoComplete={autoComplete}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            event.target.value=event.target.value.trimStart();
            if (handleChange) handleChange(event);
            input.onChange(event);
          }}
          onBlur={(event: FocusEvent<HTMLInputElement>) => {
            event.target.value=event.target.value.trim();
            if (textBlur) textBlur(event);
            input.onBlur(event);
          }}
          placeholder={placeholder}
         />
        {!displayError && <h6 className={getFieldBottomClassName()}>{getFieldBottomValue()}</h6>}
    </FormGroup>
  );
};

export default TextField;
