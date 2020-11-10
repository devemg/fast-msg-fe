const api = 'http://172.17.0.2:8080';

export const environment = {
  production: true,
  ENDPOINT_SOCKET:api,
  ENDPOINT_CHAT : api+'/chat',
  ENDPOINT_USER : api+'/user',
  ENDPOINT_PUBLIC : api+'/public',
  ENDPOINT_IMAGES:api+'/images'
};
