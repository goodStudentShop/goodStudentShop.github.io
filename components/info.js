import React from 'react'
import TaiwanPostalCode from './TaiwanPostalCode.json'

import InfoForm from "./infoForm"

class Info extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

    <div className="sectionInfo">

        <InfoForm
         handler={this.props.handler}
         fullAddress={this.props.fullAddress}
         taiwanPostalCodes={TaiwanPostalCode}
         showJumpOutGoToPay={this.props.showJumpOutGoToPay}
         handleShowJumpOutGoToPay={this.props.handleShowJumpOutGoToPay.bind(this)}
         handleCloseJumpOutGoToPay={this.props.handleCloseJumpOutGoToPay.bind(this)}
        />
     </div>

        )
    }
}
export default Info;