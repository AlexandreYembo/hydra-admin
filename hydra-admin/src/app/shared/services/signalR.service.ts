import * as signalR from "@aspnet/signalr";
import { parse } from 'path';

export class SignalRService {
    hubConnection: signalR.HubConnection;
    constructor(conn: string){ 
        this.hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl(conn)//, {accessTokenFactory: () => '343f7ad5-51d2-43ff-9a76-6da73fd1fe7d'})
                                .build();
        this.startSignalR();
                                
    }
    private startSignalR(){
        this.hubConnection.start()
                          .then(()=> console.log('Connection started!'))
                          .catch(err => console.log('Error while starting connection: ' + err));

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
    }
}