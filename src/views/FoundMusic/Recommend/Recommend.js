import React, { Component } from 'react';
import { ForcusImg} from './ForcusImg/ForcusImg';
import HotRecommend from './HotRecommend/HotRecommend';
import NewAlbum from './NewAlbum/NewAlbum';
import Billboard from './Billboard/Billboard';
import Login from './Login/Login'
class Recommend extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div className="clearFix">
                <ForcusImg/>
                <div className="main-body clearfix">
                    <div className="left-box">
                        <HotRecommend />
                        <NewAlbum />
                        <Billboard/>
                    </div>
                    <div className="right-box">
                        <Login/>
                    </div>
                </div>
            </div>
            )
    }
}
export default Recommend