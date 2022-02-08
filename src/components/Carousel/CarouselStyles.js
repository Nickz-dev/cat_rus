import styled from 'styled-components';
import {Row } from '../../styleGlobal';
import Slider from 'react-slick';
import {motion} from "framer-motion";


export const CarouselImage = styled(motion.img)`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
  @media screen and (min-width: 340px) {
    height: 313px;
  }
`;

export const ImageWrapper = styled(motion.div)`
  max-width: 300px;
  min-width: 300px;
  background: rgb(12, 12, 12, 0.8);
  display: flex !important;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(75, 0, 130, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(75, 0, 130, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(75, 0, 130, 0.2);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 400px;
  @media screen and (min-width: 300px) {
    border: 2px solid #e865e8;
    margin: 0 auto;
  }
`;

export const ImageWrapperBrand = styled(motion.div)`
  max-width: 300px;
  min-width: 300px;
  background: rgb(12, 12, 12, 0.8);
  display: flex !important;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(75, 0, 130, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(75, 0, 130, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(75, 0, 130, 0.2);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 400px;
  @media screen and (min-width: 300px) {
    border: 2px solid #fc0000;
    margin: 0 auto;
  }
`;

export const TextDesc = styled(motion.p)`
  margin: 0 10px;
  color: #ffffff;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 2;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
`
export const ButtonContainer = styled(Row)`
  & svg {
    margin: 0 1rem;
    opacity: 0.5;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;


export const CardButton = styled(motion.button)`
  font-size: 1.3rem;
  background: none;
  padding: 10px 10px;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  margin: auto 0 15px 0;
  border: none;
  border-radius: 10px;

  &:hover {
    color: #ff00ff;
    transition: background-color 0.2s ease-in;
  }
`;
