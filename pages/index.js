// Modules:
import { useUpdatedList } from '../hooks/useUpdatedList'
import { useSearch } from '../hooks/useSearch'
import { useDialog } from '../hooks/useDialog'
// Services:
import { getImages } from '../services/getImages'
// Layout:
import PageContainer from '../layouts/PageContainer'
// Content components:
import ImageList from '../components/contentComponents/imageList'

export default function Home({initialListInfo}) {
  const [searchText, handleSearch] = useSearch()
  const [updatedList, like, repost, scrollImages, loader, addImages] = useUpdatedList(initialListInfo, searchText)
  const [dialogMessage, handleDialog] = useDialog()//------------

  return (
    <PageContainer 
      search={searchText} 
      searchTask={handleSearch} 
      dialogMessage={dialogMessage}
    >
      <ImageList 
        initialList={updatedList} 
        filter={searchText} 
        like={like}
        repost={repost}
        scrollImages={scrollImages}
        loader={loader}
        addImages={addImages}
        showDialog={handleDialog}
      />
    </PageContainer>
  )
}

export async function getServerSideProps() {
  const initialListInfo = await getImages(null, 1)
  return {
    props: {initialListInfo}
  }
}