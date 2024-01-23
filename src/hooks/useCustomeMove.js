import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


// 공통적으로 사용할 커스텀훅

const getNum = (param, defaultValue) => {
    if(!param){
        return defaultValue
    }

    return parseInt(param);
}

const useCustomMove = () => {
    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false);

    const [queryParams] = useSearchParams() 

    const page = getNum(queryParams.get('page'), 1); //page라는 이름의 파라미터값이 없으면 1로 지정.
    const size = getNum(queryParams.get('size'), 10); // getNum이라는 이름의 파라미터가 없으면 10으로 지정.

    const queryDefault = createSearchParams({page,size}).toString(); // queryString 생성

    const moveToList = (pageParam) =>{

        let queryStr = "";

        if(pageParam){
            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 10)
            
            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString()
        }else{
            queryStr = queryDefault
        }

        //선택된 페이지를 다시 클릭해도 api요청을 할 수 있어야 함.
        setRefresh(!refresh)

        navigate({pathname : '../list', search:queryStr});
    }

    const moveToModify = (num) => {
        navigate({
            pathname:`../modify/${num}`,
            search:queryDefault
        })
    }

    const moveToRead = (num) => {
        navigate({
            pathname:`../read/${num}`,
            search:queryDefault
        })
    }

    return {moveToList, moveToModify, moveToRead, page, size, refresh}
}

export default useCustomMove