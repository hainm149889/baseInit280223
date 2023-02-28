import {BaseApi} from './base-api';

class CommonApi extends BaseApi {
  logIpRemote() {
    return this.get('https://api.ipify.org?format=json', {}, true)?.then(
      (response: any) => {
        return this.get('logipremote', {ip: response.ip});
      },
    );
  }
}

export default new CommonApi('commondata');
