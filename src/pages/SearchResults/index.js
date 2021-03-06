import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectToken } from '../../store/user/selectors'
import { selectSuggestions } from '../../store/suggestion/selectors'
import Loading from '../../components/Loading'
import RecordCard from '../../components/RecordCard'
import '../../components/RecordCard/RecordCard.css'

const SearchResults = () => {
  const token = useSelector(selectToken)
  const history = useHistory()
  const suggestions = useSelector(selectSuggestions)
  const keywords = suggestions.suggestion
  const results = suggestions.data

  if (!suggestions) {
    return <Loading />
  }
  if (token === null) {
    history.push('/')
  }

  return (
    <div>
      <h4>We detect your record as "{keywords}"</h4>
      <p>Your Image:</p>
      <img
        alt="User Upload"
        style={{ width: '100px' }}
        src={suggestions.uploadImage}
      ></img>
      <p>Search results:</p>
      <div>
        {results.length === 0 ? (
          <p>Sorry, no records were found</p>
        ) : (
          <div className="record-container">
            {results.map((result) => {
              return (
                <RecordCard
                  key={result.id}
                  suggestion={true}
                  id={result.id}
                  title={result.title}
                  artist={result.artist}
                  imageUrl={result.imageUrl}
                  genre={result.genre}
                  style={result.style}
                  year={result.year}
                  lowestPrice={result.lowestPrice}
                  format={result.format}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults
