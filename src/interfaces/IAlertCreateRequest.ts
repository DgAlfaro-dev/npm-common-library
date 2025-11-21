export interface IAlertCreateRequest {
    notificationTypeId: number,
    usuarioId: number,
    title: string,
    detail: string,
    dateTimeSent: Date,
    dateTimeReceived: Date,
    persistentAlert: boolean,
    dateTimeReaded: Date,
    indActivo: boolean
}