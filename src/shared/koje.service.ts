import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { myKojeReservations } from 'src/models/myKojeReservations';
import { KojeMachines } from 'src/models/KojeMachines';
import { ResultMessage } from 'src/models/ResultMessage';

@Injectable({
  providedIn: 'root'
})
export class KojeService {
  private baseURL = 'https://skksc-xp-web.ad005.onehc.net/ReservationSystemDemoAPI/'; 

  constructor(private http: HttpClient) { }
  
  //hotovo
  public getKojeData(): Observable<KojeMachines[]> {
    return this.http.get<KojeMachines[]>(this.baseURL + 'kojemachines');
  }

  //hotovo
  public getKojeReservations(kojeName:string): Observable<myKojeReservations[]>{
    return this.http.get<myKojeReservations[]>(this.baseURL + 'kojenReservations/' + kojeName);
  }

  public setReservation(kojeName: string, userName: string, userMail: string, startDateTime: string, endDateTime: string): Observable<ResultMessage> {
    const httpOptions = {
      params: {
        'kojeName': kojeName,
        'userName': userName,
        'userMail': userMail,
        'startDateTime': startDateTime,
        'endDateTime': endDateTime
      }
    };
    return this.http.get<ResultMessage>(this.baseURL + 'setreservation/', httpOptions);
  }

  public setReservationSerie(kojeName: string, userName: string, userMail: string, startDate: string, endDate: string, startTime: string, endTime: string, days: string[]): Observable<ResultMessage> {
    const httpOptions = {
        "KojeName": kojeName,
        "UserName": userName,
        "UserMail": userMail,
        "StartDate": startDate,
        "EndDate": endDate,
        "StartTime": startTime,
        "EndTime": endTime,
        "DaysOfWeek": days
    }
    return this.http.post<ResultMessage>(this.baseURL + 'setreservationserie/', httpOptions);
  }

  //hotovo
  public removeCurrentReservation(kojeName: string): Observable<ResultMessage> {
    return this.http.get<ResultMessage>(this.baseURL + 'deletecurrentreservation/' + kojeName);
  }

  //hotovo
  public deleteReservation(reservationId: string): Observable<ResultMessage>{
    return this.http.get<ResultMessage>(this.baseURL + 'deletereservation/'+ reservationId);
  }

  //hotovo
  public getAllUserReservations(username: string): Observable<myKojeReservations[]>{
    const httpOptions = {
      params: {
        'username': username,
      }
    }
    return this.http.get<myKojeReservations[]>(this.baseURL + 'getalluserreservations/', httpOptions);
  }
  
  //hotovo
  public deleteAllUserReservations(username: string): Observable<ResultMessage>{
    const httpOptions = {
      params: {
        'username': username,
      }
    };
    return this.http.get<ResultMessage>(this.baseURL + 'deletereservationsforuser/', httpOptions);
  }

  //hotovo
  public setRemark(kojeName: string, remark: string, version: string): Observable<ResultMessage> {
    const httpOptions = {
      params: {
        'kojeName': kojeName,
        'remark': remark,
        'version': version
      }
    };
    return this.http.get<ResultMessage>(this.baseURL+ 'setremark/', httpOptions);
  }

  //hotovo
  public deleteRemark(kojeName: string): Observable<ResultMessage> {
    return this.http.get<ResultMessage>(this.baseURL + 'removeremark/' + kojeName);
  }
}
