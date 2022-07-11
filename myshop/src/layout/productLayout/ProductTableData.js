import React, { useState } from "react";
import { Edit2, Trash } from "react-feather";

const ProductTableData = (props) => {
  const [product, setProduct] = useState(props.data);
  return (
    <tbody>
      <tr>
        {/* <td>{props.data.productId}</td>
        <td>{props.data.productName}</td>
        <td>{props.data.description}</td>
        <td>{props.data.cost}</td>
        <td>{props.data.quantity}</td>
        <td>{props.data.insurance}</td> */}
        <td>{product.productId}</td>
        <td>{product.productName}</td>
        <td>{product.description}</td>
        <td>{product.cost}</td>
        <td>{product.quantity}</td>
        <td>{product.insurance}</td>
        <td>
          <Edit2 />
          <Trash
            onClick={() => {
              if (window.confirm("Bạn có chắc chắn xóa sản phẩm này không ?")) {
                props.deleteAction(product.productId);
              }
            }}
          />
        </td>
      </tr>
    </tbody>
  );
};
export default ProductTableData;
