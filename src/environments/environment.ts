// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // MOCK-URLS
  officesUrlMock: 'http://www.mocky.io/v2/5af994302e00006000278cb5',
  banksUrlMock: 'http://www.mocky.io/v2/5af578873100006c00002486',

  // API-RAMI-URLS
  officesUrlRami: 'http://192.168.9.42:8080/api/offices',
  banksUrlRami: 'http://192.168.9.42:8080/api/atms',

  // API-URLS
  officesUrl: 'https://apiuat.evobanco.com:8443/evobanco/digital/atm/v2/offices',
  banksUrl: 'https://apiuat.evobanco.com:8443/evobanco/digital/atm/v2/banks',
};
