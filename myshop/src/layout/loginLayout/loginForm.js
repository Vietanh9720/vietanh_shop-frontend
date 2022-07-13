import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { ReactstrapInput } from "reactstrap-formik";
import { Card, FormGroup, CardBody, Button, CardTitle } from "reactstrap";
import style from "../../cssmodule/Login.module.css";
const LoginForm = (props) => {
  return (
    <div className={style.formlogin}>
        
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Không được để trống !"),
          password: Yup.string().required("Không được để trống !"),
        })}
        onSubmit={async (values, { setFieldError }) => {}}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div>
                <Form>
                  <FormGroup>
                    
                    <FastField
                      bsSize="sm"
                      type="text"
                      name="username"
                      placeholder="Email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      bsSize="sm"
                      type="password"
                      name="password"
                      placeholder="Password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <Button color="primary" size="mg" type="submit" className={style.buttonLogin}>
                    Đăng nhập
                  </Button>{" "}<br></br><br></br><i style={{fontSize:'13px'}} >Chưa có tài khoản, Đăng ký ngay </i>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
