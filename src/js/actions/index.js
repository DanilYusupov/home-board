import constants from "../constants/action-types";

export const addTask = task => ({type: constants.ADD_TASK, payload: task});