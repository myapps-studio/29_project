import React from 'react';

const TodoList = props => <div id={props.taskId}>
                            <ul>
                                <li>Task to do: {props.taskName}</li>
                            </ul>    
                          </div>;

export default TodoList;