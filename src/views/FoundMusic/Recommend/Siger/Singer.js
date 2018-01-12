import React ,{Component}from 'react';
import { List, Avatar ,Button} from 'antd';
import axios from 'axios';

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  


class Singer extends Component {

    constructor(props){
        super(props);
        this.state={
            artists:[]
        }
    }
    componentDidMount(){
        axios.get('/top/artists?offset=0&limit=5')
        .then((res)=>{
            this.setState({
                artists:res.data.artists
            })
        })
    }

    render(){
      return (
        <div className="singer-box"> 
           <List
                header={<div className="title clearfix"><h3>入驻歌手</h3><a href="javascript:;" className="all">查看全部></a></div>}
                footer={<div className="foot-singer"> <Button type="primary" style={{width:'100%'}}>申请成为网易音乐人</Button ></div>}
                itemLayout="horizontal"
                dataSource={this.state.artists.length ? this.state.artists:'' }
                renderItem={item => (
                <List.Item size="large">
                    <List.Item.Meta
                    avatar={<Avatar size="large"  shape="square" src={item.picUrl} />}
                    title={<a href={`https://ant.design?${item.id}`}  >{item.name}</a>}
                    description={item.alias[0]}
                    />
                </List.Item>
                )}
            />
        </div>
      )
    }
}

export default Singer;
