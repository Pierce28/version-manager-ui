import Application from "./Application";

function ApplicationsView() {

    // This is where I'd call the backend... IF I HAD ONE!
    // (I should have multiple of these and then loop over the results... but this is a big object)
    const applicationDetails = {
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
    };

    return (
        <div className="container-fluid">
            <div className="row g-3">
                <Application name={applicationDetails.name} owner={applicationDetails.owner} repo={applicationDetails.repo} environments={applicationDetails.environments}/>
                <Application name={applicationDetails.name} owner={applicationDetails.owner} repo={applicationDetails.repo} environments={applicationDetails.environments}/>
                <Application name={applicationDetails.name} owner={applicationDetails.owner} repo={applicationDetails.repo} environments={applicationDetails.environments}/>
                <Application name={applicationDetails.name} owner={applicationDetails.owner} repo={applicationDetails.repo} environments={applicationDetails.environments}/>
                <Application name={applicationDetails.name} owner={applicationDetails.owner} repo={applicationDetails.repo} environments={applicationDetails.environments}/>
                <Application name={applicationDetails.name} owner={applicationDetails.owner} repo={applicationDetails.repo} environments={applicationDetails.environments}/>
                <Application name={applicationDetails.name} owner={applicationDetails.owner} repo={applicationDetails.repo} environments={applicationDetails.environments}/>
            </div>
        </div>
    )
}

export default ApplicationsView;