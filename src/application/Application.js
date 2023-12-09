function Application(props) {
    const environmentData = props.environments.map((environment) =>
        <li key={environment.name} className="list-group-item">
            <p className="fs-5">{environment.name}</p>
            <div className="hstack gap-3">
                <EnvironmentValue attribute="Version" value={environment.version} />
                <EnvironmentValue attribute="Commit Hash" value={environment.gitCommitHash} />
                <EnvironmentButtons logs={environment.logs} jenkins={environment.jenkins} />
            </div>
        </li>
    );

    return (
        <div className="col">
            <div className="card h-100 shadow" style={{ width: "35rem" }}>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text"><strong>Owner:</strong> {props.owner}</p>
                    <p className="card-text">
                        <a className="btn btn-outline-primary" role="button" href={props.repo} target="_blank">Open Repo</a>
                    </p>
                    <ul className="list-group">
                        {environmentData}
                    </ul>
                </div>
            </div>
        </div>
    )
};

function EnvironmentValue(props) {
    return (
        <div className="hstack gap-3">
            <span className="fw-bold">{props.attribute}:</span>
            <span className="font-monospace user-select-all">{props.value}</span>
        </div>
    );
};

function EnvironmentButtons(props) {
    return (
        <div className="btn-group ms-auto" role="group">
            <a className="btn btn-outline-primary" role="button" href={props.logs} target="_blank">Logs</a>
            <a className="btn btn-outline-primary" role="button" href={props.jenkins} target="_blank">Jenkins</a>
        </div>
    );
};

export default Application;