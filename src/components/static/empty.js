import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () => {

    document.title = `Blue Prism - Sorry, no stages found`;

    return (
        <div className="layout layout--center empty">
            <h2 className="empty__heading">Sorry!</h2>
            <p>There are no stages for this page.</p>
            <Link to="/" className="cta">Back to Pages</Link>
        </div>
    )
}

export default Empty;