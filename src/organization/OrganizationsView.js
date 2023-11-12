import LoadingView from "../common/LoadingView";
import Organization from "./Organization";
import { useLoaderData, useNavigation } from "react-router-dom";

function OrganizationsView() {

    const organizationsData = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <LoadingView />;
    }

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
};

export default OrganizationsView;

export const organizationsLoader = async () => {
    // This is where we'll call the backend eventually... but let's fake it for now
    return [
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
};