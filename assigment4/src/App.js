import './App.css';
import React,{useContext} from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Container, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Post from './components/Post';
import Profile from './components/Profile';
import LoginContext from './context/LoginContext';


const PATHS = {
  HOME: '/',
  POST: '/post',
  LOGIN:'/login'

}

const routes = [
  {
      path: PATHS.HOME,
      element: (<Home />)
  },
  {
      path: PATHS.POST,
      element: (<Post />)
  },
  {
      path:PATHS.LOGIN,
      element:(<Login/>)
  },

]
const navbarItem = [
  {
      to: PATHS.HOME,
      title:'Home'
  },
  {
      to:PATHS.POST,
      title:'Post'
  },

  {
    to:PATHS.LOGIN,
    title:'Login'
  }
]


function App() {
  const login= useContext(LoginContext)
  console.log('Login?',login)
  return (
    <div className="App">
                  <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Assigment 4 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {navbarItem.map(item =>
                                <Nav.Link href={item.to}>{item.title}</Nav.Link>
                                )}
                                <Nav.Link href ={true?'/profile':'login'}>Profile</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <BrowserRouter>
              <LoginContext.Provider>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                    <Route key='profile' path="/profile" element = {(<Profile/>)} >Profile</Route>
                        
                        <Route path ="/detail/:id" element ={(<Detail/>)} />
                </Routes>
                </LoginContext.Provider>
            </BrowserRouter>,

    </div>
  );
}

export default App;
