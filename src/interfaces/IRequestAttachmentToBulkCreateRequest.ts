import { UUID } from "crypto"

export interface IRequestAttachmentToBulkCreateRequest {
    requestId: number,
    fileName: string,
    fileInternalNote: string,
    fileUrl: string,
    requestHistoryId: number
    idFileType: UUID
}