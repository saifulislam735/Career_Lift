import backgroundImg from '../../assets/images/bg1.png'
import { getShoppingCart } from '../../fakedb';
import AppliedJob from '../AppliedJobs/AppliedJob';
import './Apply.css'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import { useLayoutEffect, useState } from 'react';

const Apply = () => {

    const [jobs, setJobs] = useState([]);
    useLayoutEffect(() => {
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

    const appliedJobId = getShoppingCart()
    // console.log(appliedJobId)

    const appliedJob = [];
    // console.log(jobs)

    {
        for (const id in appliedJobId) {
            const Id = parseInt(id)
            const applied = jobs.find(d => d.id === Id)
            // console.log(applied)
            appliedJob.push(applied);
        }
    }
    // console.log(appliedJob)

    return (
        <div>
            {/* upper section */}
            <div className="flex py-20  items-center  justify-center relative " style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <img style={{ height: "150px" }} className=" absolute   left-0" src={backgroundImg} alt="" />
                <h2 className="text-3xl font-extrabold text-center ">Applied Jobs</h2>
            </div>
            <div className='flex flex-col px-60 py-10'>
                <div className="dropdown ms-auto">
                    <button className="dropdown-button flex gap-2">
                        <span>Filter By</span>
                        <AdjustmentsHorizontalIcon className="size-6 text-gray-500" />
                    </button>
                    <div className="dropdown-content">
                        <p>Remote</p>
                        <p>Onsite</p>
                    </div>
                </div>
                <div className='mt-4'>
                    {
                        appliedJob.map((d, id) => <AppliedJob key={id} appliedJobs={d}></AppliedJob>)
                    }
                </div>
            </div>
            {/* Info section */}
        </div>
    );
};

export default Apply;