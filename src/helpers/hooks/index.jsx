import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export const useStoreOnceAfterMount = (service, storeKey, action) => {
  const obj = useSelector((state) => state[storeKey], shallowEqual);
  const { data, loading, error } = obj;
  const dispatch = useDispatch();

  const makeAction = (param) => {
    return dispatch(action(service)(param));
  };

  return ({ makeAction, data, loading, error });
};
