import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

class Report extends React.Component{  
      render(){
        let checkCupon=this.props.checkCupon;
        let shoppingCartProducts=this.props.shoppingCartProducts;
        let test=shoppingCartProducts.map(
          function(item){
            return (
                <tr key={item.id}>
                  <td>
                    <img
                      className="reportProductImg"
                      src={item.imgLink}>
                    </img>
                  </td>
                  <td>
                    {item.productName}
                    <div className={checkCupon? "cuponUsed cuponUsed-active ": "cuponUsed "}>
               
                    </div>
                  </td>
                  <td>NT${item.price}</td>
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
        return(
  
      <div className="sectionReport">
        <div className="container">
          <h2 className="titleReport">購買資訊</h2>
          <div>
            <Table striped bordered hover className="checkOutTable">
              <thead className="checkOutTableThead" >
                <tr  >
                  <td>商品圖片</td>
                  <td>商品</td>
                  <td>價格</td>
                  <td>數量</td>
                  <td>小計</td>
                  </tr>
              </thead>
              <tbody>
                {test}
              </tbody>
            </Table>
           <div className="container">
            <div className="row">
               <div class="col-12 col-sm-6 "></div>
               <div class="col-12 col-sm-6 ">
                <div className="container">
                 <div className="row totalPriceReport">
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
        <h2 className="titlePersonalInfo">個人資訊</h2>
          <Table striped bordered hover className="checkOutTable">
            <thead className="checkOutTableThead">
              <tr >
                <td>訂單資料</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>姓名</td>
                <td>{this.props.fullAddress.fullName}</td>
              </tr>
              <tr>
                <td>電話</td>
                <td>{this.props.fullAddress.phoneNumber}</td>
              </tr>
              <tr>
                <td>電子郵件</td>
                <td>{this.props.fullAddress.email}</td>
              </tr>
              <tr>
                <td>地址</td>
                <td>{this.props.fullAddress.city}  
                {this.props.fullAddress.district} 
                ({this.props.fullAddress.postalCode})
                {this.props.fullAddress.address}</td>
              </tr>
              <tr>
                <td>付款狀態</td>
                <td>{this.props.payment}</td>
              </tr>
            </tbody>
          </Table>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 ">
                <Button
                  variant="success"
                  className="paymentButton"
                  onClick={this.props.paymentHandler} 
                >確認付款</Button>
              </div>
            <div className="col-12 col-sm-6 "></div>
          </div>
         </div>
        </div>
       </div>
      </div>
        )
      }
  }
export default Report;  