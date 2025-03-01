import {Route, BrowserRouter, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
