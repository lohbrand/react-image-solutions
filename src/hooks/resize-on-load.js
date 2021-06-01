import { useState } from 'react';

export const useResizeOnLoad = (imgUrl) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	let image = new Image();
	image.src = imgUrl;

	image.onload = () => {
		const { width, height } = image;
		setWidth(width);
		setHeight(height);
	};

	return { width, height };
};
