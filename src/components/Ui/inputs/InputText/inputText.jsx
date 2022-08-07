import "./inputText.css";

export default function InputText(props) {
  let selectClass = props.selectClass ? ` ${props.selectClass}` : "";

  return (
    <div className="input-container">
      <label className="labelInput" htmlFor={props.id}>
        {props.labelText}
      </label>
      <input
        className={`inputText${selectClass}`}
        autoComplete="off"
        {...props}
      ></input>
    </div>
  );
}
