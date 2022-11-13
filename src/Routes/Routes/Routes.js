import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import News from "../../Pages/News/News";
import Register from "../../Pages/Register/Register/Register";

export const Routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/blog/:id',
                element: <Blog></Blog>
            },
            {
                path: '/faq/:id',
                element: <Faq></Faq>
            },
            {
                path: '/login/:id',
                element: <Login></Login>
            },
            {
                path: '/register/id',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loder: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>
            }

        ]
    }

])