import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Recommend from './Recommend/Recommend'

class FoundMusic extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
       let  {match}=this.props;
     
        return (
                 <Route exact path={`${match.url}/`} component={Recommend} />
                 
            )
    }
}
export default FoundMusic