import Organization from "./Organization";

function OrganizationsView() {

    return (
        <div className="container-fluid">
            <div className="row row-cols-3 g-5">
                <Organization name="Cool Team 1" description="Some team made up of some cool folks and this is a lot of text to see how the sizing works" />
                <Organization name="Cool Team 2" description="Some team made up some kind of neat folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
                <Organization name="Cool Team 3" description="Some team made up some folks" />
            </div>
        </div>
    );
}

export default OrganizationsView;