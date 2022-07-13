import { Input, Button, FormGroup, Row, Col } from "reactstrap";
import React, { useEffect, useState, useRef } from "react";
import { ReactstrapInput } from "reactstrap-formik";
import style from "../../cssmodule/Login.module.css";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, FastField, Form,Field } from "formik";
import "react-toastify/dist/ReactToastify.css";
import ToastCustom from "../../component/ToastCustom";
import Regex from "../../constant/Regex";
import { Eye, EyeOff } from "react-feather";
const LoginForm = () => {
  const [showEye, setShowEye] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const redirectafterLogin = () => {
    window.location.href = "/";
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Không được để trống !")
          .test("checkvalidemail", "Email invalid!", (email) => {
            if (Regex.EMAIL_REGEX.test(email)) {
              return true;
            } else {
              return false;
            }
          }),
        password: Yup.string()
          .required("Không được để trống !")
          .test("checkvalidpassword", "Password invalid!", (password) => {
            if (Regex.PASSWORD_REGEX.test(password)) {
              return true;
            } else {
              return false;
            }
          }),
      })}
      onSubmit={async (values, { setFieldError }) => {
        console.log(values.email + values.password);
        redirectafterLogin();
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <div className={style.formlogin}>
        <Form>
          <FormGroup>
            <FastField
              size="lg"
              type="email"
              name="email"
              placeholder="Email"
              component={ReactstrapInput}
            ></FastField>
          </FormGroup>
          <Row>
            <Col md={11}>
              <FormGroup>
                <Field
                  style={{ marginRight: "-10px" }}
                  placeholder="Mật khẩu"
                  type={showPassword}
                  size="lg"
                  name="password"
                  component={ReactstrapInput}
                ></Field >
              </FormGroup>
            </Col>
            {(showEye) ? (
              <Col md={1}>
                <div className={style.showhidePassword}>
                  <Eye
                    style={{ marginTop: "10px" }}
                    onClick={() => {setShowPassword("password");setShowEye(false)}}
                  ></Eye>
                </div>
              </Col>
            ) : (
              <Col md={1}>
                <div className={style.showhidePassword}>
                  <EyeOff style={{ marginTop: "10px" }}onClick={()=>{setShowPassword("text");setShowEye(true)}}></EyeOff>
                </div>
              </Col>
            )}
          </Row>
          <br></br>

          <Button
            size="lg"
            style={{ width: "300px", marginBottom: "7px" }}
            color="primary"
          >
            {" "}
            Đăng nhập
          </Button>
          <br></br>
          <a href="/">Quên mật khẩu ?</a>
          <div
            style={{
              backgroundColor: "gray",
              height: "1px",
              marginTop: "50px",
            }}
          ></div>
          <br></br>
          <Button
            size="lg"
            style={{ width: "200px", marginBottom: "7px" }}
            color="success"
            onClick={redirectafterLogin}
          >
            {" "}
            Tạo tài khoản mới
          </Button>
        </Form>
        <ToastCustom></ToastCustom>
      </div>
    </Formik>
  );
};
export default LoginForm;
