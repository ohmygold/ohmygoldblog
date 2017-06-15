import React from 'react';

import {Link} from 'react-router';

class LeftNav extends React.Component{
  render(){
    return(
      <div className='leftnav'>
        <h3>我的{this.props.title}</h3>
        <Link to='/' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Home</Link>
        <Link to='/blog' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Blog</Link>
        <Link to='/work' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Work</Link>
        <Link to='/about' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;About</Link>
      </div>
    )
  }
}

export default LeftNav;
