import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';

const Display = () => {
	const [ images, setImages ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ term, setTerm ] = useState('');

	useEffect(
		() => {
			async function fetchData(term) {
				const pixabayUrl = 'https://pixabay.com/api/';
				try {
					const res = await fetch(
						`${pixabayUrl}?key=${process.env
							.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
					);
					const data = await res.json();

					if (data) {
						setImages(data.hits);
						setIsLoading(false);
					}
					return data;
				} catch (error) {
					console.log(error.message, '\n');
				}
			}

			fetchData(term);
		},
		[ term ]
	);

	return (
		<div className="container mx-auto">
			<ImageSearch searchText={(text) => setTerm(text)} />
			{!isLoading &&
			images.length < 1 && <h1 className="text-5xl text-center mx-auto mt-32">'No Images Found'</h1>}
			{isLoading ? (
				<h1 className="text-6xl text-center mx-auto mt-32">'Loading...'</h1>
			) : (
				<div className="grid grid-cols-3 gap-4">
					{images.map((img) => <ImageCard key={img.id} image={img} loading={isLoading} />)}
				</div>
			)}
		</div>
	);
};

export default Display;
