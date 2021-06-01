import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const imgUrl = 'https://miro.medium.com/max/512/1*pIpmkYQndBoUfa8Uxs1Tjw.jpeg';

const BoxedImage = styled.div`
	position: absolute;
	left: ${(props) => props.left};
	right: ${(props) => props.left};
	top: ${(props) => props.top};
	bottom: ${(props) => props.top};
	background-image: url(${(props) => props.img});
	background-repeat: no-repeat;
	width: ${(props) => props.width ?? '100%'};
	height: ${(props) => props.height ?? '100%'};
	transform: rotate(${(props) => props.rotate});
`;

const Wrapper = styled.div.attrs((props) => ({}))`
	position: absolute;
	left: ${(props) => props.left};
	top: ${(props) => props.top};

	width: ${(props) => props.width};
	height: ${(props) => props.height};
	overflow: ${(props) => props.overflow}; ;
`;

export const ComponentWithDimensions = (props) => {
	// const { outerWidth, outerHeight } = props;
	const parentRef = useRef();
	const childrenRef = useRef();
	const [dimensions, setDimensions] = useState({ width: '0px', height: '0px' });
	useEffect(() => {
		if (parentRef.current) {
			const { offsetHeight, offsetWidth } = childrenRef.current;
			console.log(childrenRef.current);
			console.log(`${offsetHeight} x ${offsetWidth}`);
			// const innerWidth = childrenRef.current.width;
			// const innerHeight = childrenRef.current.height;
			setDimensions({
				width: `${offsetWidth}px`,
				height: `${offsetHeight}px`
			});
		}
	}, [childrenRef]);

	return (
		<Wrapper ref={parentRef} left="350px" top="20px" width={dimensions.width} height={dimensions.height}>
			<BoxedImage ref={childrenRef} img={imgUrl} width="100px" height="256px" />
		</Wrapper>
	);
};
