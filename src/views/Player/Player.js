import React ,{Component} from 'react';
import Control from './Control/Control';
import MyProgress from "./MyProgress/MyProgress";
import MusicInfo from "./MusicInfo/MusicInfo";
import Operate from './Operate/Operate';
import Volume from './Volume/Volume';
import './Player.less';
import {connect} from 'react-redux';
import PlayList from './PlayList/PlayList'
import {GetTracks,PlayStart,StopMusic,MusicLyric} from '../../redux/playList.reducer'
import axios from 'axios';
import TweenOne from 'rc-tween-one';

@connect(
    state=>state.PlayReducer,//播放列表
    {GetTracks,PlayStart,StopMusic,MusicLyric}
)
class Player extends Component {

    constructor(props){
        super(props);
        this.state={
            isPlay:false,
            index:0,
            currentTime:0,
            duration:0,
            moment: null,
            paused: true,
            reverse: true,
      
        }
        this.moment = null;
        this.animation = { top: '-300px', duration: 800,ease:'easeOutBounce' };
        
    }


      onOpen = () => {
         
        this.setState((prevState)=>{
            return {paused: false, moment: null,reverse: !prevState.reverse,}
        })
      }
    componentDidMount(){
        axios.get('/personalized')
        .then((res)=>{
            const{result}=res.data;
            this.props.GetTracks(result[0].id);
        });
        const that=this;
       (function start(){
            requestAnimationFrame(start);
            that.tick();
       })()
        // this.timer=setInterval(()=>{
        //     this.tick();
        // },30)
        
    }
componentWillReceiveProps(nextProps){//获取歌词

    nextProps.MusicLyric(nextProps.tracksIds[this.state.index]);

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
            this.props.PlayStart();
            this.audio.play()
        })

        
   }
 
  next(){//跳到下一首
    if(this.state.index==this.props.data.length-1)return
        this.setState((prevState)=>{
            return {index:++prevState.index,isPlay:true}
        },function(){
            this.props.PlayStart();
            this.audio.addEventListener('canplaythrough', function(e){
                this.play();
            }, false);
            //this.audio.play()
           
        })
       
  }
  prev(){//跳到前一首
    if(this.state.index==0)return
        this.setState((prevState)=>{
            return {index:--prevState.index,isPlay:true}
        },function(){
            this.props.PlayStart();
            this.audio.addEventListener('canplaythrough', function(e){
                this.play();
            }, false);
            //this.audio.play()
        })
        
  }
 
  goPlay(index){//点击播放器里的列表中的歌曲播放对应歌曲
      this.setState({index},
            function(){
                this.props.PlayStart();
                this.audio.addEventListener('canplaythrough', function(e){
                    this.play();
                }, false);
            });
  }
  changeCurrent(e){//点击播放进度
   
    const oProgress=document.querySelector('.ant-progress-outer');
    const posX=e.pageX-oProgress.getBoundingClientRect().left;
    
    let scale=posX/oProgress.clientWidth;
    let iCur=scale*this.audio.duration;
    this.audio.currentTime=iCur;
    this.props.PlayStart();
  }

    render(){
         
        return (
        <div className="PlayerWrap">
            <div className="PlayerContainer">
                <div className="play-box">
                    <Control onClick={()=>this.play()} isPlay={this.props.isPlay} onNext={()=>this.next()} onPrev={()=>this.prev()}/>
                    <MusicInfo infos={this.props.tracks?this.props.tracks:[]} Index={this.state.index}/>
                    <MyProgress onClick={(e)=>this.changeCurrent(e)} duration={this.state.duration} currentTime={this.state.currentTime}/>
                    <Operate onOpen={()=>this.onOpen()}/> 
                    <Volume/>
                </div>
                <audio  onEnded={()=>this.playOver()} ref={(audio)=>{this.audio=audio;}} src={this.props.data.length ? this.props.data[this.state.index].url:''} id="audio"></audio>
            </div>
            <TweenOne animation={this.animation}  paused={this.state.paused} style={{position:'absolute',left:181.5,top:0}} reverse={this.state.reverse} moment={this.state.moment}><PlayList tracksIds={this.props.tracksIds} goPlay={(index)=>this.goPlay(index)} iCurIndex={this.state.index} currentTime={this.state.currentTime}/></TweenOne>
        </div>
        )
    }
}

export default  Player;