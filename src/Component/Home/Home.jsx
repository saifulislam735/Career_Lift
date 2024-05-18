
import JobCatagory from '../JobCatagory/JobCatagory';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

const Home = ({ catagory }) => {
    const [jobs, setJobs] = useState([]);
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
    console.log(jobs)
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
                        {
                            jobs.map(jb => <FeatureJobs key={jb.id} job={jb}></FeatureJobs>)
                        }
                    </div>
                    <div className='text-center mt-10 mb-32'>
                        <button className='px-7 py-5 text-xl text-white font-extrabold ' style={{ borderRadius: '4px', background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>See All Jobs</button>
                    </div>
                </div>
            </section>

            {/* {footer section} */}
            <section style={{ background: "var(--Dark-01, #1A1919)" }}>
                <div className="px-60">
                    <Footer></Footer>
                </div>
            </section>

        </div>
    );
};

export default Home;