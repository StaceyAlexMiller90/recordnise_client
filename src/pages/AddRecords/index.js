import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../../store/user/selectors'
import { useHistory } from 'react-router-dom'
import UploadRecord from '../../components/UploadRecord'
import { selectSuggestions } from '../../store/suggestion/selectors'
import { clearSuggestionInfo } from '../../store/suggestion/actions'
import SearchResults from '../SearchResults'
import { Link } from 'react-router-dom'

const AddRecords = () => {
	const dispatch = useDispatch()
	const token = useSelector(selectToken)
	const history = useHistory()
	const suggestions = useSelector(selectSuggestions)

	const clearSuggestion = () => {
		dispatch(clearSuggestionInfo())
	}

	useEffect(() => {
		if (!token) {
			history.push('/')
		}
	}, [token, history])

	return (
		<div>
			{!suggestions.suggestion ? (
				<div style={{ marginTop: '20px' }}>
					<h3>Add records to your collection!</h3>
					<h5>Take a quick pic & we do the hard work for you!</h5>
					<p>
						This feature uses image recognition technology - once uploaded, your
						image will be scanned for text & matching articles on the web & the
						closest matching result is returned.
					</p>
					! Please ensure that there is no additional text in your
					image/background e.g. promotional stickers
					<UploadRecord />
				</div>
			) : (
				<div style={{ marginTop: '20px' }}>
					<h3>Here is what we found!</h3>
					<h5>
						Please select the option that best matches your record, or decide to
						add info manually
					</h5>
					<Link to="/manualadd">
						<button>Click to add info manually</button>
					</Link>
					<Link to="/addrecords">
						<button onClick={clearSuggestion}>
							Click here to retake picture
						</button>
					</Link>
					<SearchResults
						recordUrl={suggestions.uploadImage}
						suggestions={suggestions}
					/>
				</div>
			)}
		</div>
	)
}

export default AddRecords
