import React,{Component} from 'react';
import './PlayList.less';
import MusicList from'./MusicList/MusicList';
import Lyrics from './Lyrics/Lyrics';
import {connect} from 'react-redux';

@connect(state=>state.PlayReducer)
class PlayList extends  Component {
    constructor(props){
        super(props);
        
    }

    render(){
       
        return (
            <div className="PlayList-box">
                <MusicList go={this.props.goPlay} mIndex={this.props.iCurIndex} tracks={this.props.tracks? this.props.tracks:''}/>
                <Lyrics currentTime={this.props.currentTime} mIndex={this.props.iCurIndex}/>
            </div>
        )
    }
}
export default PlayList