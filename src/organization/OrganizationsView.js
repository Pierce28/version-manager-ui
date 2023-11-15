import LoadingView from "../common/LoadingView";
import Organization from "./Organization";
import { useLoaderData, useNavigation } from "react-router-dom";
import axios from "axios";

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
    return await axios.get("/api/orgs").then(response => {
        return response.data;
    })
    .catch(err => {
        throw err;
    });
};