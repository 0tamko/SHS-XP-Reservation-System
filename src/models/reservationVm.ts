export class reservationVm{
    constructor(
        public id: number|null,
        public name: string|null,
        public status: string|null,
        public state: string|null,
        public owner: string|null,
        public uptime: string|null,
        public version: string|null,
        public isLocked: boolean|null,
    ){}
}