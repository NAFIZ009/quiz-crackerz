import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';
import loader from './utilitis/loader';
import ErrorPage from './components/errorElement/ErrorPage';
import Statictis from './components/Statictis/Statictis';
import Blogs from './components/Blogs/Blogs';
import { AuthContext } from './Context/AuthContext';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProtectedRoute from './Layout/ProtectedRoute';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          loader:loader,
          element:<Home/>
        },
        {
          path:'/topics',
          loader:loader,
          element:<Topics/>
        },
        {
          path:'/topics/:id',
          loader:loader,
          element:<ProtectedRoute><Questions/></ProtectedRoute>
        },
        {
          path:"/statictics",
          loader:loader,
          element:<Statictis/>
        },
        {
          path:"/blogs",
          element:<Blogs/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<Signup/>
        }
      ]
    },
    {
      path:'*',
      element:<ErrorPage/>
    }
  ]);
  
  return (
    <div className="App">
      <AuthContext>
      <RouterProvider router={router}/>
      </AuthContext>
      
    </div>
  );
}

export default App;
