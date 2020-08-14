import React from 'react';
import { func } from 'prop-types';

// function observer(){}
// @observer

const a = 2 **2
class App extends React.Component {
  render() {
    return (
      <div>
        <img src="baidu.com" alt="baidu" className="box" />
      </div>
    );
  }
}

export default App;

// let node = (
//   <div>
//    <img src="baidu.com" alt="baidu" className="box"/>
//   </div>
// )

// 经过Babel编译后

// var node = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
//   src: "baidu.com",
//   alt: "baidu",
//   className: "box"
// }));