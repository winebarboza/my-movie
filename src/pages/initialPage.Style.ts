import styled from 'styled-components';

interface BackgroundImgProps {
  backgroundImage: any;
}

export const BackgroundImg = styled.div<BackgroundImgProps>`
 position: relative;
  width: 100%;
  height: 100vh;

    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;