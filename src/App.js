import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';
import loader from './utilitis/loader';
import ErrorPage from './components/errorElement/ErrorPage';

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
          element:<Questions/>
        },
        {
          
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
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
