import Products from "./Products";
// import Header from './Header.jsx';
import DetailView from "./DetailView";
// import Footer from "./Footer";
import React from "react";

class ProductContent extends React.Component{  
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
              
                <Products
              productList={this.props.productList}
              searchTerm={this.props.searchTerm}
              handleAddCart={this.props.handleAddCart}
              handleOpenModel={this.props.handleOpenModel}/>
                  <DetailView
                    product={this.props.product}  
                    handleCloseModel={this.props.handleCloseModel}    
                    openModel={this.props.openModel}
                   />
              
            </div>
        )
    }    
}
// ReactDOM.render(<BasicExample/>,document.getElementById("root"))
export default ProductContent;