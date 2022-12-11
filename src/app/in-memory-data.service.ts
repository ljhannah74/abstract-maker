import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TitleAbstract } from './abstract';
import { Deed } from './deed';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const abstracts: TitleAbstract[] = [
      { id: 1, 
        orderNo: 'EMD21-15002', 
        clientNo: '21NTMD66992-R',
        searchDate: new Date('2021-09-17'), 
        effectiveDate: new Date('2021-09-08'), 
        propertyAddress: '214 Kent Road, Glen Burnie, MD 21060',
        currentVesting: 'Jacob E. Patterson and Stephanie Anne Vermeule',
        deeds: [{ id: 1,
          abstractId: 1,
          grantor: "Edward Kim",
          grantee: "Jacob E. Patterson and Stephanie Anne Vermeule, as Joint Tenants and not as Tenants in Common",
          datedDate: new Date('2017-03-24'),
          recordedDate: new Date('2017-03-28'),
          book: "30772",
          page: "144",
          docNo: ""
          }]
      }
    ];

    return {abstracts};
  }

  genId(abstracts: TitleAbstract[]): number {
    return abstracts.length > 0 ? Math.max(...abstracts.map(TitleAbstract => TitleAbstract.id)) + 1 : 11;
  }
}