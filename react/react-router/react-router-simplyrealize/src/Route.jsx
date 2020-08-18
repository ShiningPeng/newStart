import React from 'react';

export default function Route(props) {
  const { path, component : Com} = props
  return window.location.pathname === path ? <Com /> : null
}