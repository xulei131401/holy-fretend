import {
    GET_STUDENT_DATA_SUCCESS,
} from '../../actions/actionTypes';

let initialState = {
    studentList: {
        name:"许磊",
        age: 23
    },
};

//combineReducers可以合并多个reducers
export default function doStudentList(state = initialState, action){
    console.log("action", action);

    switch (action.type) {
        case GET_STUDENT_DATA_SUCCESS:
            return Object.assign({}, state, {studentList: action.data.studentList});
        default:
            return state;
    }
};
