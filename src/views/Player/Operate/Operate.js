import React,{Component } from 'react';
import {Icon } from 'antd'
import './Operate.less';

class Operate extends Component{
    
    render(){
    
        return (
            <div className="oparate">
                <Icon type="folder-add" className="collect"/>
                <Icon type="share-alt" className="share"/>
                <Icon type="bars" onClick={this.props.onOpen} className="play-list"/>
            </div>
         )
    }
}
export default Operate;