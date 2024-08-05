import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PostHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="post__header">
      <button type="button" onClick={() => navigate(-1)}>
        <IoIosArrowBack className="post__header-btn" />
      </button>
    </div>
  );
}

export default PostHeader