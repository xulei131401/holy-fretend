import {
    GET_STUDENT_DATA_SUCCESS
} from './actionTypes';


//获取学生列表
const dispatchgetStudentListSuccess = (list) => {
    return {
        type: GET_STUDENT_DATA_SUCCESS,
        data: {
            studentList: list
        }
    };
}

export function getStudentList() {
    return (dispatch, getState, extraAgrument) => {
        console.log("dispatch", dispatch)
        console.log("getState", getState())
        console.log("extraAgrument", extraAgrument)
        let data = {name:"李四"}
        console.log('asdasd')
        //dispatch过程，发送给store
        dispatch(dispatchgetStudentListSuccess(data));
    }
}
