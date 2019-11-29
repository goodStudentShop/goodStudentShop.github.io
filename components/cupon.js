import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Cupon extends React.Component{  
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div className="sectionCupon">
         <Container>
          <Row>
            <Col xs={1} md={3}></Col>
            <Col xs={10} md={6}
            className="cuponTitle">
                  優惠活動
            </Col>
            <Col xs={1} md={3}></Col>
          </Row>
          <Row>
            <Col xs={1} md={3}></Col>
            <Col xs={10} md={6}
              className="cuponContent">
              <h2 className="cuponContentTitle">開幕慶優惠 !!</h2>
              <div className="cuponContentContent">輸入以下代碼，即可獲得全館5折優惠</div><br/>
              <div className="cuponContentCode">0451</div>
  
            </Col>
            <Col xs={1} md={3}></Col>
          </Row>
         </Container>
        </div>
      );
    }
  }
  export default Cupon;