// Modules:
import { useState } from 'react'
// Layout:
import PageContainer from '../layouts/PageContainer'
// Content components:
import ImageList from '../components/contentComponents/imageList'
// Services:
import { getImages } from '../services/getImages'

export default function Home({initialListInfo}) {

    // Search bar text
    const [searchText, setSearchText] = useState(null)
    const handleSearch = (event) => {
      const newText = event.target.value
      const updatedSearch = newText.length === 0 ? null : newText
      setSearchText(updatedSearch)
    }
  
  return (
    <PageContainer search={searchText} searchTask={handleSearch}>
      <ImageList 
        initialList={initialListInfo}
        getMoreImages={getImages}
        filter={searchText}
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