import FeatureJobs from "../FeatureJobs/FeatureJobs";

const AppliedJob = ({ appliedJobs }) => {


    if (!appliedJobs) {
        return null; // or return some fallback UI
    }

    return (
        <div className="">
            <FeatureJobs key={appliedJobs.id} job={appliedJobs} appliedStyle={true}></FeatureJobs>
        </div>
    );
};

export default AppliedJob;