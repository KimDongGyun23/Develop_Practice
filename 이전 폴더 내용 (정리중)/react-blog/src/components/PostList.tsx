import AuthContext from 'context/AuthContext';
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from 'firebaseApp';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


interface PostListProps {
  hasNavigation?: boolean;
  defaultTab?: TabType | CategoryType ;
}

type TabType = "all" | "my"

export interface CommentsInterface {
  content: string;
  uid: string;
  email: string;
  createdAt: string;
}

export interface PostProps {
  id?: string;
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  uid: string;
  category?: CategoryType;
  comments?: CommentsInterface[];
}

export type CategoryType = "Frontend" | "Backend" | "Web" | "Native";
export const CATEGORIES: CategoryType[] = [
  "Frontend",
  "Backend",
  "Web",
  "Native"
]

const PostList = ({ hasNavigation = true, defaultTab = "all" } : PostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType | CategoryType>(defaultTab)
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    // const datas = await getDocs(collection(db, "posts"));

    setPosts([]);


    /// order ///
    let postsRef = collection(db, "posts");
    let postsQuery;
    
    /// filter ///
    if (activeTab === 'my' && user) {
      // 나의 글만 필터링
      // uid가 user.uid와 동일한 쿼리
      // 복합쿼리 사용 시, firebase에서 카테고리 인덱스를 추가해야함
      postsQuery = query(postsRef, 
        where("uid", "==", user.uid),
        orderBy("createdAt", "asc")
      );

    } else if (activeTab === "all") {
      // 모든 글 보여주기
      postsQuery = query(postsRef, orderBy("createdAt", "asc"));
    } else {
      postsQuery = query(
        postsRef, 
        where("category", "==", activeTab),
        orderBy("createdAt", "asc")
      );

    }
    /// filter ///
    
    
    const datas = await getDocs(postsQuery);
    /// order ///

    datas?.forEach((doc)=>{
      const dataObj = {...doc.data(), id: doc.id};
      setPosts((prev) => [...prev, dataObj as PostProps]);
    })
  }

  /// 삭제 ///
  const handleDelete = async (id: string)=>{
    const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?")
    if (confirm && id){
      await deleteDoc(doc(db, "posts", id));

      toast.success("게시글을 삭제했습니다.");
      getPosts() // 변경된 post 리스트를 다시 가져옴
    }
  }

  useEffect(()=>{
    getPosts();
  }, [activeTab])

  return (
    <>
      {
        hasNavigation && (
        <div className='post__navigation'>
          <div 
            role='presentation' 
            onClick={()=>setActiveTab("all")}
            className={activeTab === 'all' ? 'post__navigation--active' : ""}
          >
            전체
          </div>
          <div
            role='presentation'
            onClick={()=>setActiveTab("my")}
            className={activeTab === 'my' ? 'post__navigation--active' : ""}
          >
            나의 글
          </div>
          {
            CATEGORIES?.map((category)=> (
              <div
                key={category}
                role='presentation'
                onClick={()=>setActiveTab(category)}
                className={activeTab === category ? "post__navigation--active" : ""}
              >
                {category}
              </div>
            ))
          }
        </div>
      )}

      <div className='post__list'>
        {
          posts?.length > 0
          ? posts?.map((post, index) => (
            <div className='post__box' key={post?.id}>
              <Link to={`/posts/${post?.id}`}>

                <div className='post__profile--box'>
                  <div className='post__profile' />
                  <div className='post__author-name'>{post?.email}</div>
                  <div className='post__date'>{post?.createdAt}</div>
                </div>

                <div className='post__title'>{post?.title}</div>
                <div className='post__text'>{post?.summary}</div>
              </Link>


              { post?.email === user?.email && (
                <div className='post__utils--box'>
                  <div 
                    className='post__delete'
                    role='presentation'
                    onClick={()=>handleDelete(post.id as string)}
                  >
                    삭제
                  </div>
                  <div className='post__edit'>
                    <Link to={`/posts/edit/${post?.id}`}>수정</Link>
                  </div>
                </div>
              )}
              
            </div>
          ))
          : 
          <div className='post__no-post'>"게시글이 없습니다."</div>
        }
      </div>
    </>
  )
}

export default PostList