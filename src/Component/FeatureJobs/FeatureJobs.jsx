import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const FeatureJobs = ({ job }) => {

    return (
        <div style={{ borderRadius: "8px", border: "1px solid var(--Dark-06, #E8E8E8)" }} className="py-10 px-10" key={job.id} >
            <img className="w-28 h-10 mb-2" src={job.logo} alt={`${job.company_name} logo`} />
            <h3 style={{ color: "var(--Dark-02, #474747)" }} className="text-2xl font-extrabold mb-2">{job.job_title}</h3>
            <p style={{ color: "var(--Dark-03, #757575)" }} className=" mb-3">{job.company_name}</p>
            <div className="flex gap-4 mb-2">
                <p style={{ borderRadius: "4px", border: "1px solid var(--Linear, #7E90FE)" }} className="px-4 py-2">{job.remote_or_onsite}</p>
                <p style={{ borderRadius: "4px", border: "1px solid var(--Linear, #7E90FE)" }} className="px-4 py-2">{job.job_type}</p>
            </div>
            <p style={{ color: "var(--Dark-03, #757575)" }} className='flex gap-4 mb-3'>
                <div className='flex gap-1 '>
                    <MapPinIcon className="size-6 text-gray-500" />
                    {job.location}
                </div>
                <div className='flex gap-1'>
                    <CurrencyDollarIcon className="size-6 text-gray-500" />
                    <p>Salary: {job.salary}</p>
                </div>
            </p>
            <button className='px-4 py-3  text-white font-extrabold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50' style={{ borderRadius: '4px', background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>View Details</button>
        </div >
    );
};

export default FeatureJobs;
