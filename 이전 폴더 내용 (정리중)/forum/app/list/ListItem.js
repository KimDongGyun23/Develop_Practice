'use client'

import Link from "next/link"

export default function ListItem({result}){

  return(
    <>
      {
        result.map(({_id, title, content})=>(
          <div className="list-item" key={_id}>
            <Link href={`/detail/${_id}`}>
              <h4>{title}</h4>
            </Link>
            <p>{content}</p>
            <Link href={`/edit/${_id}`}>수정</Link>
            <span onClick={(e)=>{
              fetch('/api/post/delete', {method : "DELETE", body : _id})
              .then((res)=>res.json())
              .then(()=>{
                e.target.parentElement.style.opacity = 0;
                setTimeout(()=>{
                  e.target.parentElement.style.display = 'none';
                }, 200)
              })
            }}>삭제</span>
          </div>
        ))
      }
    </>
  )
}