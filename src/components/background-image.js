import styled from 'styled-components';
import { useRef, useState } from 'react';

const BoxedImage = styled.div`
	position: absolute;
	left: ${(props) => props.left};
	right: ${(props) => props.left};
	top: ${(props) => props.top};
	bottom: ${(props) => props.top};
	background-image: url(${(props) => props.src});
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

	border-color: ${(props) => props['border-color']};
	border-style: ${(props) => props['border-style']};
	border-width: ${(props) => props['border-width']};

	overflow: hidden;
`;

const imgUrl = 'https://miro.medium.com/max/512/1*pIpmkYQndBoUfa8Uxs1Tjw.jpeg';

const imgComp = {
	// offset: "30 30",
	// refAnchor: 'topleft',
	wrapper: {
		left: '30px',
		top: '30px',
		width: '128px',
		height: '256px'
		// 'border-color': '#000000',
		// 'border-style': 'solid',
		// 'border-width': '5px 20px 10px 15px'
	},
	component: {
		left: '0px',
		top: '0px',
		rotate: '90deg',
		src: imgUrl
	}
};

export function BackgroundImage() {
	const { wrapper, component } = imgComp;
	const childrenRef = useRef();

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	let image = new Image();
	image.src = component.src;

	image.onload = () => {
		const { width, height } = image;
		setWidth(width);
		setHeight(height);
	};

	return (
		/* <Wrapper {...wrapper} width={`${width}px`} height={`${height}px`}> */
		<Wrapper {...wrapper}>
			<BoxedImage ref={childrenRef} {...component} width={`${width}px`} height={`${height}px`} />
		</Wrapper>
	);
}
