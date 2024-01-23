import React from "react";

//페이지 이동시에 사용되는 컴포넌트 공용이라 common 디렉토리에 만듬.

function PageComponent({ serverData, movePage }) {
  //serverData.prev, pageNumList, next
  return (
    <div className="m-6 flex justify-center">
    {serverData.prev ?
    <div className="m-2 p-2 w-16 text-center font-bold text-blue-400 "
    onClick={() => movePage({page:serverData.prevPage} )}>
    Prev </div> : <></>}
    {serverData.pageNumList.map(pageNum =>
    <div key={pageNum}
    className={ `m-2 p-2 w-12 text-center rounded shadow-md text-white
    ${serverData.current === pageNum? 'bg-gray-500':'bg-blue-400'}`}
    onClick={() => movePage( {page:pageNum})}>
    {pageNum}
    </div>
    )}
    {serverData.next ?
    <div className="m-2 p-2 w-16 text-center font-bold text-blue-400"
    onClick={() => movePage( {page:serverData.nextPage})}>
    Next
    </div> : <></>}
    </div>
    );
}

export default PageComponent;
