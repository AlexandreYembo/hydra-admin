import * as signalR from "@aspnet/signalr";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface INegotiate{
    accessToken: string;
}

@Injectable()
export class SignalRService {
    hubConnection: signalR.HubConnection;
    negotiate: INegotiate;
    constructor(public http: HttpClient){
    }

    public startSignalR(conn: string, token: string, fnCallback: any){
      //  this.http.get<INegotiate>(`${conn}/api/negotiate`).subscribe(r => {
            let options = {
                accessTokenFactory: () => token//r.accessToken,
            }

            this.hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl(`${conn}/api`, options)
                                .build();

            this.hubConnection.start()
                          .then(()=> console.log('Connection started!'))
                          .catch(err => console.log('Error while starting connection: ' + err));

            fnCallback();
        //});
    }

    public listener(cmd: string, callback: any){
        this.hubConnection.on(cmd, (data) => {
            if(data == "null"){
                data = null;
                callback(data);
            }
            else{
                callback(JSON.parse(data));
            }
        });
        
        //UserID = 3e4df0e3-b135-4162-8bf6-89c848d800ec
        // this.hubConnection.invoke(cmd, '3e4df0e3-b135-4162-8bf6-89c848d800ec').then(data =>{
        //     if(data == "null"){
        //         data = null;
        //         callback(data);
        //     }
        //     else{
        //         callback(JSON.parse(data));
        //     }
        // });
    }
}