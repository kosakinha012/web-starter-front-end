import { createBrowserRouter } from "react-router-dom"
import Homepage from "./pages/home/Homepage"
import ProductsPage from "./pages/prutucts/protucts"
import Layout from "./pages/layout"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/produtos",
                element: <ProductsPage></ProductsPage>,
            }
        ]
    }
])