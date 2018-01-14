import React ,{Component} from 'react';
import { Progress } from 'antd'
import './MyProgress.less'
class MyProgress extends Component {

    constructor(props){
        super(props)
        this.state={
            currentProgress:0
        }
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({currentProgress:this.progress()})
        })
    }
    progress(){
        const {currentTime,duration}=this.props;
        let scal=currentTime/duration;
       return scal*100
    }
    render(){
      
        return (
            <div className="progress-box"  >
                <Progress onClick={this.props.onClick} percent={this.state.currentProgress} style={{width:400}} showInfo={false} className="progress"/>
                <span className="current-time">00:00</span>/
                <span className="duration-time">00:00</span>
            </div>
        )
    }
}
export default MyProgress;
