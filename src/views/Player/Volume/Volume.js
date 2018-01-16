import React,{Component }from 'react';
import {Icon,Dropdown,Menu,Progress} from 'antd';
import './Volume.less';

class Volume extends Component {
    constructor(props){
        super(props)
    }
 
  
    dragVol(){
        const oAudio=document.querySelector('#audio');
       const {oBar,oSlot,progress,oPannal}=this;
       oPannal.onmouseup=oPannal.onmousemove=null;
       oBar.onmousedown=function(e){
           
            e.preventDefault();
            let disY=e.clientY-this.getBoundingClientRect().top;
            oPannal.onmousemove=function(e){
                let t=e.clientY-oSlot.getBoundingClientRect().top-disY
                if(t>=oSlot.clientHeight-oBar.offsetHeight){
                    t=oSlot.clientHeight-oBar.offsetHeight
                    
                }
                if(t<=0){
                    t=0;
                }
               oBar.style.top=t+'px';
               progress.style.height=oSlot.clientHeight-t+'px'
               let voice=t/(oSlot.clientHeight-oBar.offsetHeight);
               oAudio.volume=(1-voice)
              
               
            }
            oPannal.onmouseup=function(){
                oPannal.onmousemove=oPannal.onmouseup=null;
            }
       }
        

    }
    
    render(){
        return (
        <div className="volume-box">
            <Dropdown onVisibleChange={()=>this.dragVol()} overlay={
                <Menu>
                    <Menu.Item key="0">
                        <div className="voice-pannal" ref={(oPannal)=>{this.oPannal=oPannal}}>
                            <div className="voice-slot" ref={(slot)=>{this.oSlot=slot}}>
                                <span className="point-bar" ref={(oBar)=>{this.oBar=oBar}} ></span>
                                <div className="voice-control" ref={(progress)=>{this.progress=progress}}></div>
                            </div>
                        </div>
                    </Menu.Item>
                </Menu>
            } placement="topRight" >
                <Icon type="sound" className="voice"/>
            </Dropdown>
        </div>
        )
    }
}
export default Volume;