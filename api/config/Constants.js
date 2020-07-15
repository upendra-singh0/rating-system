import accessEnv from '../utils/AccessEnv';
class Constants {
  static PORT = (defaultValue) => {
    return accessEnv('PORT', defaultValue);
  };

  static ACCESS_TOKEN_SECRET = () => {
    return accessEnv('ACCESS_TOKEN_SECRET');
  };

  static DB_USER = () => {
    return accessEnv('DB_USER');
  };

  static DB_PASSWORD = () => {
    return accessEnv('DB_PASSWORD');
  };

  static DB_HOST = () => {
    return accessEnv('DB_HOST');
  };

  static DB_PORT = () => {
    return accessEnv('DB_PORT');
  };

  static DB_NAME = () => {
    return accessEnv('DB_NAME');
  };
}

export default Constants;
