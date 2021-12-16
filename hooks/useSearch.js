  // Modules:
import { useState } from 'react'

export const useSearch = () => {
    const [searchText, setSearchText] = useState(null)
    const handleSearch = (event) => {
        const newText = event.target.value
        const updatedSearch = newText.length === 0 ? null : newText
        setSearchText(updatedSearch)
    }
    return [searchText, handleSearch]
}
export default { useSearch }