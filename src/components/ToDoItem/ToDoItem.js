import './ToDoItem.css';
import { useDispatch } from 'react-redux';
import { statusChange } from '../../redux/action';

export default function ToDoItem(props) {

    const dispatch = useDispatch();

    const clickBtn = () => {
        return dispatch(statusChange(props.task, false))
    }

    return (
        <div className="to-do-item">
            <div className="to-do-item__container">
                <button
                    onClick={clickBtn}
                    className={props.status === true ?
                        "to-do-item__container-button"
                        :
                        "to-do-item__container-button-false"}>
                </button>
                <div className={props.status === true ?
                    "to-do-item__container-task"
                    :
                    "to-do-item__container-task-false"}>
                    {props.task}
                </div>
            </div>
        </div>
    );
}

