import React, { Component } from 'react';
import {Row, Col,Carousel, Icon ,Button,Spin } from 'antd';
import axios from 'axios';
import downloadImg from '../../../../assets/image/download.png';


class LeftNavButton extends Component {
    
    render() {
      return (<Button 
                ghost
                size='large'
                shape="circle" 
                icon="left" 
                onClick={this.props.onClick}  
                style={{zIndex:1,top:'50%',left:-88,position:'absolute',color:'#fff'}} />)
    }
}

class RightNavButton extends Component {

    render() {
      return (<Button 
                ghost
                size='large'
                shape="circle" 
                icon="right" 
                onClick={this.props.onClick}  
                style={{zIndex:1,top:'50%',right:-328,position:'absolute',color:'#fff'}} />)
    }
}

export class ForcusImg extends Component {
    constructor(props){
        super(props);
        this.state={
            banners:[],
            currentColor:'red'
        }

        this.beforeChange=this.beforeChange.bind(this)
    }
    handleCarouselNext() {
        this.carouse.next()
    }
    handleCarouselPrev(){
        this.carouse.prev()
    }

    beforeChange(oldIndex,newIndex){
        const {banners} = this.state
        this.setState({currentColor:banners[newIndex].titleColor});
    }
    componentDidMount(){
        axios.get('/banner').then((res)=>{
               const {banners}=res.data;
               this.setState({banners}) 

        })
    }
   
     

    render(){

        const renderBanners=(banners)=>{
  
                    if(!banners.length)return (<div className="loading"><Spin /></div>);
            
                    const ImgsItem = banners.map((item, i) => {
                         return <div key={item.targetId}><img src={item.pic} /></div>
                    })
                    return ImgsItem;
            
        }

        const settings={
        
            autoplaySpeed:3000,
            effect:'fade',
            autoplay:true,
            arrows:true,
            prevArrow: <LeftNavButton onClick={this.handleCarouselPrev}/>,
            nextArrow:<RightNavButton  onClick={this.handleCarouselNext} /> ,
            adaptiveHeight:true,
            beforeChange:this.beforeChange,
            dots:true,
            dotsClass:'slick-dots'
        }

        return (
            <div className="banner-box" style={{backgroundColor:this.state.currentColor}}>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <div className="carousel-box">
                            <Carousel  {...settings} ref={(item) => (this.carouse = item)} >
                                {renderBanners(this.state.banners)}
                            </Carousel>                            
                        </div>
                    </Col>
                    <Col span={4}>
                       <div className="down-box"></div>
                    </Col>
                </Row>
            </div>
         
        )
    }
   
}