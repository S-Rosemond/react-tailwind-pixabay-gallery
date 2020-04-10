import React from 'react';

const ImageCard = ({ image }) => {
	const tags = image.tags.split(',');
	return (
		<div className=" rounded max-w-lg mx-6 p-4  shadow-lg">
			<div className=" rounded overflow-hidden ">
				<img src={image.webformatURL} alt="" className="w-full" />
			</div>

			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 tx-xl-center mb-2">Photo by {image.user}</div>
				<ul>
					<li>
						<strong>Views: {image.views}</strong>
					</li>
					<li>
						<strong className="text-orange-400">Downloads: {image.downloads}</strong>
					</li>
					<li>
						<strong className="text-blue-500">Likes: {image.likes}</strong>
					</li>
				</ul>
			</div>

			<div className="px-6 py-4 ">
				{tags.map((tag, idx) => {
					return (
						<span
							key={idx}
							className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1"
						>
							#{tag}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default ImageCard;
