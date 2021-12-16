// Modules:
import { useState, useRef , useEffect} from 'react'

export const useUpdatedList = (initialListInfo, filter) => {
    const [updatedList, setUpdatedList] = useState(initialListInfo)
    // Guardar listado en Local Storage si no existe ya, recuperarlo si existe
    useEffect(() => {
        !localStorage.getItem('imagesAppList') 
            ? localStorage.setItem('imagesAppList', JSON.stringify(initialListInfo))
            : setUpdatedList(JSON.parse(localStorage.getItem('imagesAppList')))
    }, [])


    // SCROLL INFINITO SIMULADO
    const [scrollList, setScrollList] = useState(updatedList)
    const [page, setPage] = useState(1)

    const addImages = async () => {
        // LOGICA PARA API FUNCIONANDO:
        // const moreImages = await getImages(filter, page + 1)        
        // setPage(prev => prev + 1)
        // setImagesList(prev => [...prev, ...moreImages])
        //---------------------------------------------------
        // SIMULADO:
        setPage(prev => prev + 1)
        setScrollList(prev => prev.concat(updatedList))
        //---------------------------------------------------
    }
    // Referencia para sumar imágenes al llegar al final de la lista
    const loader = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver);
        loader.current && observer.observe(loader.current)
    }, []);
    const handleObserver = (entities) => {
        entities[0].isIntersecting && addImages()
    }


    // REPOSTS Y LIKES ------------------------------------------------
    let newList = []
    let newScroll = []
    // Actualizar estado al hacer 'like'
    const like = (info) => {
        let newItem = {...info}
        if(newItem.liked === false) {
            newItem.liked = true
            newItem.likes_count += 1
        } else {
            newItem.liked = false
            newItem.likes_count -= 1
        }    
        scrollList.map(i => {
            i.id !== info.id 
                ? newScroll.push(i)
                : newScroll.push(newItem)
        })
        updatedList.map(i => {
            i.id !== info.id 
                ? newList.push(i)
                : newList.push(newItem)
        })
        localStorage.setItem('imagesAppList', JSON.stringify(newList))  
        setUpdatedList(newList)
        setScrollList(newScroll)
    }
    // Actualizar estado al hacer 'repost'
    const repost = (info) => {
        let newItem = {...info}
        if(newItem.reposted === false) {
            newItem.reposted = true
            newItem.reposts_count += 1
        } else {
            newItem.reposted = false
            newItem.reposts_count -= 1
        } 
        scrollList.map(i => {
            i.id !== info.id 
                ? newScroll.push(i)
                : newScroll.push(newItem)
        })   
        updatedList.map(i => {
            i.id !== info.id 
                ? newList.push(i)
                : newList.push(newItem)
        })
        localStorage.setItem('imagesAppList', JSON.stringify(newList))  
        setUpdatedList(newList)   
        setScrollList(newScroll)
    }


    //--------------------------------------------------------------
    // FILTRO POR BÚSQUEDA (ya que la api to filtra en realidad):
    const scrollImages = filter && filter !== null 
        // Si existe una búsqueda tomamos la lista inicial para no dar resultados repetidos
        ? initialListInfo.filter(i => 
            i.title.toUpperCase().includes(filter.toUpperCase()) ||
            i.author.toUpperCase().includes(filter.toUpperCase())
        )
        // Si no existe una búsqueda dejamos que el scroll continúe
        : scrollList

    return [updatedList, like, repost, scrollImages, loader, addImages]
}
export default { useUpdatedList }