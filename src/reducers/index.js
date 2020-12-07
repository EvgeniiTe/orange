import { updateAccList } from './updateAccList';
import { updateAcc } from './updateAcc';
import { updateRepo } from './updateRepo';

export const reducer = (state, action) => {
  return {
    accList: updateAccList(state, action),
    accSelected: updateAcc(state, action),
    repoSelected: updateRepo(state, action),
  };
};
