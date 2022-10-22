import "./single.css";
import { Link } from "react-router-dom";


export default function Single({ post }) {
  const PF = "https://wubbachess.herokuapp.com/images/";

  return (
    <div className="postSingle">
      <div className="posttitle">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle link" >{post.title}</span>
        </Link>
      </div>
      {/**
       * 
             {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}

       */}


      <div className="postDes">
        <mark-down>
          {post.content}
        </mark-down>
      </div>

      <div className="postInfo">
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <span className="postAuthor">
        _ {post.username}
      </span>

      <Link className="link" to="/land">Land</Link>

      <button className="button">Donate</button>

    </div>
  );
}
