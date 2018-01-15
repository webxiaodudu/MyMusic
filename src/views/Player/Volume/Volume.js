import React,{Component }from 'react';
import {Icon,Dropdown,Menu,Progress} from 'antd';
import './Volume.less';

class Volume extends Component {


    
    render(){
        return (
        <div className="volume-box">
            <Dropdown overlay={
            <Menu>
                 <Menu.Item key="0">
                    <div className="voice-pannal">
                        <div className="voice-slot">
                            <div className="voice-control"><span className="point-bar" ></span></div>
                        </div>
                    </div>
                </Menu.Item>
            </Menu>
            } trigger={['click']} placement="topRight" >
                <Icon type="sound" className="voice"/>
            </Dropdown>
        </div>
        )
    }
}
export default Volume;