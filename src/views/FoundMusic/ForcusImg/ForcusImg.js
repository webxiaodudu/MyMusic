import React, { Component } from 'react';
import {Row, Col,Carousel, Icon ,Button} from 'antd';
import banner_01 from '../../../assets/image/banner_01.jpg';
import banner_02 from '../../../assets/image/banner_02.jpg';
import banner_03 from '../../../assets/image/banner_03.jpg';
import banner_04 from '../../../assets/image/banner_04.jpg';
import downloadImg from '../../../assets/image/download.png';

const images = [{src:banner_01,color:'#f5f1ee'}, {src:banner_02,color:"#e20001"}, {src:banner_03,color:'#040507'}, {src:banner_04,color:'#d9eafc'}];
//const bgcolors=['#f5f1ee','#e20001','#040507','#d9eafc'];

const ImgsItem = images.map((item, i) => {
    return <div key={new Date().getTime() + i}><img src={item.src} /></div>
})

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
            
            currentColor:images[0].color
        }

        this.afterChange=this.afterChange.bind(this)
    }
    handleCarouselNext() {
        this.carouse.next()
    }
    handleCarouselPrev(){
        this.carouse.prev()
    }

    afterChange(index){
        this.setState({currentColor:images[index].color});
    }
    render(){

        const settings={
        
            autoplaySpeed:3000,
            effect:'fade',
            autoplay:true,
            arrows:true,
            prevArrow: <LeftNavButton onClick={this.handleCarouselPrev}/>,
            nextArrow:<RightNavButton  onClick={this.handleCarouselNext} /> ,
            adaptiveHeight:true,
            afterChange:this.afterChange,
            dots:true,
            dotsClass:'slick-dots'
        }

        return (
            <div className="banner-box" style={{backgroundColor:this.state.currentColor}}>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <div className="carousel-box">
                            <Carousel  {...settings} ref={(item) => (this.carouse = item)} >
                                {ImgsItem}
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