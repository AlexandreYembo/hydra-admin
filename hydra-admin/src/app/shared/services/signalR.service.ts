import * as signalR from "@aspnet/signalr";
import { HttpClient } from '@angular/common/http';
//import { IdentityServerCli } from './identity-server-cli';

export class SignalRService {
    private http: HttpClient;
   ;
    hubConnection: signalR.HubConnection;
    constructor(conn: string, token: string){ 

        let options = {
            accessTokenFactory: () => token,
        }

        this.hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl(conn, options)
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