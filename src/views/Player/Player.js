import React ,{Component} from 'react';
import Control from './Control/Control';
import MyProgress from "./MyProgress/MyProgress";
import MusicInfo from "./MusicInfo/MusicInfo";
import Operate from './Operate/Operate';
import Volume from './Volume/Volume';
import './Player.less';
import {connect} from 'react-redux';
import {GetTracks,PlayStart,StopMusic} from '../../redux/playList.reducer'
import axios from 'axios'

@connect(
    state=>state.PlayReducer,//播放列表
    {GetTracks,PlayStart,StopMusic}
)
class Player extends Component {

    constructor(props){
        super(props);
        this.state={
            isPlay:false,
            index:0,
            currentTime:0,
            duration:0
        }
        
        
    }

    componentDidMount(){
        axios.get('/personalized')
        .then((res)=>{
            const{result}=res.data;
            this.props.GetTracks(result[0].id);
        })
       
        this.timer=setInterval(()=>{
            this.tick();
        },30)
        
    }

    tick(){
        this.setState({currentTime:this.audio.currentTime,duration:this.audio.duration})
    }

  play(){//切换播放暂停
        

        if(this.props.isPlay){
            this.props.StopMusic();
            this.audio.pause()
        }
        else{
            this.props.PlayStart();
            this.audio.play()
        }
  }
  playOver(){//播完一首歌后播放下一首
      if(this.state.index==this.props.data.length-1)return
        this.setState((prevState)=>{
            return {index:++prevState.index}
        },function(){
            this.audio.play()
        })

        
   }
 
  next(){//跳到下一首
    if(this.state.index==this.props.data.length-1)return
        this.setState((prevState)=>{
            return {index:++prevState.index,isPlay:true}
        },function(){
            this.props.PlayStart();
            this.audio.play()
        })
       
  }
  prev(){//跳到前一首
    if(this.state.index==0)return
        this.setState((prevState)=>{
            return {index:--prevState.index,isPlay:true}
        },function(){
            this.props.PlayStart();
            this.audio.play()
        })
        
  }
 

  changeCurrent(e){
   
    const oProgress=document.querySelector('.ant-progress-outer');
    const posX=e.pageX-oProgress.getBoundingClientRect().left;
    
    let scale=posX/oProgress.clientWidth;
    let iCur=scale*this.audio.duration;
    this.audio.currentTime=iCur;
    this.props.PlayStart();
  }

    render(){
         
        return (
        <div className="PlayerContainer">
            <div className="play-box">
                 <Control onClick={()=>this.play()} isPlay={this.props.isPlay} onNext={()=>this.next()} onPrev={()=>this.prev()}/>
                 <MusicInfo infos={this.props.tracks?this.props.tracks:[]} Index={this.state.index}/>
                 <MyProgress onClick={(e)=>this.changeCurrent(e)} duration={this.state.duration} currentTime={this.state.currentTime}/>
                 <Operate/> 
                 <Volume/>
            </div>
            <audio  onEnded={()=>this.playOver()} ref={(audio)=>{this.audio=audio;}} src={this.props.data.length ? this.props.data[this.state.index].url:''} id="audio"></audio>
        </div>
        )
    }
}

export default  Player;