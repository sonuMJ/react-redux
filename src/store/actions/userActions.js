import { GET_USER, USERS_ERROR } from "../type";
import axios from 'axios'


export const getUsers = () => async dispatch => {
    try {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        console.log(response);
        dispatch({
            type:GET_USER,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:USERS_ERROR,
            payload:console.log(error)
        })
    }
}