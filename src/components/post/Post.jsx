import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
      src={process.env.PUBLIC_URL + "images/post img.jpg"} alt="" />
      <div className="postInfo">
        <div className="postcats">
            <span className="postcat">Music</span>
            <span className="postcat">Music</span>
        </div>
        <span className="postTitle">
            apurva pawar
        </span>
        <hr/>
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor quia assumenda 
        voluptatum expedita beatae consectetur laborum sit asperiores soluta natus, sequi explicabo, quas non. Pariatur 
        ipsa temporibus minus consequuntur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor quia assumenda 
        voluptatum expedita beatae consectetur laborum sit asperiores soluta natus, sequi explicabo, quas non. Pariatur 
        ipsa temporibus minus consequuntur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor quia assumenda 
        voluptatum expedita beatae consectetur laborum sit asperiores soluta natus, sequi explicabo, quas non. Pariatur 
        ipsa temporibus minus consequuntur.
      </p>
    </div>
  )
}
