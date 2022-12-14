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
import ResultPage from './components/ResultPage/ResultPage';
import DeleteAccount from './components/DeleteAccount/DeleteAccount';

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
          path:"/statictics/:email",
          element:<Statictis/>,
          loader:({params})=>{
           return fetch(`http://localhost:5000/result/${params.email}`)
          }
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
        },
        {
          path:'/result/:id',
          element:<ResultPage></ResultPage>,
          loader:({params})=>{
            const {id}=params;
            return fetch(`http://localhost:5000/IndResult/${id}`)
            
          }
        },
        {
          path:'/deleteAccount',
          element:<DeleteAccount/>
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
