import React from 'react';

import {hashHistory} from 'react-router';

class Header extends React.Component{
  render(){
    return(
      <header>
        <button onClick={ () => hashHistory.goBack() }><i className="fa fa-arrow-left" aria-hidden="true"></i> 返回</button>
        <h3>我的{this.props.title}</h3>
        <button onClick={ () => hashHistory.push('/') }><i className="fa fa-home" aria-hidden="true"></i> 首页</button>
      </header>
    )
  }
}

export default Header;
