import { Link } from "react-router-dom";

function Organization(props) {
    return (
        <div className="col">
            <div className="card h-100 shadow" style={{width: "24rem"}}>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <Link to={`organization/1/applications`} className="btn btn-primary">Go to Applications</Link>
                </div>
            </div>
        </div>
    )
}

export default Organization;