import Alert from 'react-bootstrap/Alert';

class CuponAlert extends React.Component{
    render(){
        let cuponAlert=this.props.cuponAlert;
        return(
            <Alert show={cuponAlert} variant="danger" >
                    <Alert.Heading>
                        輸入的"優惠卷代碼"錯誤。
                    </Alert.Heading>
            </Alert>
        )
    }
}

export default CuponAlert;