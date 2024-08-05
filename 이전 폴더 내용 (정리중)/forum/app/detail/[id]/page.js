import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'
import Comment from './Comment';

async function Detail({params}) {

  const client = await connectDB;
  const db = client.db("forum");
  const {title, content} = await db.collection('post').findOne({_id : new ObjectId(params.id)});


  return (
    <>
      <h3>Detail</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      <Comment _id={params.id.toString()}/>
    </>
  )
}

export default Detail