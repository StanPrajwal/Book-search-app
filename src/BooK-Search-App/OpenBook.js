import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./OpenBook.css"
function OpenBook(){
    const [open,setOpen] = useState()
    const {state} = useLocation()
    useEffect(()=>{
        
        setOpen(state.book)
        console.log(state)
    },[open])
   
    return <>
        
        {open && <div className="open-book">
            <h2>{open.volumeInfo.title}</h2>
            <div className="open-details">
                <section className="image">
                    <img src={open.volumeInfo.imageLinks.thumbnail} alt="open"/>
                </section>
                <section className="description">
                    <p>{open.volumeInfo.authors[0]}</p>
                    <p>
                        Scholastic,{open.volumeInfo.publishedDate},{open.volumeInfo.publisher}.pages {open.volumeInfo.pageCount}
                    </p>
                    <p>{Math.ceil(Math.random()*200)} Reviews</p>
                    <p>{open.volumeInfo.description}</p>
                </section>
            </div>
        </div>} 
        
    </>
}

export default OpenBook