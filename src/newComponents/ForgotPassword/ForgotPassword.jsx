import "./style.scss";
import {
  LABEL_BACK_TO,
  LABEL_EMAIL_ADDRESS,
  LABEL_ENTER_YOUR_EMAIL,
  LABEL_LOGIN,
  LABEL_LOGO,
  LABEL_RESET_PASSWORD,
  LABEL_RESET_PASSWORD_SUB_HEADING,
} from "../../newComponents/Label";
import { Form } from "react-bootstrap";
import QTextInput from "../Forms/QTextInput";
import QButton from "../BaseUI/QButton";

const ForgotPassword = () => {
  return (
    <div class="reset-pwd-form-wrapper pt-2 pt-sm-5 pb-4 pb-sm-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-4 col-lg-5">
            <div class="card">
              <div class="card-header pt-4 pb-4 text-center bg-primary">
                <span>{LABEL_LOGO}</span>
              </div>

              <div class="card-body p-4">
                <div class="text-center w-75 m-auto">
                  <h4 class="text-dark-50 text-center pb-0 fw-bold">
                    {LABEL_RESET_PASSWORD}
                  </h4>
                  <p class="text-muted mb-4">{LABEL_RESET_PASSWORD_SUB_HEADING}</p>
                </div>

                <Form action="#">
                  <div class="mb-3">
                    <QTextInput
                      label={LABEL_EMAIL_ADDRESS}
                      type="email"
                      required
                      placeholder={LABEL_ENTER_YOUR_EMAIL}
                    />
                  </div>
                  <div class="mb-3 mb-0 text-center">
                    <QButton
                      type="submit"
                      qbtnCls="btn-primary"
                      label={LABEL_RESET_PASSWORD}
                    />
                  </div>
                </Form>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-12 text-center">
                <p class="text-muted">
                  {LABEL_BACK_TO}
                  <a href="/" class="text-muted ms-1">
                    <b> {LABEL_LOGIN}</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
