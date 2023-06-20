import * as React from "react";
import "../scss/Shared/commonFields.scss";
import "../scss/Shared/loader.scss"

interface IAppProps {
  value?: string;
  color?: string;
  size?: string;
  type?: string;
}

const SpinnerModel: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  const { color, size, type } = props;
  return (
    <div className="spinner">
      <div className="lds-page">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>   
      </div>
    </div>
  );
};

export default SpinnerModel;
