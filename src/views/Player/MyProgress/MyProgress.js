import React ,{Component} from 'react';
import { Progress } from 'antd'
import './MyProgress.less'
class MyProgress extends Component {
    render(){
        return (
            <div className="progress-box">
                <Progress percent={50} style={{width:400}} showInfo={false} className="progress"/>
                <span className="current-time">00:00</span>/
                <span className="duration-time">00:00</span>
            </div>
        )
    }
}
export default MyProgress;
