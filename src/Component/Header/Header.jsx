import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
    return (
        <div className="grid grid-cols-3 px-60 py-10">
            <h2 className="text-3xl font-extrabold col-span-1">CarrerLift</h2>
            <div className="col-span-1 flex gap-10">
                <ActiveLink to={'/statistics'}>Statistics</ActiveLink>
                <ActiveLink to={'/appliedjobs'}>Applied Jobs</ActiveLink>
                <ActiveLink to={'/blog'}>Blog</ActiveLink>
            </div>
            <button className="col-span-1 text-xl">Star Applying</button>
        </div>
    );
};

export default Header;