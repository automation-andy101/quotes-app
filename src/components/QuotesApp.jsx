import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_QUOTE_API_BASE_URL;

const QuotesApp = () => {
  const [quote, setQuote] = useState({
    text: "Ask not what your country can do for you, but what you can do for your country",
    author: "John F Kenedy"
})

const fetchNewQuote = async () => {
  const response = await fetch(`${baseUrl}/random`)
  const data = await response.json()
  setQuote({
    text: data.content,
    author: data.author
  })
}

  return (
    <div className='container'>
      <div className="quotes-app">
        <h1 className="app-heading">Quotes.</h1>
        <i className="bx bxs-heart fav-icon"></i>
        <div className="quote">
          <i className="bx bxs-quote-left left-quote"></i>
          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">{quote.author}</p>
          <i className="bx bxs-quote-right right-quote"></i>
        </div>
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
        <div className="buttons">
          <button className="btn btn-new" onClick={fetchNewQuote}>New Quote</button>
          <button className="btn btn-fav">Add to Favourites</button>
        </div>
      </div>
    </div>
  )
}

export default QuotesApp