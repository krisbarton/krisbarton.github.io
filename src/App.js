import React from 'react';
import PageContextProvider from './components/context/pageContext';
import Header from './components/header/header';
import Routes from './components/routes/routes';
import './build.scss';

const App = () => {

    return (
        <div>
            <PageContextProvider>
                <Header />
                <div>
                    <Routes />
                </div>
            </PageContextProvider>
        </div>
    )
}

export default App;