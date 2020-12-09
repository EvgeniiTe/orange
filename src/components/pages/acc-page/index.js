import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../../helpers/compose';
import { withApiRequest } from '../../../helpers/hoc-helpers/withApiRequest';
import { getAccPublicRepos } from '../../../actions';

import { AccPageContainer } from './AccPageContainer';

const mapStateToProps = ({ accSelected: { reposList, loading, error } }) => {
  return { reposList, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    { getAccRepos: getAccPublicRepos(serviceFunctions) },
    dispatch
  );
};

export const AccPage = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(AccPageContainer));
