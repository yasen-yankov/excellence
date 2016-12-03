import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = [
            {
                id: 'sitefinity', 
                name: 'Sitefinity',
                subProducts: [
                    {
                        id: 'sitefinity-core',
                        name: 'Sitefinity Core'
                    },
                    {
                        id: 'feather',
                        name: 'Feather'
                    },
                    {
                        id: 'dec',
                        name: 'DEC'
                    }
                ]
            }
        ];

        let releases = [
            {
                id: '100', 
                name: '10.0',
                Product: products[0]
            },
            {
                id: '92-fixes', 
                name: '9.2 Fixes',
                Product: products[0]
            },
        ];

        return { products, releases };
    }
}