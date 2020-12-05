import { updateAccList } from './updateAccList';
import { updateAcc } from './updateAcc';

export const reducer = (state, action) => {
  return {
    accList: updateAccList(state, action),
    accSelected: updateAcc(state, action),
  };
};
