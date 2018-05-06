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
		user: null,
		cartTotal : 0,
		shipTo: true,
		payment : 1
	}

	componentDidMount(){
		axios.get('shoping-cart/form-checkout/data')
		.then((response) => {
			console.log(response);
			this.setState({
				user : response.data.user,
				cartTotal : response.data.total,				
			});
		});
	}

	handleChange = (event) => {
		let target = event.target;
		let value = target.value;
		let name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSelectShipInfo(val) {
		this.setState({
			shipTo: !!val
		});
	}

	
	submitOrder = () => {
		axios.post('shoping-cart/sign-in-order', {
			note: this.state.note,
			receiverName: this.state.receiverName,
			receiverPhone: this.state.receiverPhone,
			receiverAddress: this.state.receiverAddress,
			typeOfPayment : this.state.payment
		})
			.then((resporn) => {
				this.props.switchShow('thanks');
			});
	}

	render() {

		let url = `https://www.nganluong.vn/button_payment.php?receiver=${(this.state.user) ? this.state.user.email : ''}&product_name=Diamonds&price=${this.state.cartTotal}&return_url=${config.BASE_API_URL}&comments=${this.state.note}`;
		let showPament;
		if(this.state.payment === '3'){
			showPament = (
				<a target="_blank" href={url}>
					<img src="https://www.nganluong.vn/css/newhome/img/button/pay-sm.png" border="0" />
				</a>
			)
		}else if(this.state.payment === '2'){
			showPament = (
				<span>Vui lòng chuyển tiền đến số điện thoại cửa hàng <b style={{ color : 'red' }}>01290007776</b></span>
			)
		}
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
					<span><input type="radio" name="shipTo" checked onChange={() => this.handleSelectShipInfo(0)} />Giao hàng cho người nhận thay</span>
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
							<span>Chọn hình thức thanh toán</span>
							<select className="form-control custom2" name="payment" onChange={this.handleChange} style={{ minHeight : '40px' }}>
								<option value="1">Thanh toán khi nhận hàng</option>
								<option value="2">Thanh toán quan thẻ điện thoại</option>
								<option value="3">Thanh toán quan Ngân Lượng</option>
							</select>
								{ showPament }
							<div className="clearfix"></div>
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