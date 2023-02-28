import {onChangeLanguage} from '@shared';
import CodePush from 'react-native-code-push';
import {SagaIterator} from 'redux-saga';
import {takeLatest} from 'redux-saga/effects';
import {unfoldSaga, UnfoldSagaActionType} from 'redux-unfold-saga';
import {AccountActionType} from '../types';

// const {GOOGLE_CLIENT_ID} = Config;

// export function* takeLogin({
//   callbacks,
//   type,
//   payload,
// }: UnfoldSagaActionType): Iterable<SagaIterator> {
//   yield unfoldSaga(
//     {
//       handler: async (): Promise<AuthorizeResult> => {
//         const data = (await authApi.login(
//           payload.email,
//           payload.password,
//         )) as AuthorizeResult;
//         data && (await Utils.storeTokenResponse(data));
//         return data;
//       },
//       key: type,
//     },
//     callbacks,
//   );
// }

// export function* takeLogout({
//   callbacks,
//   type,
// }: UnfoldSagaActionType): Iterable<SagaIterator> {
//   yield unfoldSaga(
//     {
//       handler: async (): Promise<boolean> => {
//         const [accessToken, refreshToken] = await Promise.all([
//           AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
//           AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
//         ]);
//         await Promise.all([
//           authApi.revokeToken(accessToken),
//           authApi.revokeToken(refreshToken),
//         ]);
//         await Promise.all([
//           AsyncStorage.removeItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
//           AsyncStorage.removeItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
//         ]);
//         LoginManager.logOut();
//         return true;
//       },
//       key: type,
//     },
//     callbacks,
//   );
// }

export function* takeChangeLanguage({
  callbacks,
  type,
  payload,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (): Promise<boolean> => {
        await onChangeLanguage(payload?.language);
        CodePush.restartApp();
        return payload?.language;
      },
      key: type,
    },
    callbacks,
  );
}

export function* takeChangeLanguageWithLaunch({
  callbacks,
  type,
  payload,
}: UnfoldSagaActionType): Iterable<SagaIterator> {
  yield unfoldSaga(
    {
      handler: async (): Promise<boolean> => {
        await onChangeLanguage(payload?.language);
        return payload?.language;
      },
      key: type,
    },
    callbacks,
  );
}

export default function* accountSaga(): SagaIterator {
  // yield takeLatest(AccountActionType.LOGIN, takeLogin);
  // yield takeLatest(AccountActionType.LOGOUT, takeLogout);

  yield takeLatest(AccountActionType.CHANGE_LANGUAGE, takeChangeLanguage);
  yield takeLatest(
    AccountActionType.CHANGE_LANGUAGE_WITH_LAUNCH,
    takeChangeLanguageWithLaunch,
  );
}
