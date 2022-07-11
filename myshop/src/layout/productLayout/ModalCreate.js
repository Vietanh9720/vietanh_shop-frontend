import { Formik, FastField, Form } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { ReactstrapInput } from "reactstrap-formik";
import { Card, FormGroup, CardBody, Button } from "reactstrap";
import ProductApi from "../../api/productApi";
import { toastr } from "react-redux-toastr";
const ModalCreate = (props) => {
  const showSuccessNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: true,
      progressBar: true,
      position: "top-right",
    };
    toastr.success(title, message, options);
  };
  return (
    <>
      <Formik
        initialValues={{
          productId: "",
          productName: "",
          description: "",
          cost: "",
          quantity: "",
          insurance: "",
        }}
        validationSchema={Yup.object({
          productName: Yup.string().required("Không được để trống !"),
          description: Yup.string().required("Không được để trống !"),
          cost: Yup.number().required("Không được để trống !"),
          quantity: Yup.number().required("Không được để trống !"),
          insurance: Yup.number().required("Không được để trống !"),
        })}
        onSubmit={async (values, { setFieldError }) => {
          try {
            // call api
            await ProductApi.createProduct(
              values.productName,
              values.description,
              values.cost,
              values.quantity,
              values.insurance
            );
            showSuccessNotification(
              "Create Product",
              "Create Product Successfully!"
            );
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        }}
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
                      label="Tên sản phẩm"
                      bsSize="sm"
                      type="text"
                      name="productName"
                      placeholder="Ví dụ : Tủ lạnh, điều hòa,..."
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      label="Mô tả"
                      bsSize="sm"
                      type="text"
                      name="description"
                      placeholder="Mô tả về sản phẩm này"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      label="Giá"
                      bsSize="sm"
                      type="number"
                      name="cost"
                      placeholder="Ví dụ : 2000000"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      label="Số lượng"
                      bsSize="sm"
                      type="number"
                      name="quantity"
                      placeholder="Ví dụ : 20"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      label="Thời hạn bảo hành"
                      bsSize="sm"
                      type="number"
                      name="insurance"
                      placeholder="Ví dụ : 2"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <Button
                    color="primary"
                    size="sm"
                    type="submit"
                    // disabled={isSubmitting}
                  >
                    Thêm sản phẩm
                  </Button>{" "}
                  {/* BUTTON */}
                  <div style={{ float: "right" }}>
                    <Button
                      color="primary"
                      size="sm"
                      onClick={props.closeModal}
                    >
                      Đóng
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>
    </>
  );
};
export default ModalCreate;
