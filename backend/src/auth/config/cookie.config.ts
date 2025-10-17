import { registerAs } from '@nestjs/config';
export default registerAs('cookie', () => ({
  httpOnly: process.env.HTTP_ONLY,
  secure: process.env.SECURE,
  baseTokenAge: process.env.MAX_AGE_BASETOKEN,
  refreshTokenAge: process.env.MAX_AGE_REFRESH_TOKEN,
}));
