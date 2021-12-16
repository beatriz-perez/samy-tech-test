// Layout:
import PageContainer from '../../layouts/PageContainer'
// Services:
import { getAuthors } from '../../services/getAuthors'
// Content components:
import AuthorProfile from '../../components/contentComponents/authorProfile'

export default function AuthorPage({authorInfo}) {  
  return (
    <PageContainer>
        <AuthorProfile info={authorInfo} />
    </PageContainer>
  )
}

export async function getServerSideProps({params}) {
    const allAuthorsInfo = await getAuthors()
    const authorInfo = allAuthorsInfo.find(i => i.urlParam === params.author)
    return {
      props: {authorInfo}
    }
}