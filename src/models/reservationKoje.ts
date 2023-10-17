export class reservationKoje{
    constructor(
        public id: number|null,
        public name: string|null,
        public status: string|null,
        public remark: string|null,
        public owner: string|null,
        public reservedTill: string|null,
        public version: string|null,
        public isLocked: boolean|null,
    ){}
}