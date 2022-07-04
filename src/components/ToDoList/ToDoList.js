import './ToDoList.css';
import React, { useState } from 'react'
import ToDoItem from '../ToDoItem/ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../redux/action';

export default function ToDoList() {

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);

  const statusBtn = useSelector(state => state.taskListStatus);

  const [state, setState] = useState(() => {
    return {
      task: ""
    }
  })

  const changeInput = event => {
    event.persist()
    setState(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  const clickAdd = () => {
    dispatch(addTask(state.task));
    setState(prev => {
      return {
        ...prev,
        task: '',
      }
    })
  }

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      dispatch(addTask(state.task));
      setState(prev => {
        return {
          ...prev,
          task: '',
        }
      })
    }
  }

  let status = 'All'
  if (statusBtn === 'All') {
    status = 'All'
  }
  if (statusBtn === 'Active') {
    status = true;
  }
  if (statusBtn === 'Completed') {
    status = false;
  }

  return (
    <div className="to-do-list">
      <div className="to-do-list__container">
        < input
          className="to-do-list__container-input"
          type="task"
          id="task"
          name="task"
          value={state.task}
          onChange={changeInput}
          onKeyDown={onKeyDown}
          placeholder="Какие планы на сегодня?"
        />
        <button
          onClick={clickAdd}
          className="to-do-list__container-button"
        >+</button>
      </div>
      <div className='to-do-list__container-task'>
        {tasks && tasks.filter((item) =>
        (status === "All" ?
          true
          :
          item.status === status)
        ).map((item) => (
          <ToDoItem {...item} />
        ))}
      </div>
    </div>
  );
}
