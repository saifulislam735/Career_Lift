import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";

const Root = () => {
    const catagory = useLoaderData();
    return (
        <div >
            <Header></Header>
            <Home key={catagory.id} catagory={catagory}></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;