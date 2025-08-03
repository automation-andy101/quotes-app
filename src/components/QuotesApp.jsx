import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_QUOTE_API_BASE_URL;

const QuotesApp = () => {
  const [quote, setQuote] = useState({
    text: "Ask not what your country can do for you, but what you can do for your country",
    author: "John F Kenedy"
  })

  const [favourites, setFavourites] = useState([])

  const [showFavourites, setShowFavourites] = useState(false)

  const fetchNewQuote = async () => {
    const response = await fetch(`${baseUrl}/random`)
    const data = await response.json()
    setQuote({
      text: data.content,
      author: data.author
    })
  }

  const toggleFavourites = () => {
    setShowFavourites(!showFavourites)
  }

  const addToFavourite = () => {
    const isAlreadyInFavourites = favourites.some((fav) => fav.text === quote.text && fav.author === quote.author)

    if (!isAlreadyInFavourites) {
      setFavourites([...favourites, quote])
    }
  }

  return (
    <div className='container'>
      <div className="quotes-app">
        <h1 className="app-heading">Quotes.</h1>
        <i className="bx bxs-heart fav-icon" onClick={toggleFavourites}></i>
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
          <button className="btn btn-fav" onClick={addToFavourite}>Add to Favourites</button>
        </div>
        {showFavourites && (
          <div className="favourites">
            <button className="btn-close" onClick={toggleFavourites}>
              <i className="bx bx-x"></i>
            </button>
            {favourites.map((favQuote, index) => (
              <div className="fav-quote" key={index}>
                <div className="fav-quote-delete" onClick={() => {
                  const updatedFavourites = favourites.filter((item, i) => i !== index)
                  setFavourites(updatedFavourites)
                }}>
                  <i className="bx bx-x-circle"></i>
                </div>
                <div className="fav-quote-content">
                  <div className="fav-quote-text">{favQuote.text}</div>
                  <div className="fav-quote-author">{favQuote.author}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuotesApp