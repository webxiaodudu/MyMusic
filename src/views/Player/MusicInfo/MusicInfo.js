import React ,{Component} from 'react';
import {Avatar} from 'antd';
import './MusicInfo.less'
class MusicInfo extends Component {
    
    constructor(props){
        super(props)
  
    }

    componentDidMount(){
     
    }
    render(){
        //console.log(this.props.infos)
        const index=this.props.Index
        return (
            <div className="info-box">
                <Avatar shape="square" src={ this.props.infos.length ?this.props.infos[index].al.picUrl:''} size="large" style={{float:'left'}}/>
                <div className="m-info">
                    <span className="m-name">{this.props.infos.length ?this.props.infos[index].name:''}</span>
                    <span className="singer-name"> {this.props.infos.length ?this.props.infos[index].ar[0].name:''}</span>
                </div>
            </div>
        )
    }
}

export default MusicInfo;