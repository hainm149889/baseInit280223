import {CONSTANT} from '@configs';
import {RequestParamsTopDestination} from '@models';
import {BaseApi} from './base-api';

class CommonApi extends BaseApi {
  logIpRemote() {
    return this.get('https://api.ipify.org?format=json', {}, true)?.then(
      (response: any) => {
        return this.get('logipremote', {ip: response.ip});
      },
    );
  }
  getDestination(requestParams: RequestParamsTopDestination) {
    // let url = `${CONSTANT.BASE_URL}${CONSTANT.PATH.getTopDestination}`;
    return this.post('GetTopDestination', requestParams, {});
  }
}

export default new CommonApi('GeoAirport');
