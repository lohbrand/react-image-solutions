import { useEffect, useState } from 'react';

export const useResizeByChild = (childrenRef) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (!childrenRef.current) return;
		const { offsetHeight, offsetWidth } = childrenRef.current;
		setWidth(offsetWidth);
		setHeight(offsetHeight);
	}, [childrenRef]);

	return { width, height };
};
