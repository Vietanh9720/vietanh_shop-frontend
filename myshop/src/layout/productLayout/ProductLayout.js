import React, { useEffect, useState } from "react";
import { PlusCircle } from "react-feather";
import { Modal, Table } from "reactstrap";
import ProductApi from "../../api/productApi";
import ModalCreate from "./ModalCreate";
import ProductTableData from "./ProductTableData";
import { toastr } from "react-redux-toastr";
const ProductLayout = () => {
  //notif
  const showFailureNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: true,
      progressBar: true,
      position: "top-right",
    };
    toastr.success(title, message, options);
  };
  const showSuccessNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: true,
      progressBar: true,
      position: "top-right",
    };
    toastr.success(title, message, options);
  };
  //state
  const [listPrd, setListPrd] = useState([]);
  const [isOpenModalCreate, setOpenModalCreate] = useState(false);
  //hook
  useEffect(() => {
    const getListProduct = async () => {
      const result = await ProductApi.getAllProducts();
      setListPrd(result.data.data.content);
    };

    getListProduct();
  }, []);
  //rerender
  const getListProduct = async () => {
    const result = await ProductApi.getAllProducts();
    setListPrd(result.data.data.content);
  };
  //action
  const onclickUpdate = () => {
    alert("update...");
  };
  const onclickDelete = async (productId) => {
    const result = await ProductApi.deleteProductsById(productId);
    
    
    if (result.data.data == true) {
      showSuccessNotification("Delete Product","Success")
      window.location.reload();
    } else {
      showFailureNotification("Delete Product","Failured")
    }
  };
  const onclickCreate = () => {
    setOpenModalCreate(true);
  };
  

  //table data
  const dataTable = listPrd.map((item, index) => {
    return (
      <ProductTableData
        key={index}
        data={item}
        deleteAction={(productId) => onclickDelete(productId)}
        updateAction={() => onclickUpdate()}
      ></ProductTableData>
    );
  });

  return (
    <div>
      <b className="h1-custom">PRODUCT MANAGERMENT</b>
      <span
        className="float-right-and-from-the-right"
        onClick={() => onclickCreate(true)}
      >
        <PlusCircle size={50}></PlusCircle>
        <b>ADD NEW</b>
      </span>
      <Table>
        <thead>
          <tr>
            <th style={{ width: "12%" }}>Mã sản phẩm </th>
            <th style={{ width: "15%" }}>Tên sản phẩm</th>
            <th style={{ width: "30%" }}>Mô tả</th>
            <th style={{ width: "10%" }}>Giá</th>
            <th style={{ width: "10%" }}>Số lượng</th>
            <th style={{ width: "20%" }}>Thời gian bảo hành</th>
            <th>Sửa/Xóa</th>
          </tr>
        </thead>
        {dataTable}
      </Table>
      <Modal isOpen={isOpenModalCreate}>
        <ModalCreate closeModal={() => setOpenModalCreate(false)}></ModalCreate>
      </Modal>
    </div>
  );
};
export default ProductLayout;
