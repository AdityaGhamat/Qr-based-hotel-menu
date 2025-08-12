import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  db_url: process.env.DATABASE_URL,
  autoLoadEntities: process.env.DATABASE_AUTOLOAD === 'true' ? true : false,
  synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
  logging: process.env.DATABASE_LOGGING === 'true' ? true : false,
}));
