const initialState = {
    tasks: [],
    taskListStatus: 'All'
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_TASK':
            const task = action.payload.task;
            if (task === '') return { ...state, ...state.tasks }
            const obj = {
                task: task,
                status: true
            }
            const newTasks = [...state.tasks, obj];
            return { ...state, tasks: newTasks,  }
        case 'STATUS_CHANGE':
            const taskStatusChange = action.payload.task;
            const status = action.payload.status;
            const newTasksTwo = [...state.tasks];
            for (let i = 0; newTasksTwo.length > i; i++) {
                if (newTasksTwo[i].task === taskStatusChange) {
                    newTasksTwo[i].status = status;
                }
            }
            return { ...state, tasks: newTasksTwo }
        case 'TASK_LIST_STATUS':
            const statusBtn = action.payload.status;
            return { ...state, taskListStatus: statusBtn }
        case 'CLEAR_TASK':
            const newTasksThree = [...state.tasks].filter((item) =>
                item.status === true);
            return { ...state, tasks: newTasksThree }
        default:
            return state;
    }
}

export default reducer;