import React, { Component } from 'react';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import axios from '../../../../axios';
import style from './inline'

class Form extends Component {

	state = {
		note: 'Không',
		receiverName: '',
		receiverPhone: '',
		receiverAddress: '',
		user: '',
		shipTo: true
	}

	handleChange = (event) => {
		let target = event.target;
		let value = target.value;
		let name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSelectShipInfo(val){
		this.setState({
			shipTo : !!val
		});
	}

	submitOrder = () => {
		axios.post('shoping-cart/sign-in-order', {
			note: this.state.note,
			receiverName: this.state.receiverName,
			receiverPhone: this.state.receiverPhone,
			receiverAddress: this.state.receiverAddress
		})
			.then((resporn) => {
				this.props.switchShow('thanks');
			});
	}

	render() {

		let defaultShip = (
					<div className="col-md-6  register-top-grid" key={"defaultShip"}>
						<div className="mation">
							<span>Tên người nhận</span>
							<input type="text" defaultValue={this.props.user.username} disabled />
							<span>Số điện thoại người nhận</span>
							<input type="text" defaultValue={this.props.user.phone} disabled />
							<span>Địa chỉ người nhận </span>
							<input type="text" defaultValue={this.props.user.address} disabled />
							<span style={{ textAlign: 'left', float: 'left' }}>
								<input type="radio" name="shipTo" checked onChange={() => this.handleSelectShipInfo(1)} />Giao hàng địa chỉ mặc định
					</span>
							<span><input type="radio" name="shipTo" onChange={() => this.handleSelectShipInfo(0)} />Giao hàng cho người nhận thay</span>
						</div>
					</div>)
			let customShip = (
					<div className="col-md-6  register-top-grid" key={'customShip'}>
						<div className="mation">
							<span>Tên người nhận thay ( nếu có )</span>
							<input type="text" name="receiverName" autoComplete="off" defaultValue='' onChange={this.handleChange} />
							<span>Số điện thoại người nhận thay ( nếu có )</span>
							<input type="text" name="receiverPhone" autoComplete="off" onChange={this.handleChange} />
							<span>Địa chỉ người nhận thay ( nếu có )</span>
							<input type="text" name="receiverAddress" autoComplete="off" onChange={this.handleChange} />
							<span style={{ textAlign: 'left', float: 'left' }}>
								<input type="radio" name="shipTo" onChange={() => this.handleSelectShipInfo(1)} />Giao hàng địa chỉ mặc định
							</span>
							<span><input type="radio" name="shipTo" checked onChange={()=>this.handleSelectShipInfo(0)} />Giao hàng cho người nhận thay</span>
						</div>
					</div>
				)
	

		return (
			<div className="container" >
				<div className="register">
					<h1>Checkout</h1>
					{(this.state.shipTo) ? defaultShip : customShip}
					<div className="col-md-6 register-bottom-grid">
						<div className="mation">
							<span>Ghi chú đơn hàng</span>
							<textarea rows="8" name="note" style={style} onChange={this.handleChange} />
							<div style={{ float: 'left' }}>
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