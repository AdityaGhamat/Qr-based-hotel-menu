import { registerAs } from '@nestjs/config';
export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  accessTokenTTL: process.env.JWT_ACCESS_TOKEN_TTL,
  refreshTokenTTL: process.env.JWT_REFRESH_TOKEN_TTL,
}));
