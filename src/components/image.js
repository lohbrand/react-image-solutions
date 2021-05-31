import styled from "styled-components";

const BoxedImage = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.top};
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "100%"};
  transform: rotate(${(props) => props.rotate});
`;

const Wrapper = styled.div.attrs((props) => ({}))`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
`;

const imgUrl = "https://miro.medium.com/max/512/1*pIpmkYQndBoUfa8Uxs1Tjw.jpeg";

export function Image(props) {
  return (
    <>
      <Wrapper left="60px" top="20px" width="128px" height="256px">
        <BoxedImage
          left="0px"
          top="0px"
          img={imgUrl}
          width="256px"
          height="256px"
          rotate="90deg"
        />
      </Wrapper>
      <Wrapper left="186px" top="20px" width="128px" height="256px">
        <BoxedImage
          img={imgUrl}
          width="256px"
          height="256px"
          rotate="-90deg"
          bottom="0px"
          right="0px"
        />
      </Wrapper>
      <Wrapper left="60px" top="300px" height="128px" width="256px">
        <BoxedImage
          img={imgUrl}
          left="0px"
          top="0px"
          width="256px"
          height="256px"
          rotate="180deg"
        />
      </Wrapper>
      <Wrapper left="60px" top="400px" height="128px" width="256px">
        <BoxedImage
          img={imgUrl}
          width="256px"
          height="256px"
          rotate="0deg"
          bottom="0px"
          right="0px"
        />
      </Wrapper>
    </>
  );
}
