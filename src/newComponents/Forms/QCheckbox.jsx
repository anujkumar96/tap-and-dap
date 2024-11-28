import { useState } from "react";
import { Form } from "react-bootstrap";

const QCheckbox = ({
  qinputCls = "",
  checked = false,
  onInputChange,
  label="",
  ...otherProps
}) => {

  const [isChecked, setIsChecked] = useState(checked);

  const onChange = (evt) => {
    setIsChecked(evt.currentTarget.checked);
    if (onInputChange) {
      onInputChange(evt);
    }
  };

  return (
    <div className="qcheckbox-wrapper form-check">
      <Form.Check
        type="checkbox"
        className={qinputCls}
        checked={isChecked}
        label={label}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

export default QCheckbox;