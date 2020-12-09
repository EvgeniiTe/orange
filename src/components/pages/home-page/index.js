import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../../helpers/compose';
import { withApiRequest } from '../../../helpers/hoc-helpers/withApiRequest';
import { getRandomAccs } from '../../../actions';

import { HomePageContainer } from './HomePageContainer';

const mapStateToProps = ({ accList: { list, loading, error } }) => {
  return { list, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    { getNthRandomAcc: getRandomAccs(serviceFunctions) },
    dispatch
  );
};

export const HomePage = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(HomePageContainer));
