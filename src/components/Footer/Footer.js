import React, {useEffect} from 'react';
import { FaTelegram, FaTwitter,  FaVk } from 'react-icons/fa';
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterStyles';
import Language from "../Language/language";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";



const Footer = () => {

	const {ref, inView} = useInView({threshold: 0.2});
	useEffect(() => {
		if (inView) {
			setTimeout(() => window.location.href = 'cat', 10000)
		}
	}, [inView]);

	const { t } = useTranslation()
	return (
		<FooterContainer ref={ref}>
			<FooterSubscription>
				<SocialLogo to="/">
					<SocialIcon src="./assets/logo.png" alt={"cat casino"} />
				</SocialLogo>
				<FooterSubHeading>{t('footer_message')}</FooterSubHeading>
			</FooterSubscription>

			<SocialMedia>
				<SocialMediaWrap>
					<WebsiteRights>Nickz 2022 - {t('footer')}</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="blank" aria-label="Telegram">
							<FaTelegram />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Vk">
							<FaVk />
						</SocialIconLink>
						<SocialIconLink >
							<Language/>
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
