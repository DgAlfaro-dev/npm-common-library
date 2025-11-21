export interface ICreateAlertRequest {
    notificationTypeId: number,
    agendaId?: number,
    alerNumber?: number,
    messageRecordId?: number,
    title: string,
    detail: string,
    scheduledDateTime: Date,
    persistentAlert: boolean,
}