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
            path: 'atmTables',
            data: {
              menu: {
                title: 'general.menu.atms',
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
            path: 'officetables',
            data: {
              menu: {
                title: 'general.menu.offices',
              }
            }
          }
        ]
      }
    ]
  }
];
