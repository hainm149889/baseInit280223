import {CONSTANT} from '@configs';
import {RegisterUserRequest, RequestParamsLogin} from '@models';
import Config from 'react-native-config';
import {BaseApi} from './base-api';

const {IDENTITY_HOST} = Config;

class AccountApi extends BaseApi {
  onLogin(requestParams: RequestParamsLogin) {
    let url = `${CONSTANT.BASE_URL}${CONSTANT.PATH.login}`;
    return this.post(url, requestParams, {}, true);
  }
  changePassword(
    email: string,
    password: string,
    newPassword: string,
    confirmPassword: string,
  ) {
    let url = `${IDENTITY_HOST}/api/Account/ChangePassword`;
    return this.post(
      url,
      {
        email: email,
        password: password,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      },
      {},
      true,
    );
  }

  register(registerUser: RegisterUserRequest) {
    let url = `${IDENTITY_HOST}/api/Account/Register`;
    return this.post(url, registerUser, {}, true);
  }

  verifyOtp(phone: string) {
    let url = `${IDENTITY_HOST}/api/Account/VerifyOtp`;
    return this.post(
      url,
      {
        phone: phone,
      },
      {},
      true,
    );
  }

  forgotPassword(email: string) {
    let url = `${IDENTITY_HOST}/api/Account/ForgotPassword/forgotPassword`;
    return this.post(url, {email: email}, {}, true);
  }

  resetPassword(newPassword: string, email: string, code: string) {
    let url = `${IDENTITY_HOST}/api/Account/ResetPassword/resetPassword`;
    return this.post(
      url,
      {email: email, code: code, password: newPassword},
      {},
      true,
    );
  }
}

export default new AccountApi();
