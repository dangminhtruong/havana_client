import React, { Component } from 'react';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import axios from '../../../../axios';

class Form extends Component {

	state = {
		note : 'Không',
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
			note : this.state.note,
		})
		.then((resporn) => {
			console.log(resporn);
		});
	}

	render() {
		return (
			<div className="container">
			<div className="check-out">
				<h1>Checkout</h1>
				<div className="col-md-12 login-right">
					<form>
						<span>Ghi chú đơn hàng</span>
						<textarea rows="9" name="note" cols="100" onChange={this.handleChange}/>
					</form>
                </div>
				<div className="clearfix"> </div>
				<button onClick = { this.submitOrder } className="to-buy">SUBMIT</button>	
				<button onClick = { this.props.switchShow } className="btn btn-link">BACK</button>
				<div className="clearfix"> </div>
			</div>
		</div>
		);
	}
}

export default Form;