import { useLoaderData, useParams } from "react-router-dom";
import backgroundImg from '../../assets/images/bg1.png'
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'


const JobDetails = () => {
    const { jobId } = useParams();
    const ID = parseInt(jobId)
    const data = useLoaderData()
    const [jobinformation] = data.filter(jb => jb.id === ID)
    console.log(jobinformation, 'details')
    return (
        <div>
            {/* upper section */}
            <div className="flex py-20  items-center  justify-center relative " style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <img style={{ height: "150px" }} className=" absolute   left-0" src={backgroundImg} alt="" />
                <h2 className="text-3xl font-extrabold text-center ">Job Details</h2>
            </div>
            {/* Info section */}

            <div className="px-60 grid grid-cols-3 text-justify gap-6 my-10">
                {/* Basic info */}
                <div className=" col-span-2 flex flex-col gap-5">
                    <p><span className="font-extrabold">Job Description:</span>{jobinformation.job_description}</p>
                    <p><span className="font-extrabold">Job Responsibility:</span>{jobinformation.job_responsibility}</p>
                    <div>
                        <p className="font-extrabold">Educational Requirements:</p>
                        {jobinformation.educational_requirements}
                    </div>
                    <div><p className="font-extrabold">Job Experiences:</p>{jobinformation.experiences}</div>
                </div>

                {/* numerical Info */}
                <div className="col-span-1 px-4 flex flex-col gap-6">
                    <div className="p-6 flex flex-col gap-6" style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)", borderRadius: '8px' }}>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-extrabold">Job Details</h2>
                            <hr className="border-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-10" />

                            <div className='flex gap-1'>
                                <CurrencyDollarIcon className="size-6 text-gray-500" />
                                <p>Salary: {jobinformation.salary}</p>
                            </div>
                            <div className='flex gap-1'>
                                <BriefcaseIcon className="size-6 text-gray-500" />
                                <p>Job Title: {jobinformation.job_title}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-extrabold">Contact Information</h2>
                            <hr className="border-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-10" />
                            <div className='flex gap-1'>
                                <PhoneIcon className="size-6 text-gray-500" />
                                <p>Phone: {jobinformation.salary}</p>
                            </div>
                            <div className='flex gap-1'>
                                <EnvelopeIcon className="size-6 text-gray-500" />
                                <p>Email: {jobinformation.job_title}</p>
                            </div>
                            <div className='flex gap-1'>
                                <MapPinIcon className="size-6 text-gray-500" />
                                <p>Address: {jobinformation.job_title}</p>
                            </div>
                        </div>
                    </div>

                    <button className='px-4 py-3   text-white font-extrabold transition duration-300 ease-in-out transform hover:scale-110 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50' style={{ borderRadius: '4px', background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;
