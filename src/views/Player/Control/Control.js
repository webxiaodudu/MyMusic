import React,{Component} from 'react';
import {Button,Icon}from 'antd';
import './Control.less'

const ButtonGroup = Button.Group;
class Control extends Component{
    render(){
        return(
            <div className="Control-box">
                <ButtonGroup size="large">
                    <Button ><Icon type="step-backward" style={{ fontSize: 18, color: '#08c' }}/></Button>
                    <Button ><Icon type="play-circle" style={{ fontSize: 18, color: '#08c' }} /></Button>
                    <Button ><Icon type="step-forward" style={{ fontSize: 18, color: '#08c' }}/></Button>
                </ButtonGroup>
                
            </div>
        )
    }
}

export default Control;