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
        loadFunc(){

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
                            <span>播放列表(32)</span>
                        </div>}
                        dataSource={data}
                        renderItem={(item,index) => (<List.Item style={{padding:'0 20px',lineHeight:'30px',color:'#fff',borderBottom:'none',backgroundColor:`${index%2? 'rgba(0,0,0,.2)':''}`}}>
                                <span className="m-name">{item}</span>
                                <span className="user-pannal"><Icon type="folder-add" style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}} /><Icon type="share-alt" style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}}/><Icon type="download"  style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}}/><Icon type="delete" style={{cursor:'pointer',float:'left',fontSize:12,marginLeft:10}}/></span>
                                <span className="singer-name">asdaasdasdassdasd</span>
                            </List.Item>)}
                    />             
            </div>
        )
    }
}

export default MusicList