import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { validateDate } from "../../src/utils/generalUtils";

const PastDatePicker = (props: any) => {
  const {
    input,
    meta: { touched, error },
    valuedata,
  } = props;
  const [dateValue, setdateValue] = useState<any>("");
  // console.log(valueData)
  const handleChangeRaw = (value: any) => {
    if (validateDate(value)) {
      const date = moment(value);
        //condition for checking invalid date entered for feb month
      if (moment(value).isBefore() && value.slice(0, 2) === date.format("MM")) {
        props.input.onChange(date);
      } else {
        toast.error("Enter valid date");
      }
    } else {
      props.input.onChange(null);
      if (
        value !== undefined &&
        value !== "" &&
        !value.includes("_") &&
        dateValue !== value
      ) {
        toast.error("Enter valid date(MM/DD/YYYY)");
      }
    }
    setdateValue(value);
  };
  return (
    <>
      <DatePicker
        onSelect={(date: any) => {
          input.onChange(date);
        }}
        dateFormat="MM/dd/yyyy"
        selected={input?.value ? new Date(input?.value) : undefined}
        disabledKeyboardNavigation
        {...props}
        shouldCloseOnSelect={true}
        startDate={input.startDate}
        onChangeRaw={(event) => handleChangeRaw(event.target.value)}
        customInput={<InputMask mask="99/99/9999" />}
      />
      <h6 className="danger">
        {valuedata && touched && error && <span>{error}</span>}
      </h6>
    </>
  );
};

export default PastDatePicker;
