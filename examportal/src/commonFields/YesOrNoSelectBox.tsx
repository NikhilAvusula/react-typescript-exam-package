import { FormGroup} from "reactstrap";
import { ChangeEvent, useEffect, useState } from "react";
const YesOrNo = ({ input, label, options,disabled,isRequired }: any) => {
  const [selected, setSelected] = useState("");

  const onChangeValues = (event: ChangeEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelected(event.target.value);
    return input.onChange(event.target.value);
  };
  
  useEffect(() => {
    setSelected(input.value);
  }, [input?.value]);

  return (
    <FormGroup className="switch">
      <label>
        {label}
        {isRequired && <span className="input-required"> *</span>}
      </label>
      <div className="d-flex">
        {options?.map((element: any, index: number) => (
          <button
            disabled={disabled}
            key={input.name+index}
            name={input.name}
            className={`${
              element.value == selected ? "optSelected" : "optNotSelected"
            }`}
            value={element.value}
            onClick={(event: any) =>
              onChangeValues(event)
            }
          >
            {element.text}
          </button>
        ))}
      </div>
    </FormGroup>
  );
};

export default YesOrNo;
