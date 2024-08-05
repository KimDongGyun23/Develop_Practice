'use client'

import { useEffect, useState } from "react"

export default function Comment({_id}){
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch(`/api/comment/list?id=${_id}`).then(r=>r.json()).then((result)=>{
      setData(result);
    })
  },[])

  return(
    <div>
      <div>댓글 목록</div>
      {
        data.map(({content}, index)=>(
          <p key={index}>{content}</p>
        ))
      }
      <input 
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
      />
      <button
        onClick={ () => {
          fetch('/api/comment/new', {
            method: 'POST', 
            body : JSON.stringify({ comment, _id })
          })
        }}
      >댓글 전송</button>
    </div>
  )
}