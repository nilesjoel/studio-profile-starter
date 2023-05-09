import Image from "next/legacy/image";
import styled from "styled-components";

const ImageWrap = styled.span`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    
  }
  .canvas-frame{
    padding: .5rem;
    background:hsl(60deg 6% 74% / 44%);
  }
 .bordered-image{
    // padding: 3rem 2rem 3rem 2rem;
    background:white;
  }
  .image-matte{
    padding:.4rem;
    background:hsl(60deg 36% 86%);
  }
`;
const StudioImage = ({ alt, src, width, height }) => {
  
  const studioImage = src.startsWith('http') ? src : `/images/artwork_images/${src}`
  // let height = 100;
  // let width = 100;
  return (
    <ImageWrap>
      <div className={"canvas-frame"}>
        <div className={'bordered-image'}>
          <div className={'image-matte'}>
            <Image
              alt={alt}
              src={studioImage}
              // width={`${width}px`}
              // height={`${height}px`}
              width={width}
              height={height}
              // layout="fill"
              // objectFit="contain"
              quality={70}
            />
          </div>
        </div>
      </div>
    </ImageWrap>
  );
};

export default StudioImage;