import './Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { taskListStatus, taskListClear } from '../../redux/action';

export default function Buttons() {

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);

  const statusBtn = useSelector(state => state.taskListStatus);

  const clickBtnAll = () => {
    const status = 'All';
    return dispatch(taskListStatus(status));
  }

  const clickBtnActive = () => {
    const status = 'Active';
    return dispatch(taskListStatus(status));
  }

  const clickBtnCompleted = () => {
    const status = 'Completed';
    return dispatch(taskListStatus(status));
  }

  const clickBtnClear = () => {
    return dispatch(taskListClear());
  }

  const taskLength = () => {
    const length = tasks && tasks.filter((item) =>
      item.status === true
    )
    return length.length
  }

  return (
    <div className='buttons'>
      <div className='buttons__container'>
        <div className='buttons__container-task-length'>
          {`${taskLength()} items left`}
        </div>
        <div className='buttons__container-buttons'>
          <button
            onClick={clickBtnAll}
            className={
              statusBtn === 'All' ?
                'buttons__container-buttons-button-active'
                :
                'buttons__container-buttons-button'
            }>
            All
          </button>
          <button
            onClick={clickBtnActive}
            className={
              statusBtn === 'Active' ?
                'buttons__container-buttons-button-active'
                :
                'buttons__container-buttons-button'
            }>
            Active
          </button>
          <button
            onClick={clickBtnCompleted}
            className={
              statusBtn === 'Completed' ?
                'buttons__container-buttons-button-active'
                :
                'buttons__container-buttons-button'
            }>
            Completed
          </button>
        </div>
        <div className='buttons__container-clear'>
          <button onClick={clickBtnClear} className='buttons__container-clear-button'>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

