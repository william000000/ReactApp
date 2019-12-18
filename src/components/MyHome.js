import React from "react";

const MyHome = () => (
    <div className="container">
        <h1>Country Info</h1>
        <div className="inputField">
            <input
                type="text"
                name=""
                id=""
                placeholder="Search by city name"
            />
            <button>Search</button>
        </div>
        <h2>City Details</h2>
        <div className="outputField">
            <ul>
                <li>Bounders:</li>
                <li>Timezone:</li>
                <li>Area:</li>
                <li>Population:</li>
                <li>Calling code:</li>
                <li>Demonym:</li>
                <li>Region:</li>
            </ul>
        </div>
    </div>
);

export default MyHome;
