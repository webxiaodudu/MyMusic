import React,{Component }from 'react';
import {Icon,Dropdown,Menu,Progress} from 'antd';
import './Volume.less';
const menu =(
    <Menu>
         <Menu.Item key="0" >
            <div className="voice-pannal">
                <div className="voice-slot">
                    <div className="voice-control"></div>
                </div>
            </div>
        </Menu.Item>
    </Menu>
)
class Volume extends Component {

    render(){
        return (
        <div className="volume-box">
            <Dropdown overlay={menu} trigger={['click']} placement="topRight" >
                <Icon type="sound" className="voice"/>
            </Dropdown>
        </div>
        )
    }
}
export default Volume;