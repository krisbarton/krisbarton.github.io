import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/itemsDisplay.scss';
import '../layouts/animations.scss';
import File from '../../assets/File.svg';
import { PageContext } from '../context/pageContext';

const ProcessDisplay = (props) => {

    const { pageHeading } = useContext(PageContext);

    document.title = `Blue Prism - ${pageHeading} (${props.pages.count})`;

    return (
        <div>
            <div className="layout itemsDisplay">
                <ul class="layout">
                    {
                        props.pages.pages.map((page) =>
                            <li className="fadeInLeft" key={page.id}>
                                <Link className="layout itemsDisplay__item"
                                    to={{ pathname: `/stages/${page.id}`, state: { pageName: page.name } }}>
                                    <span><img src={File} alt="File Icon" className="itemsDisplay__item__img" /></span>
                                    <span>{page.name}</span> <span className="itemsDisplay__item__count">{page.stagesCount}</span>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )

}

export default ProcessDisplay;