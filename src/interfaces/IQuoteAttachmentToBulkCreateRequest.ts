import { UUID } from "crypto"

export interface IQuoteAttachmentToBulkCreateRequest {
    quoteId: number,
    fileName: string,
    fileInternalNote: string,
    fileUrl: string,
    quoteHistoryId: number
    idFileType: UUID
}


export interface IDeviceAttachmentToBulkCreate {
    deviceId: number,
    name: string,
    url: string,
    note: string,
    createdByUserId: number,
    createdByDate: Date,
}