import { getServerSession } from "next-auth";
import { connectDB } from "/util/database"
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  const session = await getServerSession(요청, 응답, authOptions);

  if (요청.method == 'POST'){
    let db = (await connectDB).db('forum')
    let result = db.collection('post').insertOne(요청.body)
    응답.redirect(302, '/list')

    session && (요청.body.author = session.user.email);
  }

} 