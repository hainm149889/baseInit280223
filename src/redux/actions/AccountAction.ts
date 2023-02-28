import {createAction} from 'redux-unfold-saga';
import {AccountActionType} from '../types';

export default {
  login: createAction(AccountActionType.LOGIN),
  logout: createAction(AccountActionType.LOGOUT),
  changeLanguage: createAction(AccountActionType.CHANGE_LANGUAGE),
  changeLanguageWithLaunch: createAction(
    AccountActionType.CHANGE_LANGUAGE_WITH_LAUNCH,
  ),
};
