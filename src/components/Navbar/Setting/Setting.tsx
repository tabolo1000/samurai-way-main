import React from 'react';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';


const SettingContainer = () => {
    return (
        <div>
            <h1>Setting</h1>
        </div>
    );
};

export let AuthRedirect = withAuthRedirect(SettingContainer)
export const Setting = compose(
    AuthRedirect
);