import {translate} from '@shared';
import AxiosService from './axios.service';

export class BaseExtendApi {
  get<T>(uri: string, params: any): Promise<T | undefined> | undefined {
    return AxiosService.getAxiosInstance()
      ?.get(uri, {
        params,
      })
      .then(response => {
        return this.onSuccess<T>(response);
      })
      .catch(error => {
        return this.onFailed(error, uri);
      });
  }

  post(uri: string, data: any, params: any) {
    return AxiosService.getAxiosInstance()
      ?.post(uri, data, {
        params,
      })
      .then(response => {
        return response && response.data;
      })
      .catch(error => {
        return this.onFailed(error, uri);
      });
  }

  postUrlEncoded(uri: string, data: any) {
    var qs = require('qs');
    return AxiosService.getAxiosInstance()
      ?.post(uri, qs.stringify(data), {
        headers: {
          ...{'content-type': 'application/x-www-form-urlencoded'},
        },
      })
      .then((response: any) => response && response.data)
      .catch(error => {
        return this.onFailed(error, uri);
      });
  }

  onSuccess = <T>(response: any): T => {
    let ret = null;
    if (response?.status === 200) {
      ret = response.data;
    }
    return <T>ret;
  };

  onFailed = (error: any, url?: string) => {
    console.log('Error:', error, url);
    if (error.response) {
      let errorMessage: any;
      const response = error && error.response;
      const data = response?.data;
      if (response != null && response.status === 401) {
        // navigate ve trang home
        return;
      } else {
        // const errorDescription = data && data.error_description;
        const errorDescription = data;
        if (errorDescription) {
          errorMessage = errorDescription;
        } else {
          errorMessage = data?.detail || translate('error.generic');
        }
        return Promise.reject(errorMessage);
      }
    }
    return Promise.reject(translate('error.generic'));
  };
}
