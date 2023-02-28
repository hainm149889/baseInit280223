import {IRootState} from '../reducers';

import {get} from 'lodash';

export const selectGlobal = (state: IRootState) => get(state, 'global');

export const selectLanguage = (state: IRootState) =>
  get(selectGlobal(state), 'language');
