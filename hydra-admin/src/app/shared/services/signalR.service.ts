import * as signalR from "@aspnet/signalr";

export class SignalRService {
    hubConnection: signalR.HubConnection;
    constructor(conn: string){ 
        this.hubConnection = new signalR.HubConnectionBuilder()
                                .withUrl(conn)
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
            callback(data);
        });
    }
}