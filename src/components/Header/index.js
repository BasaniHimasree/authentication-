import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <ul className="header-items">
      <Link to="/">
        <li className="item">Home</li>
      </Link>
      <Link to="/about">
        <li className="item">About</li>
      </Link>
    </ul>
  </div>
)

export default Header
