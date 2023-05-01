import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img  className="writeimg" src={process.env.PUBLIC_URL + "images/header2.jpg"} alt="Network issue"/>
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-plus"></i></label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" 
            className="writeInput writeText">
                 </textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  )
}
