const be_config = {
  host: '104.154.119.100',
  port:8080
};

const api = `http://${be_config.host}:${be_config.port}`;

export const environment = {
  production: true,
  ENDPOINT_SOCKET:api,
  ENDPOINT_CHAT : api+'/chat',
  ENDPOINT_USER : api+'/user',
  ENDPOINT_PUBLIC : api+'/public',
  ENDPOINT_IMAGES:api+'/images'
};
