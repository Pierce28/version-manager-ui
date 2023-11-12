function Application(props) {
    const environmentData = props.environments.map((environment) =>
        <li key={environment.name} className="list-group-item">
            <p className="fs-5">{environment.name}</p>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Version</span>
                    <span>{environment.version}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Commit Hash</span>
                    <span>{environment.gitCommitHash}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a className="btn btn-primary" role="button" href="#" target="_blank">Logs</a>
                    <a className="btn btn-primary" role="button" href="#" target="_blank">Jenkins</a>
                </li>
            </ul>
        </li>
    );

    return (
        <div className="col">
            <div className="card h-100 shadow" style={{ width: "24rem" }}>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text">Owner: {props.owner}</p>
                    <p className="card-text">
                        <a className="btn btn-primary" role="button" href={props.repo} target="_blank">Open Repo</a>
                    </p>
                    <ul className="list-group">
                        {environmentData}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Application;