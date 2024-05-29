import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const logOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
