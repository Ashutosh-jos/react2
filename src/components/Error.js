import React from "react";
import { useRouteError } from "react-router-dom"; // Corrected import

const Error = () => {
    const err = useRouteError();
    return (
        <>
            <h1>Opps</h1>
            <h5>Error: App not found</h5>
            <h5>{err.data}</h5>
            <h5>{err.status}: {err.statusText}</h5>
        </>
    );
}

export default Error;
