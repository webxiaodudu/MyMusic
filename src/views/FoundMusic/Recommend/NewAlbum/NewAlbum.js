import React,{Component} from 'react';
import {Icon,Row,Col,Carousel,Card,Button,Spin} from 'antd';
import axios from 'axios'
import defualtImg from '../../../../assets/image/changpian.jpg';
const { Meta } = Card;


class LeftNavButton extends Component {
    
    render() {
      return (
   
            <Icon type="left" 
                    
                    style={{zIndex:1,top:'50%',left:-20,position:'absolute',fontSize:20,cursor:'pointer'} } 
                    onClick={this.props.onClick}
                  
            />
            )
    }
}

class RightNavButton extends Component {

    render() {
   
      return (
   
    <Icon type="right" 
     
        style={{zIndex:1,top:'50%',right:-20,position:'absolute',fontSize:20,cursor:'pointer'} } 
        onClick={this.props.onClick}
      
    />
            )
    }
}

class NewAlbum extends Component{
    constructor(props){
        super(props)
        this.state={
            albums:[]
        }

    }

    componentDidMount(){
        axios.get('/top/album?limit=10').then((res)=>{
            const {albums}=res.data;
            this.setState({albums})
            
        })
    }

    renderAlbums(){
        const {albums}=this.state;
        if(!albums.length)return(<div className="loading"><Spin size="large" /></div>);

        const len=albums.length/5;

       const albumsList= albums.map((item)=>{
            return (
                <Col span={4} key={item.id}>
                    <Card  
                        cover={<img src={item.picUrl} height="100"/>} 
                        style={{ height: 180,width:110 }} 
                        
                    >
                    <Meta
                        title={item.name}
                        description={item.artists[0].name}
                        style={{height:50,fontSize:12}}
                    />
                    </Card>
            </Col>
            )
        })
        let newArr=[];
         let start=0,end=5;
        for(let i=0;i<len;i++){
            newArr.push( <div key={i} className="albumItem-box" style={{height:180,backgroundColor:'#dddddd'}}>
            <Row type="flex" justify="space-between">   
                {albumsList.slice(start,end)}
            </Row>
            </div>);
            start=5;
            end=10;
        }
     
        return newArr
    }
   toPrev(){
    this.Carousel.prev();
   }
   toNext(){
    this.Carousel.next();
   }
    render(){
       
        const settings={ 
                arrows:true,
                adaptiveHeight:true,
                dots:false, 
                prevArrow: <LeftNavButton onClick={this.toPrev}/>,
                nextArrow:<RightNavButton onClick={this.toNext}/> , 
                 
        }


        return (
        <div className="box padd_b40">
            <h2 className="title clearfix">
                <span className="title-left"><Icon type="play-circle" style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }} />新碟上架</span>
                <a href="javascript:;" className="more">更多<Icon type="arrow-right"  style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }}/></a>
            </h2>

            <div className="new_album_wrap">
                <div className="album-box">
                    <Carousel {...settings} ref={(ref)=>{this.Carousel=ref}}>

                    {this.renderAlbums()}        
                        {/* <div className="albumItem-box" style={{height:180,backgroundColor:'#dddddd'}}>
                            <Row type="flex" justify="space-between">
                           
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col> 
                            </Row>
                        </div> */}
                    </Carousel>
                </div>
            </div>
            
        </div>)
    }


}

export default NewAlbum