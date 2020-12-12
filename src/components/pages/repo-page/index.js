import { withRouter } from 'react-router-dom';
import { compose } from '../../../helpers/compose';
import { withApiRequest } from '../../../helpers/hoc-helpers/withApiRequest';
import { getRepoInfoAndReadmeUrl } from '../../../actions';
import { withUseStoreOnceAfterMount } from '../../../helpers/hoc-helpers/withUseStoreOnceAfterMount';

import { RepoPageContainer } from './RepoPageContainer';

export const RepoPage = compose(
  withApiRequest(),
  withUseStoreOnceAfterMount('repoSelected', getRepoInfoAndReadmeUrl)
)(withRouter(RepoPageContainer));
