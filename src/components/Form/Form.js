import React from 'react';
import {
    FormColumn,
    FormWrapper,
    FormSection,
    FormRow,
    FormButton,
    FormTitle,
    FormText,
} from './FormStyles';
import {Container} from '../../styleGlobal';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Form = () => {
    const {t} = useTranslation()
    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn small>
                        <FormTitle>{t('modal_title')}</FormTitle>
                        <FormWrapper>
                            <FormText>
                                {t("modal_bonus_reg")}<br/>
                                <b>{t("modal_bonus")}</b><br/><br/>
                                {t("modal_recommendation")}
                                <b> {t("modal_brand")} <br/>
                                    {t("modal_brand_bonus")}<br/>
                                    {t("modal_brand_fs")}
                                </b>
                            </FormText>

                            <Link to='cat'>
                                <FormButton>
                                    {t('modal_btn_one').toUpperCase()}
                                </FormButton>
                            </Link>
                            <Link to='vavada'>
                                <FormButton>
                                    {t('modal_btn_two').toUpperCase()}
                                </FormButton>
                            </Link>
                        </FormWrapper>
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>
    );
};

export default Form;
