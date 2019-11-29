import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EmptyCartPage from "./emptyPage/emptyCartPage"
import {Link} from "react-router-dom";
  import Container from 'react-bootstrap/Container'
  import Row from 'react-bootstrap/Row'
  import Col from 'react-bootstrap/Col'

class JumpOutShoppingCart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
        }
    }
    
    render(){
        
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        const show=this.state.show;
        let cartItems; 
    cartItems = this.props.cartItem.map(
      product => {
        return(
          <Row className="cart-product" key={product.id}>
            <Col>
                <img
                className="cart-product-img"
                src={product.imgLink}>
                </img>
            </Col>
            <Col className="cart-product-info">
              <p className="cart-product-name">{product.productName}</p>
              
            </Col>
            
            <Col>
              <p className="cart-product-qty">{product.quantity}/件</p>
              <p className="cart-product-price-total">NT${product.totalPrice}</p>
            </Col>
            
            <Col>
                <a   className="cart-product-remove"
                    href="#"
                onClick={this.props.removeCartProduct.bind(this,product.id)}
                ><i className="fas fa-trash-alt"></i>
                </a>
            </Col>
          </Row>
        );
      });

    let cartView;

    let cartLength = cartItems.length;

    if(cartLength < 1){
      cartView = <EmptyCartPage></EmptyCartPage>
    }
    else{
      cartView = 
      <Container className="cart-products">
        {cartItems}
      </Container>
    }

        return(
    <div>
      <div  onClick={handleShow} className={this.props.iconShake ? "tada" : ""}>
        <i className="fa fa-shopping-cart"></i>
        <span className="navBarCartTitle"></span>
        <span class="badge badge-primary">{this.props.totalItem}</span>
      </div>

      <Modal show={show} onHide={handleClose}
      scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>我的購物車</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cartView}
        </Modal.Body>
        <Modal.Footer>
          
          <Link to="/checkout">
            <Button variant="success">
            <i class="fas fa-cart-plus"></i>                        
            結帳 NT${this.props.totalPrice}
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
        )
    }
}
  
  export default JumpOutShoppingCart;
