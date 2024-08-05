import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(data, res){
  if (data.method == 'POST'){
    const {title, content} = data.body;
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').updateOne(
      {_id : new ObjectId(data.body._id)}, 
      {$set : {title, content}}
    )
    res.redirect(302, '/list')
  }
}