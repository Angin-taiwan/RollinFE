import React from 'react'

function WishItem(){
    return(<>
    <div className="card mb-3">
        <div className="card-body row">
            <div className="d-flex align-items-center col-sm-6">
                <div className="mr-4">
                    <img src="https://via.placeholder.com/150x200" alt="skateboard" className="rounded" />
                </div>
                <div className="w-50">
                    <h6 className="card-title">PALACE SKATEBOARDS PUIG 
        PRO S20 DECK (MULTI)</h6>
                </div>
            </div>

            <div className="d-flex align-items-center col-sm-2">
                <div className="flex-column">
                    <div className="row">
                        <span>SIZE</span> <span className="border px-2">7.6"</span>
                    </div>
                    <div className="row">
                        <span>COLOR</span> <span className="border px-2">紅</span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center col-sm-2">
                <p>$2000</p> 
            </div>
            <div className="d-flex align-items-center col-sm-2">
                <div calssName="flex-column">
                    <button className="btn btn-outline-secondary">立即購買</button> 
                    <button className="btn btn-outline-secondary">加入購物車</button>
                    <button className="btn btn-outline-secondary">取消</button>
                </div>
            </div>
        </div>
    </div>

    </>)
}

export default WishItem