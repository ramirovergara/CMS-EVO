import {Injectable} from '@angular/core';

@Injectable()
export class OfficeTablesService {

  smartTableData = [
    {
      address: 'Madrid, España',
      latitude: 40.4167754,
      longitude: -3.7037901999999576,
      bank: 'BBVA',
    },
    {
      address: 'Barcelona, España',
      latitude: 41.3850639,
      longitude: 2.1734034999999494,
      bank: 'Banco Sabadell',
    },
    {
      address: 'Valencia, España',
      latitude: 39.4699075,
      longitude: -0.3762881000000107,
      bank: 'Banco Santander',
    },
    {
      address: 'Bilbao, España',
      latitude: 43.2630126,
      longitude: -2.9349852000000283,
      bank: 'BBK',
    },
    {
      address: 'Sevilla, España',
      latitude: 37.3890924,
      longitude: -5.984458899999936,
      bank: 'ING Direct',
    },
    {
      address: 'La Coruña, España',
      latitude: 43.3623436,
      longitude: -8.411540100000025,
      bank: 'Bankinter',
    },
    {
      address: 'Valladolid, España',
      latitude: 41.652251,
      longitude: -4.724532100000033,
      bank: 'Banco Santander',
    },
    {
      address: 'Toledo, España',
      latitude: 39.8628316,
      longitude: -4.02732309999999,
      bank: 'Bankia',
    },
    {
      address: 'Badajoz, España',
      latitude: 38.8794495,
      longitude: -6.970653500000026,
      bank: 'Banco Santander',
    },
    {
      address: 'Málaga, España',
      latitude: 36.7212737,
      longitude: -4.42139880000002,
      bank: 'BBVA',
    },
    {
      address: 'Salamanca, España',
      latitude: 40.9701039,
      longitude: -5.663539700000001,
      bank: 'Bankinter',
    },
    {
      address: 'Tarragona, España',
      latitude: 41.1188827,
      longitude: 1.2444908999999598,
      bank: 'La Caixa',
    },
    {
      address: 'Pamplona, España',
      latitude: 42.812526,
      longitude: -1.645774500000016,
      bank: 'Kutxabank',
    },
    {
      address: 'Zamora, España',
      latitude: 41.5034712,
      longitude: -5.746787899999958,
      bank: 'BBVA',
    },
    {
      address: 'Cáceres, España',
      latitude: 39.4752765,
      longitude: -6.3724247000000105,
      bank: 'Banco Santander',
    },
    {
      address: 'Granada, España',
      latitude: 37.1773363,
      longitude: -3.5985570999999936,
      bank: 'ING Direct',
    },
    {
      address: 'Gijón, España',
      latitude: 43.5322015,
      longitude: -5.661119500000041,
      bank: 'Bankinter',
    },
    {
      address: 'Murcia, España',
      latitude: 37.9922399,
      longitude: -1.1306544000000258,
      bank: 'BBVA',
    },
    {
      address: 'Vigo, España',
      latitude: 42.24059889999999,
      longitude: -8.720726799999966,
      bank: 'Banco Santander',
    },
    {
      address: 'Santander, España',
      latitude: 43.46230569999999,
      longitude: -3.8099803000000065,
      bank: 'Bankinter',
    },
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.smartTableData);
      }, 2000);
    });
  }
}
