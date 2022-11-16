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
                element: <Home></Home>,
                loader: () => fetch('https://st-webcourse-sarver.vercel.app/news')
            },
            {
                path: '/courses',
                element: <Courses></Courses>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://st-webcourse-sarver.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`https://st-webcourse-sarver.vercel.app/news/${params.id}`)
            }

        ]
    }

])