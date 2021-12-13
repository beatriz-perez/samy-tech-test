// Modules:
import Head from 'next/head';
// Components:
import Header from '../components/containerComponents/header';
import Main from '../components/containerComponents/main'
import Footer from '../components/containerComponents/footer';

export default function PageContainer({children, search, searchTask}) {

    return (
        <div className="app">
            <Head>
                <link rel="icon" href="favicon.svg" />
                <meta name="description" content="a pretty images scrolling app" />
                <title>BP tech test</title>
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>

            <Header search={search} searchTask={searchTask}/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </div>
    )
}