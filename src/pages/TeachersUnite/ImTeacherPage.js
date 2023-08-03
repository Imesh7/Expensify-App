import React from 'react';
import {withCurrentUserPersonalDetailsPropTypes, withCurrentUserPersonalDetailsDefaultProps} from '../../components/withCurrentUserPersonalDetails';
import ScreenWrapper from '../../components/ScreenWrapper';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import ROUTES from '../../ROUTES';
import Navigation from '../../libs/Navigation/Navigation';
import FixedFooter from '../../components/FixedFooter';
import BlockingView from '../../components/BlockingViews/BlockingView';
import styles from '../../styles/styles';
import Button from '../../components/Button';
import * as Illustrations from '../../components/Icon/Illustrations';
import variables from '../../styles/variables';
import useLocalize from '../../hooks/useLocalize';

const propTypes = {
    ...withCurrentUserPersonalDetailsPropTypes,
};

const defaultProps = {
    ...withCurrentUserPersonalDetailsDefaultProps,
};

function ImTeacherPage() {
    const {translate} = useLocalize();

    return (
        <ScreenWrapper>
            <HeaderWithBackButton
                title={translate('teachersUnitePage.iAmATeacher')}
                onBackButtonPress={() => Navigation.goBack(ROUTES.SAVE_THE_WORLD)}
            />
            <BlockingView
                shouldShowLink
                icon={Illustrations.EmailAddress}
                title={translate('teachersUnitePage.updateYourEmail')}
                subtitle={translate('teachersUnitePage.schoolMailAsDefault')}
                link={translate('teachersUnitePage.contactMethods')}
                onLinkPress={() => Navigation.navigate(ROUTES.SETTINGS_CONTACT_METHODS)}
                iconWidth={variables.signInLogoWidthLargeScreen}
                iconHeight={variables.lhnLogoWidth}
            />
            <FixedFooter style={[styles.flexGrow0]}>
                <Button
                    success
                    accessibilityLabel={translate('teachersUnitePage.updateEmail')}
                    text={translate('teachersUnitePage.updateEmail')}
                    onPress={() => Navigation.navigate(ROUTES.SETTINGS_CONTACT_METHODS)}
                />
            </FixedFooter>
        </ScreenWrapper>
    );
}

ImTeacherPage.propTypes = propTypes;
ImTeacherPage.defaultProps = defaultProps;
ImTeacherPage.displayName = 'ImTeacherPage';

export default ImTeacherPage;
