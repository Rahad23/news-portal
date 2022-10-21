// import Main from './../../routes/route/Routs';
import Category from '../../component/categori/Categori';
import Errorpage from '../../component/errorPage/Errorpage';
import Home from '../../component/home/Home';
import Login from '../../component/login/Login';
import Newes from '../../component/newes/Newes';
import Register from '../../component/register/Register';
import Main from './../../component/main/Main';
const { createBrowserRouter } = require("react-router-dom");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async()=> fetch('http://localhost:5000/allNews')
            },
            {
                path:'/home',
                element: <Home></Home>,
                loader: async()=> fetch('http://localhost:5000/allNews')
            },
            
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <Newes></Newes>,
                loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])