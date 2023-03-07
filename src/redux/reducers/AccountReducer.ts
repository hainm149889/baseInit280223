import produce from 'immer';
import {Reducer} from 'redux';
import {
  createActionTypeOnSuccess,
  UnfoldSagaActionType,
} from 'redux-unfold-saga';
import {AccountActionType} from '../types';

export interface IUserState {
  language: string;
}

export const defaultState: IUserState = {
  language: 'vi-VN',
};

export const accountReducer: Reducer<IUserState, UnfoldSagaActionType> = (
  state = defaultState,
  action: UnfoldSagaActionType,
): IUserState => {
  const {type, payload} = action;

  return produce(state, (draftState: IUserState): void => {
    switch (type) {
      case createActionTypeOnSuccess(AccountActionType.CHANGE_LANGUAGE):
        draftState.language = payload;
        break;
      case createActionTypeOnSuccess(
        AccountActionType.CHANGE_LANGUAGE_WITH_LAUNCH,
      ):
        draftState.language = payload;
        break;
      default:
        break;
    }
  });
};
