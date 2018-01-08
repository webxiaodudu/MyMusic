import React, { Component } from 'react';
import { ForcusImg} from './ForcusImg/ForcusImg';
import HotRecommend from './HotRecommend/HotRecommend';
import NewAlbum from './NewAlbum/NewAlbum'
class Recommend extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div>
                <ForcusImg/>
                <div className="main-body clearFix">
                    <div className="left-box">
                        <HotRecommend />
                        <NewAlbum />
                    </div>
                    <div className="right-box">right-box</div>
                </div>
            </div>
            )
    }
}
export default Recommend