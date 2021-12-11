// Layout:
import PageContainer from '../layouts/PageContainer'
// Content components:
import ImageList from '../components/contentComponents/imageList'
// Services:
import { getImages } from '../services/getImages'


export default function Home({imagesListInfo}) {
  return (
    <PageContainer>
      <ImageList info={imagesListInfo} />
    </PageContainer>
  )
}

export async function getServerSideProps() {
  const imagesListInfo = await getImages()
  return {
    props: {imagesListInfo}
  }
}