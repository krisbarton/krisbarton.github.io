import React from 'react';
import '../layouts/animations.scss';

const Loading = () => {
    document.title = `Blue Prism - Loading...`;

    return (
        <div class="layout layout--center">
            <div className="loading"></div>
        </div>
    )
}

export default Loading;