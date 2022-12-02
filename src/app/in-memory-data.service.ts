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
        orderNo: '12345678', 
        searchDate: new Date('2022-11-05'), 
        effectiveDate: new Date('2022-10-05'), 
        propertyAddress: '247 Glenn Ave, Canonsburg, PA 15317',
        currentVesting: 'Lewis Joseph Hannah and Glenda Hannah, Husband and Wife',
        deeds: [{ id: 1,
          abstractId: 1,
          grantor: "Mr and Mrs. Presto",
          grantee: "Lewis Joseph Hannah and Glenda Hannah, Husband and Wife",
          datedDate: new Date('2006-11-05'),
          recordedDate: new Date('2006-11-15'),
          book: "1234",
          page: "5678",
          docNo: "12345678"
          }]
      },
      { id: 2, 
        orderNo: '2253789', 
        searchDate: new Date('2022-11-05'), 
        effectiveDate: new Date('2022-10-11'), 
        propertyAddress: '1019 Vermont Ave, Pittsburgh, PA 15234',
        currentVesting: '',
        deeds: [] 
      }
    ];

    return {abstracts};
  }

  genId(abstracts: TitleAbstract[]): number {
    return abstracts.length > 0 ? Math.max(...abstracts.map(TitleAbstract => TitleAbstract.id)) + 1 : 11;
  }
}