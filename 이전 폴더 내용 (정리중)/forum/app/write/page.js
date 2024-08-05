
export default function Write() {
  return (
    <div className="p-20">
      <h3>글 추가</h3>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목"/>
        <input name="content" placeholder="글내용"/>
        <input type="file" accept="image/*"
          onChange={async(e)=>{
            const file = e.target.files[0];
            const filename = encodeURIComponent(file.name)
            let res = await fetch(`/api/post/image?file=${filename}`)
            res = await res.json()
          }} />
        <button type="submit"
        >전송</button>
      </form>
    </div>
  )
} 