import { connectDB } from '@/util/database';
import React from 'react'
import ListItem from './ListItem';

async function List(){

  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}

export default List