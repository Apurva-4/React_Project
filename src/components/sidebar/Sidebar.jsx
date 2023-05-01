import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span classname="sidebarTitle">ABOUT ME</span>
            <br/>
            <img src={process.env.PUBLIC_URL + "images/sidebar img.jpg"} alt=""/>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, harum sunt adipisci optio 
                unde doloribus cupiditate, quaerat nisi consectetur nulla voluptatem natus! Expedita obcaecati
                 debitis earum nulla minus nesciunt corrupti?
            </p>
        </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATRGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Carrer</li>
            <li className="sidebarListItem">Love</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Music</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      </div>
      <div className="sidebarSocial">
                <i className=" sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
      </div>
    </div>
  )
}

