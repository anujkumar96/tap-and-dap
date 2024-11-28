import { useState } from "react";
import { FormControl, FormLabel } from "react-bootstrap";

const  QTextInput = ({qinputCls="", value="", label="", onInputChange, ...otherProps}) => {
    const [updatedValue, setUpdatedValue] = useState(value);
    
    const onChange = (evt) => {
      setUpdatedValue(evt.target.value);
      if(onInputChange){
        onInputChange(evt)
      }
    }

    return (
      <div className="qtextinput-wrapper">
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl className={qinputCls} value={updatedValue} onChange={onChange} {...otherProps} />
      </div>
    );
}
export default QTextInput;