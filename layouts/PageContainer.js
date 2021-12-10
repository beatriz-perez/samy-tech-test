// Modules:
import Head from 'next/head';
// Components:
import Header from '../components/containerComponents/header';
import Main from '../components/containerComponents/main'
import Footer from '../components/containerComponents/footer';

export default function PageContainer({children}) {

    return (
        <div className="app">
            <Head>
                <link rel="icon" href="favicon.svg" />
                <meta name="description" content="a pretty images scrolling app" />
                <title>BP tech test</title>
            </Head>

            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </div>
    )
}