import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ContactDetails from './Components/ContactDetails';
import User from './Components/User';

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
    path: 'contact/details',
    element: <ContactDetails />
  },
  {
    path: 'contact/:id',
    element: <User />
  }
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>


  )
}
export default App;




