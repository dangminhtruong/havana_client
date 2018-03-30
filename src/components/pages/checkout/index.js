import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import Aux from '../../../hocs/Aux';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import config from '../../../config';
import Notifications, {notify} from 'react-notify-toast';

class Checkout extends Component {

    constructor() {
        super();
        this.show = notify.createShowQueue();
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        category : [],
        cartItems : 0,
        products : [],
        tmpQuantity : 0,
        tmpSize : '',
        tmpColor : '',
        user : null
    }

    componentDidMount(){
        axios.get('shoping-cart/cart-data-api')
        .then((response) => {
            this.setState({
                category : response.data.category,
                cartItems : response.data.cart,
                products : response.data.products,
                user : response.data.user
            });
        });
    }

    handleChangeColor(color, id){
         axios.post('shoping-cart/update-color', {
             colorUpdate :  color,
             currentId : id
         })
        .then((response) => {
            this.setState({
                products : response.data.products
            });
        }); 
        
    }

    handleChange(event, id){
        const target = event.target;
        if(target.name === 'size'){
            axios.get(`shoping-cart/update-size/${id}?size=${target.value}`)
            .then((response) => {
                this.setState({
                    products : response.data.products
                });
            });
        }else if(target.name === 'quantity'){
            axios.get(`shoping-cart/update-quantity/${id}?newQuantity=${target.value}`)
            .then((response) => {
                this.setState({
                    products : response.data.products
                });
            });
        }
    }

    render() {
       let list = null;
       if(this.state.products.length !== 0){
        list = this.state.products.map(item => {
            let itemId = item.product_id;
            let currentColor = item.color;

            let sizeAvail = item.sizeAvai.map((size, index) => {
                return (
                    <option value={ size.code } key={index}>{ size.code }</option>
                );
            });

            let colorAvai = item.colorAvai.map((color, index) => {
                let style = {
                    background: color.code,
                }

                return (
                    <label className="containerr" key={ index  }>
                            <input type="radio" 
                            name={ itemId } defaultChecked={ ( currentColor == color.code ) ? true : false }
                            onClick={() => this.handleChangeColor(color.code, itemId)}/>
                            <span className="checkmark" style={ style }></span>
                    </label>
                );
            });

            return (
                <tr key={item.product_id}>
                    <td className="ring-in">
                        <Link to ={ `/details/${item.product_id}`} className="at-in">
                            <img src= { `${config.BASE_API_URL}img/${item.product_img}` } className="img-responsive" alt=""/>
                        </Link>
                        <div className="sed">
                            <h5>{ item.product_name }</h5>
                        </div>
                        <div className="clearfix"> </div>
                    </td>
                    <td className="check">
                        <input type="text" name="quantity" defaultValue={ item.product_quantity  } onChange={(event) => this.handleChange(event, item.product_id) }/>
                    </td>
                    <td>
                        <select className="form-control custom" name="size" value={item.size} 
                        onChange={(event) => this.handleChange(event, item.product_id )} >
                            { sizeAvail }
                        </select>
                    </td>
                    <td className="colors">
                        { colorAvai }
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
                    { (this.state.user) ? 
                      <Link to="/login" exact className="to-buy">PROCEED TO BUY</Link> : 
                      <Link to="/login" exact className="to-buy">LOGIN TO BUY</Link> }
                    <div className="clearfix"> </div>
                </div>
            </div>
            <Footer/>
            </Aux>
        )
    }

}

export default Checkout;