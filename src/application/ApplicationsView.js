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

    // Sample data - TODO - remove this once its moved to the backend
    /*
    return {
        organization: "Fighting Mongooses",
        applications: [
            {
                name: "Funny Non-Descriptive App Name",
                owner: "Fighting Mongooses",
                repo: "https://github.com/Pierce28/version-manager-ui/",
                environments: [
                    {
                        name: "Development",
                        version: "42.00",
                        gitCommitHash: "839d704",
                        logs: "http://localhost:3000/logs/dev",
                        jenkins: "http://localhost:3000/jenkins/dev"
                    },
                    {
                        name: "Integration",
                        version: "43.00",
                        gitCommitHash: "71a2b45",
                        logs: "http://localhost:3000/logs/int",
                        jenkins: "http://localhost:3000/jenkins/int"
                    },
                    {
                        name: "Staging",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/stage",
                        jenkins: "http://localhost:3000/jenkins/stage"
                    },
                    {
                        name: "Production",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/prod",
                        jenkins: "http://localhost:3000/jenkins/prod"
                    },
                ],
            },
            {
                name: "Boring But Descriptive App Name",
                owner: "Some Team That For Some Reason Is In This Organization",
                repo: "https://github.com/Pierce28/version-manager-ui/",
                environments: [
                    {
                        name: "Development",
                        version: "42.00",
                        gitCommitHash: "839d704",
                        logs: "http://localhost:3000/logs/dev",
                        jenkins: "http://localhost:3000/jenkins/dev"
                    },
                    {
                        name: "Integration",
                        version: "43.00",
                        gitCommitHash: "71a2b45",
                        logs: "http://localhost:3000/logs/int",
                        jenkins: "http://localhost:3000/jenkins/int"
                    },
                    {
                        name: "Staging",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/stage",
                        jenkins: "http://localhost:3000/jenkins/stage"
                    },
                    {
                        name: "Production",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/prod",
                        jenkins: "http://localhost:3000/jenkins/prod"
                    },
                ],
            },
            {
                name: "Auth Service",
                owner: "Fighting Mongooses",
                repo: "https://github.com/Pierce28/version-manager-ui/",
                environments: [
                    {
                        name: "Development",
                        version: "42.00",
                        gitCommitHash: "839d704",
                        logs: "http://localhost:3000/logs/dev",
                        jenkins: "http://localhost:3000/jenkins/dev"
                    },
                    {
                        name: "Integration",
                        version: "43.00",
                        gitCommitHash: "71a2b45",
                        logs: "http://localhost:3000/logs/int",
                        jenkins: "http://localhost:3000/jenkins/int"
                    },
                    {
                        name: "Staging",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/stage",
                        jenkins: "http://localhost:3000/jenkins/stage"
                    },
                    {
                        name: "Production",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/prod",
                        jenkins: "http://localhost:3000/jenkins/prod"
                    },
                ],
            },
            {
                name: "Entitlement Service",
                owner: "Fighting Mongooses",
                repo: "https://github.com/Pierce28/version-manager-ui/",
                environments: [
                    {
                        name: "Development",
                        version: "42.00",
                        gitCommitHash: "839d704",
                        logs: "http://localhost:3000/logs/dev",
                        jenkins: "http://localhost:3000/jenkins/dev"
                    },
                    {
                        name: "Integration",
                        version: "43.00",
                        gitCommitHash: "71a2b45",
                        logs: "http://localhost:3000/logs/int",
                        jenkins: "http://localhost:3000/jenkins/int"
                    },
                    {
                        name: "Staging",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/stage",
                        jenkins: "http://localhost:3000/jenkins/stage"
                    },
                    {
                        name: "Production",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/prod",
                        jenkins: "http://localhost:3000/jenkins/prod"
                    },
                ],
            },
            {
                name: "Round Down Penny Service",
                owner: "Fighting Mongooses",
                repo: "https://github.com/Pierce28/version-manager-ui/",
                environments: [
                    {
                        name: "Development",
                        version: "42.00",
                        gitCommitHash: "839d704",
                        logs: "http://localhost:3000/logs/dev",
                        jenkins: "http://localhost:3000/jenkins/dev"
                    },
                    {
                        name: "Integration",
                        version: "43.00",
                        gitCommitHash: "71a2b45",
                        logs: "http://localhost:3000/logs/int",
                        jenkins: "http://localhost:3000/jenkins/int"
                    },
                    {
                        name: "Staging",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/stage",
                        jenkins: "http://localhost:3000/jenkins/stage"
                    },
                    {
                        name: "Production",
                        version: "44.00",
                        gitCommitHash: "2d1fddb",
                        logs: "http://localhost:3000/logs/prod",
                        jenkins: "http://localhost:3000/jenkins/prod"
                    },
                ],
            },
        ]
    }
    */
};