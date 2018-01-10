import React ,{Component} from 'react';
import {Modal} from 'antd';

class ModalUser extends Component{

    constructor(props){
        super(props);


    }

    render(){
        const setting={
            title:"登录",
            visible:true
        }
        return (
           <Modal {...setting} >
               asdasmd
           </Modal>
        )
    }

}

export default ModalUser;