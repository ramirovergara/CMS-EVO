export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'atms',
        data: {
          menu: {
            title: 'general.menu.atms',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.atms',
              }
            }
          },
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.linemaps',
              }
            }
          }
        ]
      },
      {
        path: 'oficces',
        data: {
          menu: {
            title: 'general.menu.offices',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.offices',
              }
            }
          },
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.linemaps',
              }
            }
          }
        ]
      }
    ]
  }
];
