import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src={process.env.PUBLIC_URL + "images/logo.jpg"} alt="Network issue"/>
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Apurva"/>
            <label>email</label>
            <input type="email" placeholder="apurva@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingSubmit">Update</button>
            
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
