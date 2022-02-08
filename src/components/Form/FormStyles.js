import styled from 'styled-components';


export const FormSection = styled.div`
  /* color: #fff; */
  overflow: hidden;
  width: 100%;
  padding: 60px 0;
    /* background: ${({inverse}) => (inverse ? '#101522' : '#fff')}; */
  background: #000;
`;

export const FormTitle = styled.h1`
	margin-bottom: 16px;
	font-size: 32px;
	line-height: 1.1;
	font-weight: 600;
`;


export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 50px;
	background: white;
	border: 20px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;
`;



export const FormText = styled.p`
  margin-bottom: 15px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  padding: 10px;
  text-align: start;
  letter-spacing: 2px;
  color: #0c0c0c;
`;

export const FormButton = styled.button`
  border-radius: 25px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  /* color: #fff; */
  color: #0c0c0c;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #ffffff;
    transition: background-color 0.4s ease-in;
    background-color: #000000;
  }
`;
