import { Navigate } from "react-router-dom";

const { lazy, Suspense } = require("react");

const Loading = <div className='bg-red-700'>Loading....</div>

const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const todoRouter = () => {
    return [
        {
            path : 'list',
            element : <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path : 'add',
            element : <Suspense fallback={Loading}><TodoAdd/></Suspense>
        },
        {
            path : '',
            element : <Navigate replace={true} to={'list'}/>
        },
        {
            path : 'read/:tno',
            element : <Suspense fallback={Loading}><TodoRead></TodoRead></Suspense>
        },
        {
            path : 'modify/:tno',
            element : <Suspense fallback={Loading}><TodoModify></TodoModify></Suspense>
        }
    ]
}

export default todoRouter