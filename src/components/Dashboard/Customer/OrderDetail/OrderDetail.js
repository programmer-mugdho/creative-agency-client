import React from 'react';
import './OrderDetail.css'

const OrderDetail = ({ order }) => {
    const { image, work, detail, status } = order;
    const statusBtnStyles = {
        width: "108px",
        height: "40px",
        borderRadius: "5px",
    }

    if (status === "Pending") {
        statusBtnStyles.background = "#FFE3E3"
        statusBtnStyles.color = "#FF4545"
    } else if(status === "On Going"){
        statusBtnStyles.background = "#ffe5c7"
        statusBtnStyles.color = "#FFBD3E"
    } else if (status === "Done") {
        statusBtnStyles.background = "#C6FFE0"
        statusBtnStyles.color = "#009444"
    }

    return (
        <div className="col-md-6">
            <div className="order-card p-4 mb-5">
                <div className="order-top d-flex justify-content-between align-items-start">
                    {/* <img width='74' src={img} alt="" /> */}
                    <img width={74} src={`data:image/png;base64,${image.img}`} className='rounded-circle' alt="" />
                    <button style={statusBtnStyles} className="btn">{status}</button>
                </div>
                <p className="order-title mt-3">{work}</p>
                <p style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="text-secondary">{detail}</p>
            </div>
        </div>
    );
};

export default OrderDetail;