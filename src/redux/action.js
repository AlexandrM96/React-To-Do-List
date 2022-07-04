
export function addTask(task) {
    return {
        type: 'ADD_TASK',
        payload: {
            task: task
        }
    };
}

export function statusChange(task, status) {
    return {
        type: 'STATUS_CHANGE',
        payload: {
            task: task,
            status: status
        }
    };
}

export function taskListStatus(status) {
    return {
        type: 'TASK_LIST_STATUS',
        payload: {
            status: status
        }
    };
}

export function taskListClear() {
    return {
        type: 'CLEAR_TASK'
    };
}

export function addTasksLocalStorage(tasks) {
    return {
        type: 'ADD_TASKS_LOCAL_STORAGE',
        payload: {
            tasks: tasks
        }
    };
}