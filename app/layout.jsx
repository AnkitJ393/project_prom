import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata={
    title:'Prom',
    description:"Discover and Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <link rel="icon" href='/logo.ico' sizes="any" />
        </head>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient">

                    </div>
                </div>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout