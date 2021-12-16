// Modules:
import Head from 'next/head';
// Components:
import Header from '../components/layoutComponents/header';
import Main from '../components/layoutComponents/main'
import Footer from '../components/layoutComponents/footer';

export default function PageContainer({children, search, searchTask, dialogMessage}) {

    return (
        <div className="app">
            <Head>
                <link rel="icon" href="favicon.svg" />
                <meta name="description" content="a pretty images scrolling app" />
                <title>BP tech test</title>
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>

            <Header search={search} searchTask={searchTask}/>
            <Main dialogMessage={dialogMessage}>
                {children}
            </Main>
            <Footer/>
        </div>
    )
}