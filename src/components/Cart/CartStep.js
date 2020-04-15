import React from "react";

function CartStep() {
  return (
    <>
      <ol className="progress progress--large p-3">
        <li className="is-complete" data-step="1">
          購物車
        </li>
        <li className="is-complete" data-step="2">
          付款方式
        </li>
        <li className="is-active" data-step="3">
          確認訂單
        </li>
        <li data-step="4" className="progress__last">
          完成訂單
        </li>
      </ol>
    </>
  );
}

export default CartStep;
