export class myVMReservations{
    constructor (
        public reservationIndex:number,
        public name: string | null,
        public version: string | null,
        public state: string | null,
        public uptime: string | null,
        public isLocked: boolean,
        public owner: string,
        public start: string,
        public end: string,
    ){}
}