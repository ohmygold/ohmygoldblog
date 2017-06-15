import React from 'react';

import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeftNav: false,
      title: '主页'
    }
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setLeftNav();
    window.onresize = this.setLeftNav.bind(this)
    this.setTitle();
  }
  setLeftNav(){
    this.setState({showLeftNav: window.innerWidth>750 ? true : false})
  }
  setTitle(){
    this.setState({
      title: this.props.router.isActive('/',true) ? '主页' :
            this.props.router.isActive('/blog') ? '博客' :
            this.props.router.isActive('/work') ? '工作' :
            this.props.router.isActive('/about') ? '关于' : '文章'
    })
  }
  render () {
    return(
      <div className='root'>
        {this.state.showLeftNav ? <LeftNav title={this.state.title}/> : <Header title={this.state.title}/> }

        <div className='mywrap'>
          {this.props.children}
        </div>

        {this.state.showLeftNav ? null : <Footer/> }
      </div>
    )
  }
}

export default App;
