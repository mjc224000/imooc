import React, { Component } from 'react';
import axios from 'axios'
import AuthContainer from './component/AuthContainer';
import {Button,List} from 'antd-mobile';
import Login from './component/userManage/Login';
import 'antd-mobile/dist/antd-mobile.css';
let id=0;
function makeID() {
    return id++;
}
class App extends Component {
  constructor(props){
      super(props);
      this.state={solders:[]}
  }
    handleAddSolder(e){
      const solders=this.state.solders;
      solders.push(makeID());
this.setState({solders:solders});
    }
  render() {
     axios.get('/data').then(function (response) {
         console.log(response);
     })
    return (
      <div>
          <Button onClick={ this.handleAddSolder.bind(this)}>nmsl</Button>
          <List>
              {this.state.solders.map((v)=><List.Item> {v}</List.Item>)}

          </List>
      </div>
    );
  }
}

export default App;
