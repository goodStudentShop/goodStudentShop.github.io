import Product from "./Product";
import EmptySearchResult from "./emptyPage/EmptySearchResult";
import React from 'react'

class Products extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
            
    }
  }

    render(){
        let productListData = this.props.productList
            .map(product => {
            return (
              <Product
                key={product.id}
                id={product.id}
                price={product.price}
                productName={product.productName}
                imgLink={product.imgLink}
                handleAddCart={this.props.handleAddCart}
                openMadel={this.props.handleOpenModel}

              
              />
            )
          }
          );
          let productView;
          if(productListData.length <= 0 && term){
            productView = <EmptySearchResult
                            noResultMessage={this.props.noResultMessage}
                            noResultTip={this.props.noResultTip}/>
          }
          else {
            productView = (
              <div className="row productList">
                {productListData}
              </div>
            )
          }

    

        return(
            
              
              <div id="sectionProducts"
                 className="containerProduct"
              >
                
                <div className="container product-wrapper">
                {productView}
                </div>
                <a href="#goToTop">
                  <button type="button"  className="goToTopButton">
                  <i class="fas fa-arrow-up"></i>
                  </button>
                </a>
              </div>
              
            
        )
    }
}

export default Products;
