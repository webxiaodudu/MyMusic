import React ,{Component} from 'react';
import {Modal,Form, Icon, Input, Button, Checkbox} from 'antd';
import {connect} from 'react-redux';
import{open,close}from '../../redux/openModal.reducer'
import{userLogin} from '../../redux/Login.reducer'
import axios from 'axios';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
    
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
         // console.log('Received values of form: ', values);
          //console.log(this.props)
         this.props.userLogin(this.props.close,values)
           

        }
      });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form" >
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入您网易云音乐注册用的手机号!',len:11,max:11,pattern:/^1\d{10}$/ }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="网易云音乐手机号" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="网易云音乐密码" />
            )}
          </FormItem>
          <FormItem style={{textAlign:'center'}}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
           
          </FormItem>
        </Form>
      );
    }
  }
  
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

@connect(
  state=>state,
  {open,close,userLogin}
)
class ModalUser extends Component{

    constructor(props){
        super(props);
    
       // this.closeModal=this.closeModal.bind(this)
    }

    
    // closeModal(){
    //     this.props.close();
    // }
    
    render(){
     
        const setting={
            title:"登录",
            visible:this.props.openModalReducer.isOpen,
            footer:null,
            onCancel:this.props.close
        }
        return (
           <Modal {...setting} >
               <WrappedNormalLoginForm userLogin={this.props.userLogin} close={this.props.close}/>
           </Modal>
        )
    }

}

export default ModalUser;