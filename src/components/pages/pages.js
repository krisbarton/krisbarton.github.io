import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Empty from '../static/empty';
import '../layouts/itemsDisplay.scss';
import Cogs from '../../assets/cogs.svg';
import { PageContext } from '../context/pageContext';

const Pages = (props) => {

    const { pageHeading } = useContext(PageContext);

    const stageTemplate = (stages) => {
        return stages.map((stage) =>
            <li className="layout itemsDisplay__item fadeInLeft" key={stage.id}>
                <span><img src={Cogs} alt="Stage Setting Icon - three machinery cogs" className="itemsDisplay__item__img" /></span>
                <span>{stage.name}</span> <span className="itemsDisplay__item__count">{stage.linksCount}</span>
            </li>
        )
    }

    const stagesCount = props.stages.stages.length;
    document.title = `Blue Prism - ${pageHeading} (${stagesCount})`;

    return (
        <div>
            <Link to="/">Back to Process</Link>
            <div className="layout itemsDisplay">
                <ul>
                    {
                        stagesCount > 0 ? stageTemplate(props.stages.stages) : <Empty />
                    }

                </ul>
            </div>
        </div>
    )
}

export default Pages;