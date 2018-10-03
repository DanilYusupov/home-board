import store from "./store/index";
import {addTask} from './actions';

window.store = store;
window.addTask = addTask;