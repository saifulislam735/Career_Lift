import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {

    return (
        <div >
            {/* {footer section} */}
            <Header></Header>
            <Outlet></Outlet>

            <Toaster position="top-center"
                reverseOrder={false}
            />
            
            {/* {footer section} */}
            <section style={{ background: "var(--Dark-01, #1A1919)" }}>
                <div className="px-60">
                    <Footer></Footer>
                </div>
            </section>
        </div>
    );
};

export default Root;