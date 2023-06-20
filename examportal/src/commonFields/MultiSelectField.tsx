import { Typeahead } from "react-bootstrap-typeahead";
import { FormGroup, Label } from "reactstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import infoIcon from "../images/infoIcon.svg";

const MultipleSelectField = ({
  input,
  label,
  values,
  meta: { touched, error },
  placeholder,
  helpText,
}: any) => {
  return (
    <FormGroup className="mb-4">
      <Label for="state">
        {label}&nbsp;&nbsp;
        {helpText?.length > 0 ? (
          <span className="infoIcon">
            <img src={infoIcon} alt="infoIcon" />
            <p className="tooltiptextInfo"> {helpText}</p>
          </span>
        ) : (
          " "
        )}
      </Label>
      <Typeahead
        id="basic-typeahead-multiple"
        className="multiSelectField"
        labelKey="text"
        multiple
        placeholder={placeholder}
        onChange={(event: any) => {
          setTimeout(() => {
            input.onChange(event);
          }, 100);
        }}
        options={values}
        selected={input.value}
      />
      {touched && values === "" ? <h6 className="danger">{error}</h6> : ""}
    </FormGroup>
  );
};
export default MultipleSelectField;
