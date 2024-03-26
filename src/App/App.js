import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import {Landing} from './component/Pages/Landing.jsx'
import {Login} from './component/Pages/Login/index.jsx'
// import {IsProtectedRoute} from './hoc/IsProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Landing/>
    
  },

  {
    path: 'login',
    element: <Login/>
  },

  
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
