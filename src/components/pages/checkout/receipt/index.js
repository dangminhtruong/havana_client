import React, { Component } from 'react';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import axios from '../../../../axios';

class Receipt extends Component {

	render() {
		return (
			<div className="container">
			<div className="check-out">
                    <h1 className="thanklorder">
                        <underline>Thank you!</underline>
                    </h1>
                    <h3 className="thankcontent">
                        For being such an awesome person. 
                        The &lt;h3&gt; tag can hold quite a lot of text inside itself before it makes a new line.
                        Also, try hovering over the Thank you-text!
                    </h3>
			</div>
		</div>
		);
	}
}

export default Receipt;