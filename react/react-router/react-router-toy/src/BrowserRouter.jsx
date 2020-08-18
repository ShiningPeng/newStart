import React, { Component } from 'react';

const context = React.createContext()

class BrowserRouter extends Component {
  state = {
    pathname: '/'
  }
  update = (pathinfo) => {
    this.setState(pathinfo)
    this.forceUpdate()
  }
  componentDidMount() {
    window.addEventListener('popstate', () => {
      this.setState({
        pathname: window.location.pathname
      })
    })
  }
  render() {
    return (
      <context.Provider value={
        {
          pathname: this.state.pathname,
          update: this.update
        }
      }>
        {this.props.children}
      </context.Provider>
    );
  }
}

export {
  context,
  BrowserRouter
};