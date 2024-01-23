import React from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom';
import ListComponent from '../../components/todo/ListComponent';

function ListPage() {


    const [queryParams] = useSearchParams();

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

    // const queryStr = createSearchParams({page:page,size:size}).toString();

    return (
        <div className='p-4 w-full bg-white'>
            <div className='text-xl md:text-3xl font-extrabold'>
                Todo List Page Componenet ---- {page} ---- {size}
            </div>
            <ListComponent>
                
            </ListComponent>
        </div>
    );
}

export default ListPage;