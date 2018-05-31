import axios from "axios";

export const FETCH_GOODS = "fetch_goods"
export const fetchGoods = () => async(dispatch) => {
    const res = await axios.get('')
    dispatch({
        type: FETCH_GOODS,
        payload: res
    })
}