import React,{Component}from 'react';
import {connect} from 'react-redux'
import './Lyrics.less';

@connect(state=>state.PlayReducer)
class Lyrics extends Component{
    constructor(props){
        super(props);
        this.state={
            lyric:''
        }
    }
    componentWillReceiveProps(nextProps){
        
        if(nextProps.lrc.lyric===this.props.lrc.lyric){
            return false
        }
            //nextProps.lrc.lyric.split('\n') 
        this.setState({lyric:nextProps.lrc.lyric})
    }
    
   
    formatLrc(str){
       const list= str.split('\n').map((item,index)=>{
           return <p  key={index}>{item}</p>
       })
       return list
    }
    render(){
        const {tracks,mIndex}=this.props

        return (
            <div className="Lyrics-box">
                <h2 className="music-title" >{tracks?tracks[mIndex].name:'' }</h2>
                <div> {this.state.lyric ? this.formatLrc(this.state.lyric) : ''}</div>
            </div>
            )
    }
}
export default Lyrics; 