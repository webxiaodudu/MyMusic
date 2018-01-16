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
    formatTime(time){
        let str=''
        const h= parseInt(time/3600);
        const m=parseInt(time%3600/60);
        const s=Math.round(time%60);
        function addZero(t){
           return t<=9 ? '0'+t : t+''
        }

        return str=addZero(h)+':'+addZero(m)+':'+addZero(s);


    }
    render(){
      
        return (
            <div className="progress-box"  >
                <Progress onClick={this.props.onClick} percent={this.state.currentProgress} style={{width:400}} showInfo={false} className="progress"/>
                <span className="current-time">{this.props.currentTime ?  this.formatTime(this.props.currentTime):'00:00:00'}</span>/
                <span className="duration-time">{this.props.duration ? this.formatTime(this.props.duration):'00:00:00'}</span>
            </div>
        )
    }
}
export default MyProgress;
