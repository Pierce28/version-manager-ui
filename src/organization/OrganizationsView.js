import Organization from "./Organization";

function OrganizationsView() {

    // This is where I'd call the backend... IF I HAD ONE!
    const organizationsData = [
        {
            name: "Fighting Mongooses"
        },
        {
            name: "Wolfpack"
        },
        {
            name: "Panthers"
        },
        {
            name: "Red"
        },
        {
            name: "Blue"
        },
        {
            name: "Team Awesome"
        },
        {
            name: "Escalations and Bug Triage"
        },
    ];

    const organizations = organizationsData.map((organization) =>
        <Organization name={organization.name} key={organization.name} />
    );

    return (
        <div className="container-fluid">
            <div className="row g-3">
                {organizations}
            </div>
        </div>
    );
}

export default OrganizationsView;