import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';

const NewsContainer = () => {
    return (
        <div>
            <h1>News</h1>
        </div>
    );
};

export let AuthRedirect = withAuthRedirect(NewsContainer)
export const News = compose(
    AuthRedirect
);