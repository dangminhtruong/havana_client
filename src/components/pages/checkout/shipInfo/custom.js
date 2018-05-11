import React, { Component } from 'react';

class CustomShip extends Component {
    render() {
        return (
            <div className="col-md-6 register-bottom-grid">
                <div className="mation">
                    <span>Ghi chú đơn hàng</span>
                    <textarea rows="8" name="note" style={style} onChange={this.handleChange} />
                    <div style={{ float: 'left' }}>
                        <button onClick={this.submitOrder} className="to-buy">Hoàn tất</button>
                        <button onClick={() => this.props.switchShow('items')}
                            className="btn btn-link"
                            style={{ textDecoration: 'none' }}>
                            BACK
						</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default CustomShip;