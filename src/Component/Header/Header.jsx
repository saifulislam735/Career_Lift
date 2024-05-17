import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "@fontsource/inter"; // Defaults to weight 400

const Header = () => {
    return (
        <div className="grid grid-cols-3  my-10 items-center">
            <Link to={'/Career_Lift/'} className="text-3xl font-extrabold col-span-1">CarrerLift</Link>
            <div style={{ color: "var(--Dark-03, #757575)" }} className="col-span-1 flex gap-10 font-semibold">
                <ActiveLink to={'/Career_Lift/statistics'}>Statistics</ActiveLink>
                <ActiveLink to={'/Career_Lift/appliedjobs'}>Applied Jobs</ActiveLink>
                <ActiveLink to={'/Career_Lift/blog'}>Blog</ActiveLink>
            </div>
            <div className="flex items-center justify-center ms-auto" style={{ width: '180px', height: '60px', borderRadius: "8px", background: "var(--Linear, linear-gradient(90deg, #7E90FE 0%, #9873FF 100%))" }} >
                <Link to={'/Career_Lift/start_apply'} className="col-span-1 text-xl font-extrabold text-white">Star Applying</Link>
            </div>
        </div >
    );
};

export default Header;