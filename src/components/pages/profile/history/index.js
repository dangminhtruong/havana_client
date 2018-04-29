import React, { Component } from 'react';

class History extends Component {
    render() {
        console.log(this.props.bills);
        let item = null;
        if (this.props.bills.length !== 0) {
            item = this.props.bills.map((bill, key) => {
                return (
                    <div className="container-fluid donHang" id="bill44" key={key}>
                        <div className="col-md-4">
                            {
                                bill.detais.map(element => {
                                    return (
                                        <div key={element._id}>
                                            {element.product_name}
                                            <span className="badge"> {element.quantity}</span><br />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-3">
                            Tổng: <b> {bill.total} vnđ </b> <br />
                        </div>
                        <div className="col-md-5">
                            Ngày đặt hàng : {bill.createdOn}<br />
                            Trạng thái: <b>{
                                (bill.status === 1) ? 'Đang chờ' :
                                    (bill.status === 2) ? 'Đã xử lý' :
                                        (bill.status === 3) ? 'Đang chuyển hàng' : 'Hoàn tất'
                            } </b>
                        </div>
                    </div>

                )
            });
        }

        return (
            <div className="history">
                {item}
            </div>
        )
    }
}

export default History;