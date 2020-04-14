import React from "react";
import "./CartScss.scss";

function CartStep() {
  return (
    <>
      <ol class="progress progress--large p-3">
        <li class="is-complete" data-step="1">
          購物車
        </li>
        <li class="is-complete" data-step="2">
          付款方式
        </li>
        <li class="is-active" data-step="3">
          確認訂單
        </li>
        <li data-step="4" class="progress__last">
          完成訂單
        </li>
      </ol>
    </>
  );
}

export default CartStep;
