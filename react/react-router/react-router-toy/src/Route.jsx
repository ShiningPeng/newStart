import React, { useContext } from 'react';
import { context } from './BrowserRouter'
export default function Route(props) {
  const { path, component: Com } = props
  const pathname = useContext(context)
  return pathname === path ? <Com /> : null
}