import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  padding: 1rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #000000, #000000);
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  color: #5e5e5e;
  width: 100%;
  /* background-color: #101522; */
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 18px;
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
  color: #ffffff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
	margin-right: 0.2rem;
	width: 150px;
`;

export const WebsiteRights = styled.small`
  color:  #5e5e5e;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #5e5e5e;
  font-size: 24px;
`;
