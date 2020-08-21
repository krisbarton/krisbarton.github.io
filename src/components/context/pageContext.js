import React, { createContext, useState } from 'react';

export const PageContext = createContext();

const PageContextProvider = (props) => {

    const [pageHeading, setPageHeading] = useState("Process Name");

    return (
        <PageContext.Provider value={{ pageHeading, setPageHeading }}>
            {props.children}
        </PageContext.Provider>
    )

}

export default PageContextProvider;