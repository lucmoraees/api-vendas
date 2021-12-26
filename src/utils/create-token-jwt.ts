import jwt from 'jsonwebtoken';
import authConfig from '../configs/auth';

const createTokenJwt = (params: string | object): string => jwt.sign(
  params,
  authConfig.jwt.secret,
  {
    expiresIn: authConfig.jwt.expiresIn,
  },
);

export default createTokenJwt;
