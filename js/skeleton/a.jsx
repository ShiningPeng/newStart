import React, {
  useState,
  // useCallback,
  useRef
} from "react";
import "./styles.css";
// 点击显示 count
// 快速 点击 增加 count 2次 问 输出什么
function Example() {
  const [count, setCount] = useState(0);
  let countRef = useRef();
  countRef.current = count;

  const handleAlertClick = () => {
    setTimeout(() => {
      console.log(countRef.current) //2,获取最新的count
      console.log("count", count);    //0
    }, 3000);
  };

/*
capture value
组件每次render的时候，都会形成一个快照
每次都有自己独立的 props state
*/ 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>增加 count</button>
      <button onClick={handleAlertClick}>显示 count</button>
    </div>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Example />
      </div>
    );
  }
}
