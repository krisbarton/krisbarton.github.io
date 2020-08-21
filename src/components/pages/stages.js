import React, { useState, useEffect, useContext } from 'react';
import Loading from '../static/loading';
import Pages from './pages';
import { PageContext } from '../context/pageContext';

const Stages = (props) => {

    const [stages, setStages] = useState([]);
    const [stagesProcessed, setStagesProcessed] = useState(false);
    const [error, setError] = useState(null);

    const { pageName } = props.location.state;

    const { setPageHeading } = useContext(PageContext);
    setPageHeading(pageName);

    useEffect(() => {
        let id = props.match.params.id;
        fetch(`https://5f3568a75b91f60016ca4cf7.mockapi.io/api/v1/stages?pageId=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("stages data: ", data);
                setStages(data);
                setStagesProcessed(true);
            })
            .catch(err => {
                setError(err);
            })
    }, []);

    return (
        <div>
            {stagesProcessed ? <Pages stages={stages} /> : <Loading />}
        </div>
    )

}

export default Stages;