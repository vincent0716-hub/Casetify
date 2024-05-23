import About from '../pages/About'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Colab from '../pages/Colab'
import Collection from '../pages/Collection'
import Customize from '../pages/Customize'
export type Router = {
    path: string,
    element: JSX.Element,
    text: string
}
export const projectRouter: Router[] = [
    {
        path: "/",
        element: <Home />,
        text: "首頁"
    },
    {
        path: "/product",
        element: <Product />,
        text: "商品"
    },
    {
        path: "/colab",
        element: <Colab />,
        text: "聯名系列"
    },
    {
        path: "/collection",
        element: <Collection />,
        text: "經典印花"
    },
    {
        path: "/customize",
        element: <Customize />,
        text: "客製化設計"
    },
    {
        path: "/recommondations",
        element: <About />,
        text: "精選商品&關於品牌"
    },

]