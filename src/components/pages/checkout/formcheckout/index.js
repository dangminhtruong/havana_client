import React, { Component } from 'react';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import axios from '../../../../axios';
import style from './inline'

class Form extends Component {

	state = {
		note: 'Không',
		receiverName : '',
		receiverPhone : '',
		receiverAddress : ''
	}

	handleChange = (event) => {
		let target = event.target;
		let value = target.value;
		let name = target.name;
		this.setState({
			[name]: value
		});
	}

	submitOrder = () => {
		axios.post('shoping-cart/sign-in-order', {
			note: this.state.note,
			receiverName : this.state.receiverName,
			receiverPhone : this.state.receiverPhone,
			receiverAddress : this.state.receiverAddress
		})
			.then((resporn) => {
				console.log(resporn);
				this.props.switchShow('thanks');
			});
	}

	render() {
		return (
			<div className="container">
				<div className="register">
					<h1>Checkout</h1>
					
						<div className="col-md-6  register-top-grid">
							<div className="mation">
								<span>Tên người nhận thay ( nếu có )</span>
								<input type="text" name="receiverName" onChange={this.handleChange}/>
								<span>Số điện thoại người nhận thay ( nếu có )</span>
								<input type="text" name="receiverPhone" onChange={this.handleChange}/>
								<span>Địa chỉ người nhận thay ( nếu có )</span>
								<input type="text" name="receiverAddress" onChange={this.handleChange}/>
							</div>
						</div>
						<div className="col-md-6 register-bottom-grid">
							<div className="mation">
								<span>Ghi chú đơn hàng</span>
								<textarea rows="8" name="note" style={style} onChange={this.handleChange} />
								<div style={{ float : 'left' }}>
									<button onClick={this.submitOrder} className="to-buy">SUBMIT</button>
									<button onClick={() => this.props.switchShow('items')} 
											className="btn btn-link" 
											style={{ textDecoration: 'none' }}>
										BACK
									</button>
								</div>
							</div>
						</div>

					<div className="clearfix"> </div>

					<div className="clearfix"> </div>
				</div>
			</div>
		);
	}
}

export default Form;