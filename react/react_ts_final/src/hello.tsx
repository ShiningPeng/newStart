// 子组件
import * as React from 'react'
export interface props {
    userName: string;
}
export const HelloComponent = (props: props) => (
    <h2>Hello {props.userName}</h2>
)

