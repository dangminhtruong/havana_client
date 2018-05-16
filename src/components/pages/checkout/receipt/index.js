import React, { Component } from 'react';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import axios from '../../../../axios';

class Receipt extends Component {

	render() {
		return (
			<div className="container">
			<div className="check-out">
                    <div className="text-xs-center">
                    <h1 className="display-3">Cám ơn quý khách!</h1>
                    <p className="lead">
						<i>Đặt hàng thành công! Chân thành cảm ơn bạn đã ủng hộ cửa hàng chúng tôi...</i> <br/>
                        <strong className="redmine" style={{ color : 'red' }}>Vui lòng kiểm tra email để xác nhận đơn hàng của bạn.</strong> 
                    </p>
                    </div>
			</div>
		</div>
		);
	}
}

export default Receipt;