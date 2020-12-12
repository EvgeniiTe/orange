import { withRouter } from 'react-router-dom';
import { compose } from '../../../helpers/compose';
import { withApiRequest } from '../../../helpers/hoc-helpers/withApiRequest';
import { getAccPublicRepos } from '../../../actions';
import { withUseStoreOnceAfterMount } from '../../../helpers/hoc-helpers/withUseStoreOnceAfterMount';

import { AccPageContainer } from './AccPageContainer';

export const AccPage = compose(
  withApiRequest(),
  withUseStoreOnceAfterMount('accSelected', getAccPublicRepos)
)(withRouter(AccPageContainer));
