import React, { Component } from 'react';
import Header from './Header/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import FoundMusic from './FoundMusic/FoundMusic';
import MyMusic from './MyMusic/MyMusic';
import Friend from './Friend/Friend';
import ModalUser from './ModalUser/ModalUser';
import Foot from './Footer/Footer'
import {createStore,compose,applyMiddleware}from 'redux';
import {Provider} from 'react-redux';
import  reducers from '../redux/index.reducer';
import thunk from 'redux-thunk';
import Player from './Player/Player'

const store=createStore(reducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : compose
))
class App extends Component {

  render() {

    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={FoundMusic} />
          <Route path='/MyMusic' component={MyMusic} />
          <Route path='/Friend' component={Friend} />
          <ModalUser/>
          <Player />
          <Foot/>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }

}

export default App;