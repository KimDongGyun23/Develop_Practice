import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(요청, 응답) {

  let session = await getServerSession(요청, 응답, authOptions);
  if (요청.method == 'POST'){
    let data = JSON.parse(요청.body);
    
    let 저장할거 = {
      content : data.comment,
      parent : data._id,
      author : session.user.email,
    }
    let db = (await connectDB).db('forum');
    let result = await db.collection('comment').insertOne(저장할거);
    응답.status(200).json('저장완료')
  }
} 