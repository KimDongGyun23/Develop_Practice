'use client'

export default function Error({error, reset}){
  return(
    <>
      <h4>에러발생</h4>

      {/* 실행시 페이지 다시 로드 */}
      <button onClick={()=>{ reset() }}>버튼</button>
    </>
  )
}