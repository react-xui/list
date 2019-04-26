/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-list
 * User: 田想兵
 * Date: 2018-11-30
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';

export default class List extends Component {
  static Option = Option;
  constructor(props){
    super(props);
    this.state = {data:props.data};
  }
  render () {
    console.log(123)
    let {children,isLoadMore,onSelect} = this.props;
    let {data} = this.state;
    return (
      <div className="x-list">
        {children}
        {
          isLoadMore?<div>load</div>
        }
      </div>
    );
  }
}
