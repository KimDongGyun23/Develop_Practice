import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit({params}) {

  const client = await connectDB;
  const db = client.db("forum");
  const {title, content} = await db.collection('post').findOne({_id : new ObjectId(params.id)});

  return (
    <div className="p-20">
      <h3>수정 페이지</h3>
      <form action="/api/post/edit" method="POST">
        <input name="_id" defaultValue={params.id.toString()} style={{display : "none"}}/>
        <input name="title" defaultValue={title}/>
        <input name="content" defaultValue={content}/>
        <button type="submit">전송</button>
      </form>
    </div>
  )
}
