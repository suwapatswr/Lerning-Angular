import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styles: [`
    //     .online {
    //         color: green;
    //         padding: 20px;
    //         margin: 10px;
    //         border: 1px solid green; 
    //     }

    //     .offline {
    //         color: red;
    //         padding: 20px;
    //         margin: 10px;
    //         border: 1px solid red; 
    //     }
    // `]
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    serverId: number = 1;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'palegreen' : 'mistyrose';
    }
}