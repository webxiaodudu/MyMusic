import React,{Component}from 'react'
import {Layout} from 'antd'
const {Footer}=Layout;

class Foot extends Component{
    render(){
        return (
        <Footer className="footer">
            <a href="javascript:;">关于网易</a> <span>|</span> <a href="javascript:;">客户服务</a> <span>|</span> <a href="javascript:;">服务条款</a> <span>|</span> <a href="javascript:;">网站导航</a> <span>|</span> <a href="javascript:;"> 意见反馈</a>
        </Footer>
        )
    }
}
export default Foot