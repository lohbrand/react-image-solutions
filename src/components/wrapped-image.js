import React, { useRef } from 'react';
import styled from 'styled-components';
import { useResizeByChild } from '../hooks';

/*
wenn wrapper size set wrapper
	sonst vom inhalt
	wenn inhalt auto steht dann messen
*/

const imgUrl = 'https://miro.medium.com/max/512/1*pIpmkYQndBoUfa8Uxs1Tjw.jpeg';

const BoxedImage = styled.img.attrs((props) => ({
	src: props.img,
	width: props.dimensions?.width,
	height: props.dimension?.height
}))`
	position: absolute;
	left: ${(props) => props.left};
	right: ${(props) => props.left};
	top: ${(props) => props.top};
	bottom: ${(props) => props.top};
	/* background-image: url(${(props) => props.img}); */
	/* background-repeat: no-repeat; */
	/* width: ${(props) => props.width ?? '100%'}; */
	/* height: ${(props) => props.height ?? '100%'}; */
	/* transform: rotate(${(props) => props.rotate}); */
`;

const Wrapper = styled.div.attrs((props) => ({}))`
	display: -webkit-box;
	margin: 0;
	padding: 0;
	position: absolute;
	left: ${(props) => props.left};
	top: ${(props) => props.top};

	width: ${(props) => props.width};
	height: ${(props) => props.height};

	overflow: ${(props) => props.overflow};

	transform: rotate(${(props) => props.rotate});
`;

export const WrappedImage = (props) => {
	// const { outerWidth, outerHeight } = props;
	// const parentRef = useRef();
	const childrenRef = useRef();
	const { width, height } = useResizeByChild(childrenRef);

	// const [dimensions, setDimensions] = useState({ width: "0px", height: "0px" });
	// useEffect(() => {
	//   if (parentRef.current) {
	//     const { offsetHeight, offsetWidth } = childrenRef.current;
	//     setDimensions({
	//       width: `${offsetWidth}px`,
	//       height: `${offsetHeight}px`
	//     });
	//   }
	// }, [childrenRef]);

	return (
		<Wrapper
			// ref={parentRef}
			left="350px"
			top="20px"
			width={`${width}px`}
			height={`${height}px`}
			rotate="90deg">
			<BoxedImage ref={childrenRef} img={imgUrl} />
		</Wrapper>
	);
};
