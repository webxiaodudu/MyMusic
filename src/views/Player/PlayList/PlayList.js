import React,{Component} from 'react';
import './PlayList.less';
import MusicList from'./MusicList/MusicList';
import Lyrics from './Lyrics/Lyrics'

class PlayList extends  Component {
    render(){
        return (
            <div className="PlayList-box">
                <MusicList/>
                <Lyrics/>
            </div>
        )
    }
}
export default PlayList