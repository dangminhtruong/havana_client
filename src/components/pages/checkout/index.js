import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import config from '../../../config';
import Notifications, {notify} from 'react-notify-toast';

class Checkout extends Component {

    constructor() {
        super();
        this.show = notify.createShowQueue();
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeQuantity = this.handleChangeColor.bind(this);
    }

    state = {
        category : [],
        cartItems : 0,
        products : [],
        tmpQuantity : 0,
        tmpSize : '',
        tmpColor : ''
    }

    componentDidMount(){
        axios.get('shoping-cart/cart-data-api')
        .then((response) => {
            this.setState({
                category : response.data.category,
                cartItems : response.data.cart,
                products : response.data.products
            });
        });
    }

    handleChangeSize(e, id) {
        axios.get(`shoping-cart/cart/update-size/${id}?size=${e.target.value}`)
        .then((response) => {
            this.setState({
                products : response.data.products
            });
        });
    }

    handleChangeColor(e, id){
        axios.get(`shoping-cart/cart/update-color/${id}?color=${e.target.value}`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                products : response.data.products
            });
        });
    }

    handleChangeQuantity(){
        
    }

    render() {
       let list = null;
       if(this.state.products.length !== 0){
        list = this.state.products.map(item => {
            let sizeAvail = item.sizeAvai.map(size => {
                return (
                    <option value={ size.code } key={size.code}>{ size.code }</option>
                );
            });

            let colorAvai = item.colorAvai.map(color => {
                let style = {
                    width: '100%',
                    height: '10px',
                    background: color.code,
                    color : color.code,
                    important : true
                }

                return (
                    <option value={ color.code } key={color.code} style={ style }><b>***</b></option>
                );
            });

            return (
                <tr key={item.product_id}>
                    <td className="ring-in">
                        <a href="single.html" className="at-in">
                            <img src= { `${config.BASE_API_URL}img/${item.product_img}` } className="img-responsive" alt=""/>
                        </a>
                        <div className="sed">
                            <h5>{ item.product_name }</h5>
                        </div>
                        <div className="clearfix"> </div>
                    </td>
                    <td className="check">
                        <input type="text" defaultValue={ item.product_quantity  }/>
                    </td>
                    <td>
                        <select className="form-control custom" name="size" value={item.size} onChange={(e, id) => this.handleChangeSize(e, item.product_id)} >
                            { sizeAvail }
                        </select>
                    </td>
                    <td>
                        <select className="form-control custom" name="color" value={ item.color } style = { { background : `${item.color}`} }  
                                onChange={(e, id) => this.handleChangeColor(e, item.product_id)}>
                            { colorAvai }
                        </select>
                    </td>
                    <td>${ (item.promo_price) ? item.promo_price : item.unit_price}</td>
                    <td>${ (item.promo_price) ? item.product_quantity * item.promo_price: item.product_quantity * item.unit_price }</td>
                </tr>
            )
        });
       }


        return (
            <Aux>
            <Header cart = {this.state.cartItems}
                        menu = { this.state.category }/>
            <div className="container">
                <div className="check-out">
                    <h1>Checkout</h1>
                    <table >
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Size</th>
                                <th>Color</th>
                                <th>Prices</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            { list }
                        </tbody>
                    </table>
                    <a href="#" className="to-buy">PROCEED TO BUY</a>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <Footer/>
            </Aux>
        )
    }

}

export default Checkout;