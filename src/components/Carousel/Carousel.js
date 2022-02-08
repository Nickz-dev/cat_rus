import React, {useEffect, useState} from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import {IconContext} from 'react-icons';

import {Row, Heading, Section, TextWrapper, MainHeading, Button, MainHead, ButtonBrand} from '../../styleGlobal';
import {
    ButtonContainer,
    ReviewSlider,
    ImageWrapper,
    CarouselImage,
    CardButton,
    TextDesc, ImageWrapperBrand,
} from './CarouselStyles';

import {
    ButtonWrapper,
    HeroButton,
    HeroSection,
    HeroText, HeroTextBrand,
    HeroVideo, MainHeadings,
    Progress,
    Stars, StarsBrand
} from "./HeroStyles";

import {Link} from 'react-router-dom';
import {useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {useTranslation} from "react-i18next";

import {Rating} from "react-simple-star-rating";
import {Line} from "rc-progress";
import Modal from "../Modal/Modal";

const Carousel = () => {
    const { t } = useTranslation()
    const [sliderRef, setSliderRef] = useState(null);
    const initial = {opacity: 0, y: 50};
    const carousel = {opacity: 0};
    const animation = useAnimation();
    const {ref, inView} = useInView({threshold: 0.5});
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        if (!showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        setShowModal(!showModal);
    };
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                x: 0,
                y: 0,
            });
        }
    }, [inView, animation]);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        focusOnselect: false,
        accessability: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <>
            <HeroSection ref={ref}>
                <HeroVideo src='./assets/h2.mp4' autoPlay loop muted/>
                <Section id="site" margin="-80px auto" maxWidth="1280px" padding="0 30px" inverse>
                    <ReviewSlider {...sliderSettings} ref={setSliderRef}>
{/*brandCard##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                                <MainHeading> {t('brand').toUpperCase()} </MainHeading>
                                <HeroText>
                                    {t('brand_card_rtp')}<br/>
                                    {t('brand_card_bonus')}
                                </HeroText>
                                <Stars
                                    initial={carousel}
                                    transition={{delay: 0.3, duration: 1}}
                                    animate={animation}
                                >
                                    {t('brand_card_rating')}
                                    <Rating
                                        ratingValue={88}
                                        size={50}
                                        fillColor={'#ffc407'}
                                    />
                                </Stars>
                                <HeroText>
                                    {t('brand_card_span')}
                                </HeroText>
                                <ButtonWrapper
                                    initial={carousel}
                                    transition={{delay: 0.3, duration: 1.7}}
                                    animate={animation}
                                >

                                    <Button onClick={toggleModal} className={'corner'}>
                                        {t('brand_card_btn')}
                                    </Button>
                                </ButtonWrapper>

                        </ImageWrapper>
                        {/*brandStat##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <MainHead> {t('scores').toUpperCase()} </MainHead>

                            <Progress>
                                {t('scores_payment_speed')}
                                <Line percent="80" strokeWidth="4" strokeColor="#FF0BFFFF"/>
                            </Progress>
                            <Progress>
                                {t('scores_site')}
                                <Line percent="93" strokeWidth="4" strokeColor="#46F4B9"/>
                            </Progress>
                            <Progress>
                                {t('scores_games')}
                                <Line percent="80" strokeWidth="4" strokeColor="#46F4B9"/>
                            </Progress>
                            <Progress>
                                {t('scores_feedback')}
                                <Line percent="50" strokeWidth="4" strokeColor="#ffc407"/>
                            </Progress>
                            <ButtonWrapper
                                initial={carousel}
                                transition={{delay: 0.7, duration: 1.4}}
                                animate={animation}
                            >
                                <Link to='cat'>
                                    <HeroButton>{t('scores_btn')}</HeroButton>
                                </Link>
                            </ButtonWrapper>
                        </ImageWrapper>
                        {/*brandCard2d##########################################################################*/}
                        <ImageWrapperBrand
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <MainHeadings> {t('brand_two').toUpperCase()} </MainHeadings>
                            <HeroTextBrand>
                                {t('brand_card_two_rtp')}<br/>
                                {t('brand_card_two_bonus')}
                            </HeroTextBrand>
                            <StarsBrand
                                initial={carousel}
                                transition={{delay: 0.5, duration: 0.8}}
                                animate={animation}
                            >
                                {t('brand_card_two_rating')}
                                <Rating
                                    ratingValue='93'
                                    size={50}
                                    fillColor={'#ff0000'}
                                />
                            </StarsBrand>
                            <HeroTextBrand>
                                {t('brand_card_two_span')}
                            </HeroTextBrand>
                            <ButtonWrapper
                                initial={carousel}
                                transition={{delay: 0.5, duration: 0.8}}
                                animate={animation}
                            >
                                <Link to='vavada'>
                                    <ButtonBrand>
                                        {t('brand_card_two_btn')}
                                    </ButtonBrand>
                                </Link>
                            </ButtonWrapper>
                        </ImageWrapperBrand>
                        {/*slideCard1##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <CarouselImage src="/images/png/slide_enter.jpg"
                                           initial={initial}
                                           transition={{delay: 1, duration: 1}}
                                           animate={animation}
                            />
                            <Heading size="0.7rem" margin="0.2rem 0 0" weight="bold"
                                     initial={initial}
                                     transition={{delay: 1.5, duration: 1}}
                                     animate={animation}
                            >
                                {t('slide_title')}
                            </Heading>
                            <TextWrapper size="0.9rem" margin="0.2rem" color="#7223AB">
                                <TextDesc
                                    initial={initial}
                                    transition={{delay: 1.8, duration: 1}}
                                    animate={animation}
                                >
                                    {t('slide_desc')}
                                </TextDesc>
                            </TextWrapper>
                            <Link to="/cat">
                                <CardButton
                                    initial={initial}
                                    transition={{delay: 2, duration: 1}}
                                    animate={animation}
                                > {t('slide_btn')} </CardButton>
                            </Link>
                        </ImageWrapper>

                        {/*slideCard2##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <CarouselImage src="/images/png/slide_sign.jpg"
                                           initial={initial}
                                           transition={{delay: 1, duration: 1}}
                                           animate={animation}
                            />
                            <Heading size="0.7rem" margin="0.2rem 0 0" weight="bold"
                                     initial={initial}
                                     transition={{delay: 1.5, duration: 1}}
                                     animate={animation}
                            >
                                {t('slide_title_two')}
                            </Heading>
                            <TextWrapper size="0.9rem" margin="0.2rem" color="#7223AB">
                                <TextDesc
                                    initial={initial}
                                    transition={{delay: 1.8, duration: 1}}
                                    animate={animation}
                                >
                                    {t('slide_desc_two')}
                                </TextDesc>
                            </TextWrapper>
                            <Link to="/cat">
                                <CardButton
                                    initial={initial}
                                    transition={{delay: 2, duration: 1}}
                                    animate={animation}
                                >  {t('slide_btn_two')} </CardButton>
                            </Link>
                        </ImageWrapper>

                        {/*slideCard3##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <CarouselImage src="/images/png/slide_mirror.jpg "
                                           initial={initial}
                                           transition={{delay: 1, duration: 1}}
                                           animate={animation}
                            />
                            <Heading size="0.7rem" margin="0.2rem 0 0" weight="bold"
                                     initial={initial}
                                     transition={{delay: 1.5, duration: 1}}
                                     animate={animation}
                            >
                                {t('slide_title_three')}
                            </Heading>
                            <TextWrapper size="0.9rem" margin="0.2rem" color="#7223AB">
                                <TextDesc
                                    initial={initial}
                                    transition={{delay: 1.8, duration: 1}}
                                    animate={animation}
                                >
                                    {t('slide_desc_three')}
                                </TextDesc>
                            </TextWrapper>
                            <Link to="/cat">
                                <CardButton
                                    initial={initial}
                                    transition={{delay: 2, duration: 1}}
                                    animate={animation}
                                >   {t('slide_btn_three')} </CardButton>
                            </Link>
                        </ImageWrapper>
                        {/*slideCard4##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <CarouselImage src="/images/png/slide_bonusses.jpg "
                                           initial={initial}
                                           transition={{delay: 1, duration: 1}}
                                           animate={animation}
                            />
                            <Heading size="0.7rem" margin="0.2rem 0 0" weight="bold"
                                     initial={initial}
                                     transition={{delay: 1.5, duration: 1}}
                                     animate={animation}
                            >
                                {t('slide_title_four')}
                            </Heading>
                            <TextWrapper size="0.9rem" margin="0.2rem" color="#7223AB">
                                <TextDesc
                                    initial={initial}
                                    transition={{delay: 1.8, duration: 1}}
                                    animate={animation}
                                >
                                    {t('slide_desc_four')}
                                </TextDesc>
                            </TextWrapper>
                            <Link to="/cat">
                                <CardButton
                                    initial={initial}
                                    transition={{delay: 2, duration: 1}}
                                    animate={animation}
                                >   {t('slide_btn_four')} </CardButton>
                            </Link>
                        </ImageWrapper>
                        {/*slideCard5##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <CarouselImage src="/images/png/slide_tournaments.jpg "
                                           initial={initial}
                                           transition={{delay: 1, duration: 1}}
                                           animate={animation}
                            />
                            <Heading size="0.7rem" margin="0.2rem 0 0" weight="bold"
                                     initial={initial}
                                     transition={{delay: 1.5, duration: 1}}
                                     animate={animation}
                            >
                                {t('slide_title_five')}
                            </Heading>
                            <TextWrapper size="0.9rem" margin="0.2rem" color="#7223AB">
                                <TextDesc
                                    initial={initial}
                                    transition={{delay: 1.8, duration: 1}}
                                    animate={animation}
                                >
                                    {t('slide_desc_five')}
                                </TextDesc>
                            </TextWrapper>
                            <Link to="/cat">
                                <CardButton
                                    initial={initial}
                                    transition={{delay: 2, duration: 1}}
                                    animate={animation}
                                >   {t('slide_btn_five')} </CardButton>
                            </Link>
                        </ImageWrapper>
                        {/*slideCard6##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <CarouselImage src="/images/png/slide_live.jpg "
                                           initial={initial}
                                           transition={{delay: 1, duration: 1}}
                                           animate={animation}
                            />
                            <Heading size="0.7rem" margin="0.2rem 0 0" weight="bold"
                                     initial={initial}
                                     transition={{delay: 1.5, duration: 1}}
                                     animate={animation}
                            >
                                {t('slide_title_six')}
                            </Heading>
                            <TextWrapper size="0.9rem" margin="0.2rem" color="#7223AB">
                                <TextDesc
                                    initial={initial}
                                    transition={{delay: 1.8, duration: 1}}
                                    animate={animation}
                                >
                                    {t('slide_desc_six')}
                                </TextDesc>
                            </TextWrapper>
                            <Link to="/cat">
                                <CardButton
                                    initial={initial}
                                    transition={{delay: 2, duration: 1}}
                                    animate={animation}
                                >   {t('slide_btn_six')} </CardButton>
                            </Link>
                        </ImageWrapper>
                        {/*slideCard7##########################################################################*/}
                        <ImageWrapper
                            initial={carousel}
                            transition={{delay: 0.1, duration: 2}}
                            animate={animation}
                        >
                            <CarouselImage src="/images/png/slide_slots.jpg "
                                           initial={initial}
                                           transition={{delay: 1, duration: 1}}
                                           animate={animation}
                            />
                            <Heading size="0.7rem" margin="0.2rem 0 0" weight="bold"
                                     initial={initial}
                                     transition={{delay: 1.5, duration: 1}}
                                     animate={animation}
                            >
                                {t("slide_title_seven")}
                            </Heading>
                            <TextWrapper size="0.9rem" margin="0.2rem" color="#7223AB">
                                <TextDesc
                                    initial={initial}
                                    transition={{delay: 1.8, duration: 1}}
                                    animate={animation}
                                >
                                    {t('slide_desc_seven')}
                                </TextDesc>
                            </TextWrapper>
                            <Link to="/cat">
                                <CardButton
                                    initial={initial}
                                    transition={{delay: 2, duration: 1}}
                                    animate={animation}
                                >   {t('slide_btn_seven')} </CardButton>
                            </Link>
                        </ImageWrapper>

                    </ReviewSlider>
                    <Row justify="center" margin="1rem" wrap="wrap">
                        <ButtonContainer>
                            <IconContext.Provider value={{size: '3rem', color: '#313030'}}>
                                <FaArrowCircleLeft onClick={sliderRef?.slickPrev}/>
                                <FaArrowCircleRight onClick={sliderRef?.slickNext}/>
                            </IconContext.Provider>
                        </ButtonContainer>
                    </Row>
                </Section>
            </HeroSection>
            <Modal showModal={showModal} toggleModal={toggleModal}/>
        </>
    );
};

export default Carousel;
