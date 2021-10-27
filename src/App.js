import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AddPost from './pages/AddPost'
import LikesPage from './pages/LikesPage'
import DetailPage from './pages/DetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
    return (
        <Router>
          <Navbar/>
            <div className="App">
              <Switch>
                <Route exact path="/">
                <LoginPage/>
                </Route>
                <Route path="/home">
                  <HomePage/>
                </Route>
                <Route path="/add">
                  <AddPost/>
                </Route>
                <Route path="/liked">
                  <LikesPage/>
                </Route>
                <Route path="/post/:id">
                  <DetailPage/>
                </Route>
                <Route path="*">
                  <NotFoundPage/>
                </Route>
              </Switch>
            </div>
        </Router>
    )
}

export default App
