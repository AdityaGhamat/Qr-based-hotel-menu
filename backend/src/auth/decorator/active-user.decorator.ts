import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AdminInfo } from '../interface/admin-info.interface';
import { REQUEST_USER_KEY } from '../constants/auth.constant';
export const ActiveUser = createParamDecorator(
  (field: keyof AdminInfo | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: AdminInfo = request[REQUEST_USER_KEY];
    return field ? user?.[field] : user;
  },
);
