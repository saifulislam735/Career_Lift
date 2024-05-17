import userImage from '../../assets/images/user.png'
const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-7'>
            <div className='col-span-1'>
                <h2 style={{ lineHeight: "100px" }} className='text-7xl font-extrabold'>One Step Closer To Your <span style={{ background: "var(--Linear, linear-gradient(90deg, #7E90FE 0%, #9873FF 100%))", backgroundClip: "text", webkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dream Job</span></h2>

                <p className='pt-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <div className='my-8 flex  justify-center' style={{ width: '160px', height: '60px', borderRadius: "8px", background: "var(--Linear, linear-gradient(90deg, #7E90FE 0%, #9873FF 100%))" }}>
                    <button className=' text-xl font-extrabold text-white ' >Get Started</button>
                </div>


            </div>
            <div className='col-span-1'>
                <img src={userImage} alt="" />
            </div>
        </div >
    );
};

export default Home;