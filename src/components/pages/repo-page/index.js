import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../../helpers/compose';
import { withApiRequest } from '../../../helpers/hoc-helpers/withApiRequest';
import { getRepoInfoAndReadmeUrl } from '../../../actions';

import { RepoPageContainer } from './RepoPageContainer';

const mapStateToProps = ({ repoSelected: { repoInfo, loading, error } }) => {
  return { repoInfo, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    { getRepo: getRepoInfoAndReadmeUrl(serviceFunctions) },
    dispatch
  );
};

export const RepoPage = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(RepoPageContainer));
