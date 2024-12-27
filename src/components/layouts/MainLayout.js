import React from 'react'


const MainLayout = ({ children, pageProps }) => {

    return (
        <div className="app-main">
            <div className='main'>
                {children}
            </div>
        </div>
    )
}

export default MainLayout