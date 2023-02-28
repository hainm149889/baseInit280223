import {Config} from 'react-native-config';
import {BaseExtendApi} from './base-extend-api';

const {CLIENT_ID, CLIENT_SECRET} = Config;

class AppleApi extends BaseExtendApi {
  revokeToken(token: string) {
    return this.postUrlEncoded('https://appleid.apple.com/auth/revoke', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      token,
    });
  }
}

export default new AppleApi();
