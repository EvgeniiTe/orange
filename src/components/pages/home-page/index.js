import { withRouter } from 'react-router-dom';
import { compose } from '../../../helpers/compose';
import { withApiRequest } from '../../../helpers/hoc-helpers/withApiRequest';
import { withUseStoreOnceAfterMount } from '../../../helpers/hoc-helpers/withUseStoreOnceAfterMount';
import { getRandomAccs } from '../../../actions';

import { HomePageContainer } from './HomePageContainer';

export const HomePage = compose(
  withApiRequest(),
  withUseStoreOnceAfterMount('accList', getRandomAccs)
)(withRouter(HomePageContainer));
