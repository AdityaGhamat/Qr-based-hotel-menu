import * as Joi from 'joi';
export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('production', 'development', 'test', 'staging')
    .default('development'),

  //database environment validations
  DATABASE_URL: Joi.string().required(),
  DATABASE_SYNC: Joi.boolean().required(),
  DATABASE_AUTOLOAD: Joi.boolean().required(),

  //jwt environment validations
  JWT_SECRET: Joi.string().required(),
  JWT_ACCESS_TOKEN_TTL: Joi.number().required(),
  JWT_REFRESH_TOKEN_TTL: Joi.string().required(),
  JWT_TOKEN_AUDIENCE: Joi.string().required(),
  JWT_TOKEN_ISSUER: Joi.string().required(),
});
