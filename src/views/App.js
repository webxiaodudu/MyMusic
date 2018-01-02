import React, { Component } from 'react';
import Header from './Header/Header'
import SubMenu from './Submenu/Submenu'



class App extends Component {

  render() {

    return (
      <div>
        <Header/>
        <SubMenu />
      </div>
    );
  }

}

export default App;