// Layout:
import PageContainer from '../../layouts/PageContainer'
// Services:
import { getImages } from '../../services/getImages'
// Content components:
import ImageFile from '../../components/contentComponents/imageFile'

export default function ImagePage({imageInfo}) {  
  return (
    <PageContainer>
        <ImageFile info={imageInfo} />
    </PageContainer>
  )
}

export async function getServerSideProps({params}) {
    const allImagesInfo = await getImages()
    const imageInfo = allImagesInfo.find(i => i.id + '' === params.image)
    return {
      props: {imageInfo}
    }
}