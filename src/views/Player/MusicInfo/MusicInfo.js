import React ,{Component} from 'react';
import {Avatar} from 'antd';
import './MusicInfo.less'
class MusicInfo extends Component {
    render(){
        return (
            <div className="info-box">
                <Avatar shape="square" src="http://p1.music.126.net/oMftvOfez0-iTRuUs1CHlA==/19178781323558220.jpg?param=34y34" size="large" style={{float:'left'}}/>
                <div className="m-info">
                    <span className="m-name"> 邮差</span>
                    <span className="singer-name"> 王菲</span>
                </div>
            </div>
        )
    }
}

export default MusicInfo;