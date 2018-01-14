import React ,{Component} from 'react';
import Control from './Control/Control';
import MyProgress from "./MyProgress/MyProgress";
import MusicInfo from "./MusicInfo/MusicInfo";
import Operate from './Operate/Operate';
import Volume from './Volume/Volume';
import './Player.less'
class Player extends Component {
    render(){
        return (
        <div className="PlayerContainer">
            <div className="play-box">
                 <Control/>
                 <MusicInfo/>
                 <MyProgress/>
                 <Operate/> 
                 <Volume/>
            </div>
            <audio src="" id="audio"></audio>
        </div>
        )
    }
}

export default  Player;