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
  


class HotRadioStation extends Component {

    constructor(props){
        super(props);
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        axios.get('/personalized/djprogram')
        .then((res)=>{
            this.setState({
                result:res.data.result
            })
        })
    }

    render(){
      return (
        <div className="singer-box"> 
           <List
                header={<div className="title clearfix"><h3>推荐电台</h3><a href="javascript:;" className="all">查看全部></a></div>}
                itemLayout="horizontal"
                dataSource={this.state.result.length ? this.state.result:'' }
                renderItem={item => (
                <List.Item size="large">
                    <List.Item.Meta
                    avatar={<Avatar size="large"  shape="square" src={item.picUrl} />}
                    title={<a href={`https://ant.design?${item.id}`}  >{item.name}</a>}
                    description={item.copywriter}
                    />
                </List.Item>
                )}
            />
        </div>
      )
    }
}

export default HotRadioStation;
