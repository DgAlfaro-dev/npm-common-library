export interface IHistoryResponse {
    id: number,
    entityId: number,
    entityType: string,
    status: string,
    changedByUserId: number,
    changedByUserName: string,
    changedAt: Date,
}