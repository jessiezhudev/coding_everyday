import axios from "axios";

export const FETCH_GOODS = "fetch_goods"
export const fetchGoods = () => async(dispatch) => {
    const res = await axios.get('https://www.easy-mock.com/mock/5b10ebe6b0cb5c4510cddf25/ssr/goods')
    dispatch({
        type: FETCH_GOODS,
        payload: res.data
    })
}