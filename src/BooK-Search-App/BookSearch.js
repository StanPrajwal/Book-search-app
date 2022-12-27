import Axios from "axios"
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./BookSearch.css"
function BookSearch(){
    const [books,getBooks] = useState()
    const [query,getQuery] = useState()
    const [hide,sethide] = useState("none")
    const navigate = useNavigate()
    const getBooksHandler = (e) =>{
        e.preventDefault()
        console.log(query)
        Axios.get(`https://www.googleapis.com/books/v1/volumes?q=%${query}`)
            .then((res)=>{
                console.log(res.data.items[0].volumeInfo)
                getBooks(res.data.items)
            })
            .catch((err)=>console.log(err.message))
        
    }
    const openBook = (book)=>{
      
        console.log("book open")
        navigate("/open",{state:{book}})
    }
  
    const mouseOver =()=>{
        console.log("mouse")
        sethide("block")
    }
    return <>
        <div className="search-bar">
            <h1>BOOK SEARCH</h1>
            <input 
                placeholder="Search for a book"
                onChange={(e)=>getQuery(e.target.value)}
            />
           <button
           onClick={(e)=>getBooksHandler(e)}
           >
            search</button>
        </div>
        <div className="book-container">
            {books && books.map((book,index)=>{
               return <div className="book" 
                        onMouseOverCapture={mouseOver}
                        key={index}
                        onClick={()=>openBook(book)}
                        style={{backgroundImage:`url(${book.volumeInfo.imageLinks.thumbnail})`}}
                    >   
                    <div className="more-dtails">
                        <p>{book.volumeInfo.title}</p>
                        <div  style={{display:hide}} className="hide-info">
                            <h1>{book.volumeInfo.authors[0]}</h1>
                            
                            <p>PAGE COUNT : <span>{book.volumeInfo.pageCount}</span></p>
                            <p>RATING : <span>{book.volumeInfo.averageRating}</span></p>
                        </div>
                        
                    </div>
            </div>
            })}
            
           
        </div>
    </>
}
export default BookSearch