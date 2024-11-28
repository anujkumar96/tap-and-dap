import { useState } from "react";
import { PASSWORD,TEXT } from "../utils/FieldTypes";
import { PASSWORD_LABEL, PASSWORD_PLACEHOLDER } from "../Label";
import { InputGroup, FormControl, Form } from "react-bootstrap";

const QPassword = ({ label = PASSWORD_LABEL, name, type = PASSWORD, placeholder = PASSWORD_PLACEHOLDER, onInputChange, qpswCls = "", ...otherProps }) => {

    const [password, setPassword] = useState("");

    const handleHideAndShow = () => {
        const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');
        const type = password.getAttribute('type') === PASSWORD ? TEXT : PASSWORD;
        password.setAttribute('type', type);
        if (type === PASSWORD) {
            togglePassword.classList.remove('fa-eye');
            togglePassword.classList.add('fa-eye-slash');
        } else {
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye');
        }
    }

    const handleOnChange = (event) => {
        setPassword(event.target.value)
        if (onInputChange) {
            onInputChange(event)
        }
    }

    return (<div className="qpassword-wrapper">

        <Form.Label>{label}</Form.Label>
        <InputGroup className="mb-3">
            <FormControl id="password" className={`${qpswCls}`} type={type} placeholder={placeholder} {...otherProps} onChange={handleOnChange} name={name} value={password} {...otherProps}
            />
            {/* <InputGroup.Append onClick={handleHideAndShow}>
                <InputGroup.Text><i className={`fa fa-eye-slash`} aria-hidden="true" id="togglePassword"></i></InputGroup.Text>
            </InputGroup.Append> */}
            <InputGroup></InputGroup>
        </InputGroup>
    </div>
    )
};

export default QPassword;