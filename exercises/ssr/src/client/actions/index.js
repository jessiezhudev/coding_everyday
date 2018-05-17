import Axios from "axios";

export const FETCH_USERS = 'fetchUsers'
export const fetchUsers = () => async (dispatch) => {
    const res = await Axios.get('http://react-ssr-api.herokuapp.com/users')
    dispatch({
        type: FETCH_USERS,
        payload: res
    }) 
}