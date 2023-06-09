// import './App.css'
import styled from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Header from './Components/Header';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />

  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'projects',
    element: <Project />
  }
])


const App = () => {
  return (


    <AppContainer>


      <RouterProvider router={router} />

    </AppContainer>



  )
}
export default App;


const AppContainer = styled.main`
width: 100vw;
overflow-x: hidden;

`

