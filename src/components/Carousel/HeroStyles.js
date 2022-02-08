import styled from 'styled-components';
import { Button } from '../../styleGlobal';
import {motion } from 'framer-motion';




export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: #000;
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const MainHeadings = styled(motion.h2)`
  font-size: clamp(2.2rem, 2vw, 4rem);
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({inverse}) => (inverse ? '$403ae3' : '#fc0000')};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`


export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #e865e8;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 2;
  -webkit-line-clamp: 2;
  line-clamp: 1;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
`;
export const HeroTextBrand = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #ff0000;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  -ms-line-clamp: 2;
  -webkit-line-clamp: 2;
  line-clamp: 1;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;
`
export const Stars = styled(motion.div)`
  width: 100%;
  color: #ff00ff;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 35px;
  align-items: center;
  height: 60px;
`
export const StarsBrand = styled(motion.div)`
  width: 100%;
  color: #ff0000;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 35px;
  align-items: center;
  height: 60px;
`

export const Progress = styled.div`
  width: 90%;
  height: 55px;
  color: #d7d3d3;
  margin: 0 auto;
`
export const ButtonWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: #e865e8;
  margin-top: 15px;

  &:before {
    background: #4b0082;
    height: 500%;
  }

  &:hover:before {
    color: #4b0082;
    height: 0;
  }

  &:hover {
    color: white;
  }
`;
