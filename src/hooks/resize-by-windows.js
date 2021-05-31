import { useEffect, useState } from 'react';

export const useResizeByWindow = (targetRef) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setWidth(targetRef.current.offsetWidth);
			setHeight(targetRef.current.offsetHeight);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [targetRef]);

	return { width, height };
};
