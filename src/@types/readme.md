# Type
- Định nghĩa các kiểu dữ liệu có thể 1 số package được viết bằng javascript họ chưa có kiểu dữ liệu ở typescript cho nên mình phải tự định nghĩa để tránh các lỗi nhỏ nhỏ có thể xảy ra khi lập trình với typescript.
### Ví dụ:

``` typescript
declare module 'react-native-fbsdk-next'
```

- Định nghĩa một số type dùng chung cho dự án.
### Ví dụ:
``` typescript
import { AxiosResponse } from 'axios';

interface BaseResponse extends AxiosResponse {
    message: string;
}
```