import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';


const MusicContainer = () => {
    return (
        <div>
            <h1>Music</h1>
        </div>
    );
};

export let AuthRedirect = withAuthRedirect(MusicContainer)
export const Music = compose(
    AuthRedirect
);