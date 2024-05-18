
const JobCatagory = ({ catagory }) => {
    return (
        <div style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }} className="col-span-1 py-9 pl-9 rounded-md ">
            <img style={{ width: '70px', height: '70px', borderRadius: "8px", marginBottom: "30px" }} src={catagory.logo} alt="" />
            <div style={{ color: 'var(--Dark-02, #474747)' }} className="text-xl font-bold mb-2">{catagory.category_name}</div>
            <div style={{ color: 'var(--Dark-04, #A3A3A3)' }}>{catagory.availability}</div>
        </div>
    );
};

export default JobCatagory;