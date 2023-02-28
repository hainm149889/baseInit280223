import {AxiosResponse} from 'axios';

interface BaseResponse extends AxiosResponse {
  message: string;
}
