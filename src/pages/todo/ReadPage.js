import React from 'react'
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

function ReadPage() {

    const {tno} = useParams(); //이렇게 요소의 값만 가져올 수도 있음.

    return (
        <div className='font-extrabold w-full bg-white mt-6'>
            <div className='text-2xl'>
                Todo Read Page {tno}
            </div>

            {/* <div> */}
                {/* <button onClick={()=>{moveToModify(tno)}}>test Modify</button> */}
                {/* <button onClick={()=>{moveToList()}}>test List</button> */}
            {/* </div> */}

            <ReadComponent tno={tno}/>
        </div>
    );
}

export default ReadPage;