const initialState = {
    tasks: [],
    taskListStatus: 'All'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASKS_LOCAL_STORAGE':
            const localStorageArr = action.payload.tasks;
            localStorage.setItem("task", JSON.stringify(state.tasks));
            return { ...state, tasks: localStorageArr }
        case 'ADD_TASK':
            localStorage.clear();
            const task = action.payload.task;
            if (task === '') return { ...state, ...state.tasks }
            const obj = {
                task: task,
                status: true
            }
            const newTasks = [...state.tasks, obj];
            localStorage.setItem("task", JSON.stringify(state.tasks));
            return { ...state, tasks: newTasks, }
        case 'STATUS_CHANGE':
            localStorage.clear();
            const taskStatusChange = action.payload.task;
            const status = action.payload.status;
            const newTasksTwo = [...state.tasks];
            for (let i = 0; newTasksTwo.length > i; i++) {
                if (newTasksTwo[i].task === taskStatusChange) {
                    newTasksTwo[i].status = status;
                }
            }
            localStorage.setItem("task", JSON.stringify(state.tasks));
            return { ...state, tasks: newTasksTwo }
        case 'TASK_LIST_STATUS':
            localStorage.clear();
            const statusBtn = action.payload.status;
            localStorage.setItem("task", JSON.stringify(state.tasks));
            return { ...state, taskListStatus: statusBtn }
        case 'CLEAR_TASK':
            localStorage.clear();
            const newTasksThree = [...state.tasks].filter((item) =>
                item.status === true);
            localStorage.setItem("task", JSON.stringify(state.tasks));
            return { ...state, tasks: newTasksThree }
        default:
            return state;
    }
}

export default reducer;