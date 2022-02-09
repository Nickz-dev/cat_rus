import styled, {createGlobalStyle} from 'styled-components';
import {motion} from "framer-motion";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: black;
    //color: black;
  }
  #hero {
    width: 60%;
    color: black;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }
  #content{
    width: 60%;
    margin: auto;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }
  .loader {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #000;
    animation: rotating 1s linear infinite;
  }
  .loader::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    background: white;
  }

  @keyframes rotating {
    from {
      transform: rotate(360deg);

    }
    to {
      transform: rotate(0deg);
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Headings = styled(motion.h2)`
  font-size: 2rem;
  margin-top: 20px;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: #e865e8;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(1.6rem, 1.5vw, 4rem);
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({inverse}) => (inverse ? '$403ae3' : '#FF0BFF')};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;
export const MainHead = styled.h2`
  font-size: clamp(1.6rem, 1.5vw, 4rem);
  font-weight: bold;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({inverse}) => (inverse ? '$403ae3' : '#d7d3d3')};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled(motion.h2)`
  font-size: clamp(1.3rem, 2vw, 2rem);
  margin: ${({margin}) => (margin ? margin : '')};
  margin-bottom: ${({mb}) => (mb ? mb : '')};
  margin-top: ${({mt}) => (mt ? mt : '10px')};
  margin-left: ${({mt}) => (mt ? mt : '10px')};
  color: ${({inverse}) => (inverse ? '$403ae3' : '#fff')};
  letter-spacing: 0.2rem;
  line-height: 1.20;
  text-align: center;
  width: ${({width}) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
  color: ${({color}) => (color ? color : '')};
  font-size: ${({size}) => (size ? size : '')};
  font-weight: ${({weight}) => (weight ? weight : '')};
  letter-spacing: ${({spacing}) => (spacing ? spacing : '')};
  padding: ${({padding}) => (padding ? padding : '')};
  margin: ${({margin}) => (margin ? margin : '')};
  margin-bottom: ${({mb}) => (mb ? mb : '')};
  margin-top: ${({mt}) => (mt ? mt : '')};
`;
export const Section = styled.section`
  padding: ${({padding}) => (padding ? padding : '140px 0')};
  margin: ${({margin}) => (margin ? margin : '')};
  background: ${({inverse}) => (inverse ? 'none' : '#a856de')};
  position: ${({position}) => (position ? position : '')};
  width: ${({width}) => (width ? width : 'auto')};
  min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
  @media screen and (max-width: 768px) {
    padding: ${({smPadding}) => (smPadding ? smPadding : '0 0')};
    margin: ${('-80px auto')};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({justify}) => (justify ? justify : '')};
  align-items: ${({align}) => (align ? align : '')};
  gap: ${({gap}) => (gap ? gap : '')};
  padding: ${({padding}) => (padding ? padding : '')};
  margin: ${({margin}) => (margin ? margin : '')};
  position: ${({position}) => (position ? position : '')};
  width: ${({width}) => (width ? width : 'auto')};
  min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
  flex-wrap: ${({wrap}) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({justify}) => (justify ? justify : '')};
  align-items: ${({align}) => (align ? align : '')};
  gap: ${({gap}) => (gap ? gap : '')};
  padding: ${({padding}) => (padding ? padding : '')};
  margin: ${({margin}) => (margin ? margin : '')};
  position: ${({position}) => (position ? position : '')};
  width: ${({width}) => (width ? width : 'auto')};
  min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
  max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
`;


export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #e865e8;
  outline: none;
  border: 1px solid #e865e8;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: none;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
    background: #A856DE;
  }

  &:hover {
    color: white;
  }
`;

export const ButtonBrand = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #ff0000;
  outline: none;
  border: 1px solid #fc0000;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: none;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
    background: #ff0000;
  }

  &:hover {
    color: white;
  }
`;

export default GlobalStyle;
