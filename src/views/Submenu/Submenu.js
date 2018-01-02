import React,{Component} from 'react';
import {Menu}from 'antd';
import {style} from './subMenuStyle';

const SubMenu=()=>{
    return (
        <div className="subMenu-box">
            <div className="submenu">
                <Menu mode="horizontal" style={style.submenu}>
                    <Menu.Item className="sub-item">
                        推荐
                    </Menu.Item>
                    <Menu.Item className="sub-item">
                        排行榜
                    </Menu.Item>
                    <Menu.Item className="sub-item">
                        歌单
                    </Menu.Item>
                    <Menu.Item className="sub-item">
                        主播电台
                    </Menu.Item>
                    <Menu.Item className="sub-item">
                        歌手
                    </Menu.Item>
                    <Menu.Item className="sub-item">
                        新碟上架
                    </Menu.Item>
            </Menu>
            </div>
      </div>
    )
}

export default SubMenu ;