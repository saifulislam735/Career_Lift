
import JobCatagory from '../JobCatagory/JobCatagory';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import { useLoaderData } from 'react-router-dom';
// import Footer from '../Footer/Footer';

const Home = () => {
    const catagory = useLoaderData();
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('jobs.json');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching the jobs:', error);
            }
        };

        fetchJobs();
    }, []);
    const handleShowAll = () => {
        setShowAll(true);
    };
    const handleCloseAll = () => {
        setShowAll(false);
    };

    return (
        <div>

            {/* Hero Section */}
            <section style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <div className='px-60'>
                    <Hero></Hero>
                </div>
            </section>

            {/* Job Catagory Section */}
            <section className='mt-24 mb-16 bg-white' >
                <div className='px-60'>
                    <div className='text-center '>
                        <h2 className='text-5xl font-extrabold mb-4'>Job Category List</h2>
                        <p style={{ color: "var(--Dark-04, #A3A3A3)" }}>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid grid-cols-4 mt-8 gap-7'>
                        {
                            catagory.map(ct => <JobCatagory key={ct.id} catagory={ct}></JobCatagory>)
                        }
                    </div>
                </div>
            </section>

            {/* {Featured Jobs} */}
            <section>
                <div className='px-60'>
                    <div className='text-center '>
                        <h2 className='text-5xl font-extrabold mb-4 mt-32'>Featured Jobs</h2>
                        <p style={{ color: "var(--Dark-04, #A3A3A3)" }}>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>

                    <div className='grid grid-cols-2 mt-8 gap-6'>
                        {(showAll ? jobs : jobs.slice(0, 4)).map((item, index) =>
                            <FeatureJobs key={index} job={item} ></FeatureJobs>
                        )}

                    </div>

                    <div className='text-center py-16'>
                        {!showAll ? (
                            <button className='px-5 py-4  text-white font-extrabold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ' style={{ borderRadius: '4px', background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }} onClick={handleShowAll}>See All Jobs</button>
                        ) : (
                            <button className='px-5 py-4  text-white font-extrabold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50' style={{ borderRadius: '4px', background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }} onClick={handleCloseAll}>Close All Jobs</button>
                        )}
                    </div>

                </div>
            </section>



        </div>
    );
};

export default Home;