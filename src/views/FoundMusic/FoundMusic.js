import React, { Component } from 'react';
import { Row, Col, Carousel, Button } from 'antd';
import banner_01 from '../../assets/image/banner_01.jpg';
import banner_02 from '../../assets/image/banner_02.jpg';
import banner_03 from '../../assets/image/banner_03.jpg';
import banner_04 from '../../assets/image/banner_04.jpg';
const images = [banner_01, banner_02, banner_03, banner_04]

const ImgsItem = images.map((item, i) => {
    return <div key={new Date().getTime() + i}><img src={item} /></div>
})

class FoundMusic extends Component {
    constructor(props) {
        super(props);

        this.handleCarouselNext = this.handleCarouselNext.bind(this);
    }

    handleCarouselNext() {
        this.carouse.next()
    }

    render() {
        return (
            <div>

                <Row type="flex" justify="center">
                    <Col span={12}>
                        <Carousel autoplay ref={(item) => (this.carouse = item)}>
                            {ImgsItem}
                        </Carousel>
                        <Button type="primary" ghost onClick={this.handleCarouselNext}>next</Button>
                        <Button type="primary" ghost onClick={() => prev()}>prev</Button>
                    </Col>
                    <Col span={4}>
                        download
                </Col>
                </Row>
            </div>)
    }
}
export default FoundMusic