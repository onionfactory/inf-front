import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`

// API를 따로 빼서 사용하는 기능별 API JS를 만들어 사용하는게 좋을듯...
export const getOne = async (tno) => {
    // console.log(tno);
    const res = await axios.get(`${prefix}/${tno}`)
    return res.data;
}

export const getList = async (pageParams) => {
    const {page, size} = pageParams;
    const res = await axios.get(`${prefix}/list`, {params:{...pageParams}})
    return res.data;
}

export const postAdd = async (todoObj) => {
    const res = await axios.post(`${prefix}/`, todoObj)
    return res.data;
}

export const deleteOne = async (tno) =>{
    const res = await axios.delete(`${prefix}/${tno}`);
    return res.data;
}

export const putOne = async (todo) =>{
    const res = await axios.put(`${prefix}/${todo.tno}`, todo);
    return res.data;
}

