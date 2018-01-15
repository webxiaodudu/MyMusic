import React, { Component } from 'react';
import { Card,Icon ,Row,Col,Spin } from 'antd';
import defualtImg from '../../../../assets/image/changpian.jpg';
import axios from 'axios'
import {connect} from 'react-redux';
import {GetTracks,PlayStart} from '../../../../redux/playList.reducer'
const { Meta } = Card;

@connect(
    state=>state,
    {GetTracks,PlayStart}
)
class HotRecommend extends Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        axios.get('/personalized')
        .then((res)=>{
           
            const{result}=res.data
           
            this.setState({result})
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }
    play(id){
        // console.log(id)//歌单id
        // axios.get(`/playlist/detail?id=${id}`)//使用歌单详情接
        // .then((res)=>{
        //    console.log(res.data)
    
        // })
        this.props.GetTracks(id,true);
        this.props.PlayStart();
        const oAudio=document.querySelector('#audio');

        oAudio.addEventListener('canplaythrough', function(e){
            oAudio.play();
        }, false);
        // setTimeout(function(){
        //    
        // },3000)
       

    }
   
    render(){

       const getList=(result)=>{//渲染热门推荐列表
         
            if(!result.length){
                return (<div className="loading"><Spin size="large" /></div>)
            }
            else{
               return result.map((item,index)=>{
                   
                    if(index<8){
                        return (
                            <Col span={6} style={{paddingTop:10}} key={item.id}>
                                <Card  
                                    cover={<img src={item.picUrl} />} 
                                    bordered={true} 
                                    actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>{item.playCount}</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} onClick={()=>this.play(item.id)}/>]}>
                                    <Meta description={(<a href='javascript:;'>{item.name}</a>)} style={{maxHeight:42}}/>
                                </Card>
                            </Col>
                        )
                        
                    }
                                    
                    
                })
            }
        }


        return(
            <div className="box padd_b40">
                <h2 className="title clearfix">
                    <span className="title-left"><Icon type="play-circle" style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }} />热门推荐</span>
                    <span className="link-list">
                        <a href="javascript:;" >华语</a>
                        <i>|</i>
                        <a href="javascript:;" >流行</a>
                        <i>|</i>
                        <a href="javascript:;" >摇滚</a>
                        <i>|</i>
                        <a href="javascript:;" >民谣</a>
                        <i>|</i>
                        <a href="javascript:;" >电子</a>
                    </span>
                    <a href="javascript:;" className="more">更多<Icon type="arrow-right"  style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }}/></a>
                </h2>

                <Row gutter={12} type="flex" justify="space-between" >
                        {getList(this.state.result)}
                </Row>
            </div>
        )
    }
}

export default HotRecommend 