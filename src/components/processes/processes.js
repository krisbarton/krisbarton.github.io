import React, { useEffect, useState, useContext } from 'react';
import ProcessDisplay from './processDisplay';
import Loading from '../static/loading';
import { PageContext } from '../context/pageContext';

const Processes = () => {

    const [processError, setProcessError] = useState(null);
    const [processLoaded, setProcessLoaded] = useState(false);
    const [pages, setPages] = useState([]);

    const { setPageHeading } = useContext(PageContext);
    setPageHeading("Process Name");

    /* The empty depts array [] means this will run 
        once, like componentDidMount() see official
        docs: https://reactjs.org/docs/faq-ajax.html
    */
    useEffect(() => {
        fetch("https://5f3568a75b91f60016ca4cf7.mockapi.io/api/v1/pages")
            .then(res => res.json())
            .then(
                data => {
                    setPages(data);
                    setProcessLoaded(true);
                })
            .catch(err => {
                setProcessLoaded(false);
                setProcessError(err)
            });
    }, []);

    document.title = `Blue Prism - Processes`;

    return (
        <div>
            {processLoaded ? <ProcessDisplay pages={pages} /> : <Loading />}
        </div>
    )
}

export default Processes;