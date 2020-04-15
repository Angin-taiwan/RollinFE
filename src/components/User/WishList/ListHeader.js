import React from 'react'

function ListHeader(){
    return(<>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 pl-4">商品</div>
                <div className="col-sm-2">規格</div>
                <div className="col-sm-2">價格</div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    </>)
}

export default ListHeader