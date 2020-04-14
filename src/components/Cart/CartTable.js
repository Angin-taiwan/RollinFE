import React from "react";
import "./CartScss.scss";
function CartTh() {
  return (
    <>
      <table className="table table-hover" size="50%">
        <thead>
          <tr>
            <th>商品圖片</th>
            <th>商品名稱</th>
            <th>規格</th>
            <th>數量</th>
            <th>金額</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>
              <a href="#">
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>
              <a href="#">
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CartTh;
