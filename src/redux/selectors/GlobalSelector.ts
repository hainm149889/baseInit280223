import {IRootState} from '../reducers';
import {IGlobalState} from '../reducers/GlobalReducer';
import {get} from 'lodash';

export const selectGlobal = (state: IRootState): IGlobalState =>
  get(state, 'global');

export const selectLanguage = (state: IRootState): string | null =>
  get(selectGlobal(state), 'language');
