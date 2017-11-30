import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/journal-entries";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class JournalService {

  constructor(private http: Http) {}
  
// hacemos una peticion al serve paa que nos devuelva un json para comunicar el back con el front
  getJournalList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }
}
