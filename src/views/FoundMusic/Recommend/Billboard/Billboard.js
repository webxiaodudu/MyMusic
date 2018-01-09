import React,{Component}from 'react'
import axios from 'axios'
import {Icon,Row,Col,Card,List }from 'antd';
import biaoshengbill from '../../../../assets/image/biaoshengbill.jpg';
import xingebill from '../../../../assets/image/xingebill.jpg';
import yuanchuangbill from '../../../../assets/image/yuanchuangbill.jpg';
const {Meta}=Card;
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class Billboard extends Component {
    constructor(props){
        super(props);
        this.state={
            biaoList:[],
            newList:[],
            yuanList:[]
        }
        this.num=1
    }
    componentDidMount(){

        function getBiaoSheng() {
            return axios.get('/top/list?idx=3');//音乐飙升榜
          }
          
        function getNew() {
            return axios.get('/top/list?idx=0');//新歌榜
        }
        function getYuanchuang() {
            return axios.get('/top/list?idx=2');//原创
        }
        axios.all([getBiaoSheng(), getNew(),getYuanchuang()])
        .then(axios.spread((resBiao, resNew,resYuan)=> {
            this.setState({
                biaoList:resBiao.data.playlist.tracks.slice(0,10),
                newList:resNew.data.playlist.tracks.slice(0,10),
                yuanList:resYuan.data.playlist.tracks.slice(0,10)
            })
           
        }));
        this.Biao.num=1;
        this.newBill.num=1;
        this.yuanBill.num=1;
    }
    render(){
        return (
            <div className="box padd_b40">
                <h2 className="title clearfix">
                    <span className="title-left"><Icon type="play-circle" style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }} />榜单</span>
                    <a href="javascript:;" className="more">更多<Icon type="arrow-right"  style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }}/></a>
                </h2>
                <Row span={24}  style={{marginTop:20}}>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="example" src={biaoshengbill} />}
                            actions={[<Icon type="play-circle-o" />, <Icon type="folder-add" />]}
                        >
                            <Meta title={<h5 style={{fontWeight:'bold'}}>音乐飙升榜</h5>} />
                            
                        </Card>
                        <List
                        ref={(Biao)=>this.Biao=Biao}
                        size="small"
                        bordered
                        dataSource={this.state.biaoList} 
                        renderItem={item => (<List.Item><span className={`num ${this.Biao.num<=3 ? 'bill-hot' : ''}`}>{this.Biao.num++}</span><span className="music-name">{item.name}</span><span className="user-pannal"><Icon type="play-circle-o" className="pannal-ico"/><Icon type="plus-circle-o" className="pannal-ico"/><Icon type="folder-add" className="pannal-ico"/></span></List.Item>)}
                        />
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="example" src={xingebill} />}
                            actions={[<Icon type="play-circle-o" />, <Icon type="folder-add" />]}
                        >
                            <Meta title={<h5 style={{fontWeight:'bold'}}>音乐新歌榜</h5>} />
                            
                        </Card>
                        <List
                          ref={(newBill)=>this.newBill=newBill}
                        size="small"
                        bordered
                        dataSource={this.state.newList}
                        renderItem={item => (<List.Item><span className={`num ${this.newBill.num<=3 ? 'bill-hot' : ''}`}>{this.newBill.num++}</span><span className="music-name">{item.name}</span><span className="user-pannal"><Icon type="play-circle-o" className="pannal-ico"/><Icon type="plus-circle-o" className="pannal-ico"/><Icon type="folder-add" className="pannal-ico"/></span></List.Item>)}
                        />
                    </Col>
                    <Col span={8}>
                        <Card
                                hoverable
                                cover={<img alt="example" src={yuanchuangbill} />}
                                actions={[<Icon type="play-circle-o" />, <Icon type="folder-add" />]}
                            >
                                <Meta title={<h5 style={{fontWeight:'bold'}}>音乐原创榜</h5>} />
                                
                        </Card>
                        <List
                        ref={(yuanBill)=>this.yuanBill=yuanBill}
                        size="small"
                        bordered
                        dataSource={this.state.yuanList}
                        renderItem={item => (<List.Item><span className={`num ${this.yuanBill.num<=3 ? 'bill-hot' : ''}`}>{this.yuanBill.num++}</span><span className="music-name">{item.name}</span><span className="user-pannal"><Icon type="play-circle-o" className="pannal-ico"/><Icon type="plus-circle-o" className="pannal-ico"/><Icon type="folder-add" className="pannal-ico"/></span></List.Item>)}
                        />
                    </Col>
                </Row>

            </div>
        )
    }

}
export default Billboard;