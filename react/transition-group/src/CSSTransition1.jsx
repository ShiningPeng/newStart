import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

function Demo() {

    const [isIn, setIsIn] = useState(true);
    // 移走 触发时会自动加上类名    *-exit,*-exit-active,*-exit-done
    // 进入 触发时会自动加上类名 *-enter,*-enter-active,*-active-done

    return (
        <>
            <CSSTransition
                timeout={2000}
                classNames="msg"
                in={isIn}>
                <div className="box"> </div>
            </CSSTransition>
            <button onClick={() => {setIsIn(!isIn)}}>toggle</button>
        </>

    )
}

export default Demo;
