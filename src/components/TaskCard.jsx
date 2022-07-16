import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskAddInput } from './task/TaskAddInput'
import { TaskCardDeleteButton } from './task/TaskCardDeleteButton'
import { TaskCardTitle } from './task/TaskCardTitle'
import { Tasks } from './task/Tasks'

export const TaskCard = ({taskCardsList, setTaskCardsList, taskCard, index}) => {
  const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
          <div className='taskCard' ref={provided.innerRef} {...provided.draggableProps}>
          <div className='taskCardTitleAnsTaskCardDeleteButton'  {...provided.dragHandleProps}>
          <TaskCardTitle/>
          <TaskCardDeleteButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard}/>
          </div>
          
          <TaskAddInput inputText={inputText} setInputText={setInputText} setTaskList={setTaskList} taskList={taskList}/>
          <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
      </div>
      )}
    
    </Draggable>
  )
}
