import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'sql213.epizy.com',
        port: 3306,
        username: 'epiz_28948172',
        password: '19b65ORRlnJ',
        database: 'epiz_28948172_nestjsdb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
  },
];
