import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';
import loader from './utilitis/loader';

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
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
