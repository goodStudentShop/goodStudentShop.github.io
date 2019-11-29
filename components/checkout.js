import React from 'react';
import CuponAlert from "./cuponAlert"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

class Checkout extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      cartItem: this.props.shoppingCartProducts,
      };
  }

  render(){
      
      let checkCupon=this.props.checkCupon;
      let cartItems = this.state.cartItem.map(
        function(item){
          return (
              <tr key={item.id}>
                <td>
                <img
              className="checkoutProducImg"
              src={item.imgLink}>
            </img>

                </td>
                <td>{item.productName}
                <div className={checkCupon? "cuponUsed cuponUsed-active ": "cuponUsed "}
                >
                  
                  </div>
                
                </td>
                <td>
                NT${item.price}
                
                </td>
                <td>{item.quantity}/件</td>
                <td >
                       
                    <div className={checkCupon? " productPrice productPrice-active ": " productPrice "}>
                    NT${item.totalPrice}
                    </div>
                    <div className={checkCupon? " cuponUsedPrice cuponUsedPrice-active ": "cuponUsedPrice "}>
                    
                    NT${item.discountedTotalPrice}
                    </div>
                </td>
                
              </tr>              
          )
        }
      )
    return (
<div className="sectionCheckout">
  <div className="container">
  <h2 className="titleCheckout">購買清單</h2>
  <div>
    <Table striped bordered hover className="checkOutTable">
      <thead className="checkOutTableThead">
        <tr>
          <th className="checkOutTableTheadProductPicture">商品圖片</th>
          <th className="checkOutTableTheadProduct">商品</th>
          <th className="checkOutTableTheadPrice">價格</th>
          <th className="checkOutTableTheadQty">數量</th>
          <th className="checkOutTableTheadTotalPrice">小計</th>
        </tr>
      </thead>
      <tbody className="checkOutTableTbody">
        {cartItems}
      </tbody>
    </Table>      
    <div className="container">
      <div className="row">
          <div className="col-12 col-sm-6 ">
            
                  <input
              placeholder="請輸入優惠碼代碼"
              value={this.props.value}
              onChange={this.props.onChange}
            ></input>
            
                <Button variant="warning" 
            onClick={this.props.onClick}
            className="submitCuponCode"
          >送出</Button>
            
          </div>
          <CuponAlert
          cuponAlert={this.props.cuponAlert}
          />
          <div className="col-12 col-sm-6 "></div>
          </div>
          </div>
        
        <div className="container">
          <div className="row">
             <div class="col-12 col-sm-6 "></div>
             <div class="col-12 col-sm-6 ">
              <div className="container">
               <div className="row totalPriceCheckout">
               <div className="col-8">
                訂單總計
               </div>
               <div className="col-4">
                 <div className={checkCupon? " productPrice productPrice-active ": " productPrice "}>
                    NT${this.props.totalPrice}
               </div></div></div></div></div></div></div>
        <div className={this.props.checkCupon? "discountedPrice discountedPrice-active ":" discountedPrice "}>
        <div className="container">
          <div className="row">
             <div class="col-12 col-sm-6"></div>
             <div class="col-12 col-sm-6">
              <div className="container">
               <div className="row">
               <div className="col-8">
                折扣後，訂單總計
               </div>
               <div className="col-4">
                NT${this.props.discountedTotalPrice}
           </div></div></div></div></div></div></div>
        <div className="container">
        <div className="row">
             <div class="col-12 col-sm-6"></div>
             <div class="col-12 col-sm-6">
              <div className="container">
               <div className="row">
               <div className="col-12 col-sm-6">
                <Link to="/">
                 <Button variant="primary" className="primary continuteToBuy">繼續購物</Button>
                </Link>
               </div>
               <div className="col-12 col-sm-6">
               <Link to="/info"><Button variant="success" className="primary goCheckout">結帳去</Button></Link>   
           </div></div></div></div></div></div>
        
        <br/>
        
        </div>
      </div>
    </div>
    );
  }
}

export default Checkout;