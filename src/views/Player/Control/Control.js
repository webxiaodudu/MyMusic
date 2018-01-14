import React,{Component} from 'react';
import {Button,Icon}from 'antd';
import './Control.less'

const ButtonGroup = Button.Group;
class Control extends Component{
    render(){
        return(
            <div className="Control-box">
                <ButtonGroup size="large">
                    <Button onClick={this.props.onPrev}><Icon type="step-backward" style={{ fontSize: 18, color: '#08c' }}/></Button>
                    <Button 
                        onClick={this.props.onClick}>
                        {this.props.isPlay  ?<Icon type="pause-circle-o" style={{ fontSize: 18, color: '#08c' }} /> : <Icon type="play-circle" style={{ fontSize: 18, color: '#08c' }} /> }</Button>
                    <Button onClick={this.props.onNext}><Icon type="step-forward" style={{ fontSize: 18, color: '#08c' }}/></Button>
                </ButtonGroup>
                
            </div>
        )
    }
}

export default Control;