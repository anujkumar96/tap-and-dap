import {useState} from "react";
import { useDispatch } from "react-redux";

import QButton from "../BaseUI/QButton";
import QCheckbox from "../Forms/QCheckbox";
import QPassword from "../Forms/QPassword";
import QTextInput from "../Forms/QTextInput";
import { REGISTER, FREE_SIGN_UP, DONT_HAVE_AN_ACCOUNT, ALREADY_HAVE_AN_ACCOUNT, LOG_IN, FULL_NAME, FULL_NAME_PLACEHOLDER, EMAIL_ADDRESS, EMAIL_ADDRESS_PLACEHOLDER, PASSWORD_LABEL, PASSWORD_PLACEHOLDER, TERMS_AND_CONDITIONS, SIGN_UP} from "../Label";
import {Form} from "react-bootstrap";
import { EMAIL, PASSWORD, SUBMIT, CHECKBOX } from "../../newComponents/utils/FieldTypes";
// import { registerUser } from "./actions";
// import _history from "../../newComponents/utils/history";
import "./style.scss";
import { useNavigate } from "react-router";


export const Register = ({ pageHeader = REGISTER, footer, ...otherProps }) => {
    const history = useNavigate();
    const [fields,setFieldValues] = useState({});
    const dispatch = useDispatch();
    const handleInputChange = ({target:{name,value,checked,type}}) =>{
        let fields_ = {...fields};
        fields_[name] = type === CHECKBOX?checked:value;
        setFieldValues(fields_);
    };

    const handleSignUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(fields && (fields.email && fields.password && fields.fullname)){
            console.log("inside if")
            history("/");
            // dispatch(registerUser(fields));
        }
    };

    return (<div className="acc pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-4 col-lg-5">
                    <div className="card">
                        <div className="card-header pt-4 pb-4 text-center bg-primary">
                            <span className="text-dark-50 text-center mt-0 fw-bold">{REGISTER}</span>
                        </div>

                        <div className="card-body p-4">

                            <div className="text-center w-75 m-auto">
                                <h4 className="text-dark-50 text-center mt-0 fw-bold">{FREE_SIGN_UP}</h4>
                                <p className="text-muted mb-4">{DONT_HAVE_AN_ACCOUNT}</p>
                            </div>

                            <Form onSubmit={handleSignUp}>

                                <div className="mb-3">
                                    <QTextInput label={FULL_NAME} placeholder={FULL_NAME_PLACEHOLDER} onInputChange={handleInputChange} name={"fullname"}/>
                                </div>

                                <div className="mb-3">
                                    <QTextInput type={EMAIL} label={EMAIL_ADDRESS} placeholder={EMAIL_ADDRESS_PLACEHOLDER} onInputChange={handleInputChange} name={"email"}/>
                                </div>

                                <div className="mb-3">
                                    <QPassword label={PASSWORD_LABEL} placeholder={PASSWORD_PLACEHOLDER} type={PASSWORD} onInputChange={handleInputChange} name={"password"}/>
                                </div>

                                <div className="mb-3">
                                    <QCheckbox label={TERMS_AND_CONDITIONS} onInputChange={handleInputChange} name={"termsAndConditions"}/>
                                </div>

                                <div className="mb-3 text-center">
                                    <QButton className="btn btn-primary" label={SIGN_UP} type={SUBMIT} />
                                </div>

                            </Form>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <p className="text-muted">{ALREADY_HAVE_AN_ACCOUNT} <span  className="text-muted ms-1 cursor-pointer" onClick={()=>history("/")}><b>{LOG_IN}</b></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

