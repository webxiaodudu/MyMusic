import React,{Component} from 'react';
import {List ,Icon} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import './MusicList.less';


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class MusicList extends Component{
      constructor(props){
          super(props);
          this.state={
              musicTracks:[]
          }
      }
 
    render(){
       
        return (
            <div className="MusicList-box">
                    <div className="scroll-box">
                        <div className="scroll-bar"></div>
                    </div>
                    <List size="small" 
                        header={
                        <div className="music-list-title">
                            <span>播放列表({this.props.tracks.length})</span>
                        </div>}
                        dataSource={this.props.tracks}
                        renderItem={(item,index) => (<List.Item onClick={()=>this.props.go(index)} style={{cursor:'pointer',padding:'0 20px',lineHeight:'30px',color:`${index===this.props.mIndex ? 'red':'#fff'}`,borderBottom:'none',backgroundColor:`${index===this.props.mIndex ? 'rgba(0,0,0,.2)':''}`}}>
                                <span className="m-name">{item.name}</span>
                                <span className="user-pannal"><Icon type="folder-add" style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}} /><Icon type="share-alt" style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}}/><Icon type="download"  style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}}/><Icon type="delete" style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}}/></span>
                                <span className="singer-name">{item.ar[0].name}</span>
                            </List.Item>)}
                    />             
            </div>
        )
    }
}

export default MusicList