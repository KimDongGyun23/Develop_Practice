import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(data, res){
  if (data.method == 'DELETE'){
    const session = await getServerSession(data, res, authOptions);

    const db = (await connectDB).db('forum');
    let findItem = await db.collection('post').findOne({ _id : new ObjectId(data.body)});

    if ( findItem === session.user.email){
      let result = await db.collection('post').deleteOne({_id : new ObjectId(data.body)});
      res.status(200).json('처리완료함');
    } else {
      return 응답.status(500).json('현재유저와 작성자 불일치');
    }
  }
}