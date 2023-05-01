import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitles">
               Dream and Write
            </span>
        </div>
        <img className="headerImg" src={process.env.PUBLIC_URL + "images/header2.jpg"} alt="header img"/>
      
    </div>
  )
}
