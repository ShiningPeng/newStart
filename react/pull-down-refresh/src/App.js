import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components'
import pullToRefresh from './pullDown'
const { init } = pullToRefresh()

// 标签模板  css in js
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: black;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: blue;
    color: white;
  `}
`

function App() {
  const [isPrimary, setIsPrimary] = useState(false)
  const contentRef = useRef()
  const ptrRef = useRef()
  const bodyRef = useRef()
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      bodyEl: bodyRef.current,
      loadingFunction: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 3000);
        })
      }
    })
  }, [])


  return (
    <div className="body-wrap" ref={bodyRef}>
      {/* ptr-wrap 负责移动，随着下拉向下移动，loading 负责完成动画 */}
      <div ref={ptrRef} className="ptr-wrap">
        <div className="loading"></div>
      </div>
      <header ref={contentRef} className="content-wrap">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button primary={isPrimary}
          onClick={() => { setIsPrimary(!isPrimary) }}
        >click</Button>
      </header>
    </div>
  );
}

export default App;
