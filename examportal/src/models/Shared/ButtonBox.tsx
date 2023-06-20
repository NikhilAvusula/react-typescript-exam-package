import "../../scss/CommonImports/main.scss"

interface IButtonBoxProps {
  handleBtnClick?: () => void;
  imageSrc?: string;
  buttonText: string;
  type?:"button" | "submit" | "reset" | undefined
  disabled?:boolean;
  className?: string;
}

const ButtonBox = (props: IButtonBoxProps) => {
  const { handleBtnClick, imageSrc, buttonText, type, disabled, className } = props
  return (
    <div className="buttonBox">
      <button className={className ?? ''} onClick={handleBtnClick} type={type} disabled={disabled}>
        {imageSrc ? <img className="buttonBoxImage" src={imageSrc} alt="imageSrc" /> : <></>}
        <span className="buttonBoxText">{buttonText}</span>
      </button>
    </div>
  )
}

export default ButtonBox