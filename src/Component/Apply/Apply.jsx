import backgroundImg from '../../assets/images/bg1.png'
import { getShoppingCart } from '../../fakedb';
import AppliedJob from '../AppliedJobs/AppliedJob';
import './Apply.css'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';

const Apply = () => {

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

    const [appliedJob, setAppliedJob] = useState([]);
    const [showAppliedJob, setShowAppliedJob] = useState([]);

    useEffect(() => {
        const appliedJobId = getShoppingCart();
        const appliedJobs = [];

        for (const id in appliedJobId) {
            const Id = parseInt(id);
            const applied = jobs.find(d => d.id === Id);
            if (applied) {
                appliedJobs.push(applied);
            }
        }

        setAppliedJob(appliedJobs);
        setShowAppliedJob(appliedJobs);
    }, [jobs]);

    const handleOnsiteJob = () => {
        const fliteredJob = appliedJob.filter(jb => jb.remote_or_onsite === "Onsite")
        setShowAppliedJob(fliteredJob)
    }
    const handleRemoteJob = () => {
        const fliteredJob = appliedJob.filter(jb => jb.remote_or_onsite === "Remote")
        setShowAppliedJob(fliteredJob)
    }


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
                    <div className="dropdown-content text-center">
                        <p onClick={() => handleRemoteJob()} className='hover:bg-slate-300 p-2 rounded'>Remote</p>
                        <p onClick={() => handleOnsiteJob()} className='hover:bg-slate-300 p-2 rounded'>Onsite</p>
                    </div>
                </div>
                <div className='mt-4'>
                    {
                        showAppliedJob.map((d, id) => <AppliedJob key={id} appliedJobs={d}
                        ></AppliedJob>)
                    }
                </div>
            </div>
            {/* Info section */}
        </div>
    );
};

export default Apply;