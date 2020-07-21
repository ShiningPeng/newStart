import React, { useState } from "react";
import { List, Icon } from "antd";
const { Item } = List;

const TodoList = ({ todos, onToggleFinished}) => {
    // 删除
    const onDelete = e => {

    }

    return (
        <div className="list-wrap">
            { todos.length === 0? (
                <p>暂无待办事项</p>
            ):(
                <List 
                    itemLayout= "horizontal"
                    dataSource= {todos}
                    renderItem={({ id, text, finished}, idx) => {
                        const itemClasses = classNames({
                            "list-item": true,
                            "list-item__finished": finished
                        })
                        return(
                            // BEM CSS命名
                            // Block
                            // Element
                            // Modifier 
                            <Item className="list-item">
                                {/* img.list-item--avatar */}
                            </Item>
                        )
                    }}
                /> 
            )}
            {/* List> */}
        </div>
    )
}
