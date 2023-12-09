import { useLoaderData, useNavigation } from "react-router-dom";
import Application from "./Application";
import LoadingView from "../common/LoadingView";
import axios from "axios";

function ApplicationsView() {

    const applicationsData = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <LoadingView />
    }

    const applications = applicationsData.applications.map((application) =>
        <Application name={application.name} owner={application.owner} repo={application.repo} environments={application.environments} key={application.name} />
    );

    return (
        <div className="container-fluid">
            <div className="fs-1 text-center mb-3">
                {applicationsData.organization}
            </div>
            <div className="row g-3">
                {applications}
            </div>
        </div>
    )
};

export default ApplicationsView;

export const applicationsLoader = async ({params}) => {
    return await axios.get(`/api/org/${params.organizationId}`).then(response => {
        return response.data;
    })
    .catch(err => {
        throw err;
    });
};