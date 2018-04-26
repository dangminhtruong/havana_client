import React, { Component } from 'react';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import axios from '../../../../axios';
import Notifications, {notify} from 'react-notify-toast';

class List extends Component {

    constructor() {
        super();
        this.show = notify.createShowQueue();
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        products : [],
        messages : ''
    }

    componentDidMount(){
        axios.get('shoping-cart/cart-data-api')
        .then((response) => {
            this.setState({
                products : response.data.products,
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

   handleRemove(id){
        axios.get(`shoping-cart/remove/${id}`)
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
           if(target.value <= 0){
            this.show(`Số lượng không hợp lệ!`, 'error', 1000);
           }else{
            axios.get(`shoping-cart/update-quantity/${id}?newQuantity=${target.value}`)
            .then((response) => {
                 if(response.data.status === 200){
                     this.setState({
                         products : response.data.products
                     });
                     this.show('Cập nhật thành công !', 'success', 1000);
                 }else if(response.data.status === 502){
                    this.show(`${response.data.messages} !`, 'error', 1000);
                 }else{
                    this.show(`Loading... !`, 'error', 1000);
                 }
            });
           }
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
                         <input type="text" name="quantity" defaultValue={ item.product_quantity  } 
                         onChange={(event) => this.handleChange(event, item.product_id) }/>
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
                     <td>
                     <button type="button" className="btn btn-default btn-sm" onClick={ () => this.handleRemove(item.product_id) }>
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                     </td>
                 </tr>
             )
         });
        }
		if(list !== null){
            return (
                <div className="container">
                    <Notifications />
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { list }
                            </tbody>
                        </table>
                        { (this.props.user) ? 
                        <button onClick = { () => this.props.switchShow('form') } className="to-buy">PROCEED TO BUY</button> : 
                        <Link to="/login" className="to-buy">LOGIN TO BUY</Link> }
                        <div className="clearfix"> </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="container" style={ { minHeight : '60vh', marginTop : '10vh' } }>
                <div className="check-out">
                    <div className="text-xs-center">
                    <h1 className="display-3">EMPTY CART!</h1>
                    <p className="lead">
                        <i>Bạn chưa có sản phẩm nào trong giỏ hàng</i> <br/>
                    </p>
                    </div>
                </div>
		    </div>
        )
	}
}

export default List;