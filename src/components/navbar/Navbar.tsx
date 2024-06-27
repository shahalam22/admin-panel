import './navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>AdminDashBoard</span>
      </div>
      <div className="icons">
        <div className="icon">
          <img src="/search.svg" alt="search" />
          <img src="/app.svg" alt="app" />
          <img src="/expand.svg" alt="expand" />
        </div>
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>3</span>
        </div>
        <div className="user">
          <img src="/user.svg" alt="user" />
          <span>UserName</span>
        </div>
        <img src="/settings.svg" alt="setting" />
      </div>
    </div>
  )
}

export default Navbar