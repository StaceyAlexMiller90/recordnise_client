import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageUrl } from '../../config/constants'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import SearchResults from '../../pages/SearchResults'
import { getSuggestions } from '../../store/suggestion/actions'
import { selectSuggestions } from '../../store/suggestion/selectors'
import { Link } from 'react-router-dom'

const AddRecord = () => {
	const dispatch = useDispatch()
	const [record, setRecord] = useState('')
	const suggestions = useSelector(selectSuggestions)

	// specify upload params and url for your files
	const getUploadParams = async ({ file, meta }) => {
		const body = new FormData()
		body.append('file', file)
		body.append('upload_preset', 'Records')
		return {
			url: `${imageUrl}`,
			body,
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
		}
	}
	// called every time a file's `status` changes
	// const handleChangeStatus = ({ meta, file }, status) => {
	//   console.log(status, meta, file)
	// }

	// receives array of files that are done uploading when submit button is clicked
	const handleSubmit = (files, allFiles) => {
		const res = JSON.parse(files[0].xhr.responseText)
		const secureUrl = res.secure_url
		setRecord(secureUrl)
		dispatch(getSuggestions(secureUrl))
		allFiles.forEach((f) => f.remove())
	}

	return (
		<div>
			{record && suggestions ? (
				<SearchResults recordUrl={record} suggestions={suggestions} />
			) : (
				<>
					<Dropzone
						styles={{
							dropzone: { width: '500px', height: '400px' },
							inputLabel: { color: 'black' },
							preview: { height: '400px' },
							previewImage: { maxHeight: '200px', maxWidth: '200px' },
						}}
						getUploadParams={getUploadParams}
						// onChangeStatus={handleChangeStatus}
						onSubmit={handleSubmit}
						inputContent={'Drag or click to add your record cover'}
						inputWithFilesContent={null}
						maxFiles={1}
						multiple={false}
						accept="image/*"
					/>
				</>
			)}
		</div>
	)
}

export default AddRecord
