import * as React from "react";
import { Link } from "react-router-dom";

export const secondPage = () => (
    <div>
        <h2>Hello user</h2>
        <br />
        <Link to="/">logout</Link>
    </div>
);