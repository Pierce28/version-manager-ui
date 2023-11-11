import { useRouteError } from "react-router-dom";
import Header from './Header'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Header />
            <div className="text-center">
                <h1>Shazbot!</h1>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}