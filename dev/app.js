import React from 'react';
import ReactDOM from 'react-dom';
import List from '../src/index';
import '../src/_index';
const {Option} = List;

var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onSelectHandle(item,index){
    console.log(item,index)
  }
  render() {
    return (
      <div>
      <div style={{padding:"10px",border:"1px solid #ccc",height:80,overflow:'auto'}}>
      <List>
        {
          [{text:'demo1'},{text:'demo2'},{text:'demo3'},{text:'demo4'},{text:'demo5'},{text:'demo6'}].map( (item,index)=><Option key={index} onSelect={this.onSelectHandle.bind(this,item,index)}>{item.text}</Option>)
        }
      </List>
      </div>
        <List>
          <Option>aaa</Option>
          <Option>bbb</Option>
          <Option>ccc</Option>
        </List>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);