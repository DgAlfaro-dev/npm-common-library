import { UUID } from "crypto";

export interface IUploadFileAzureBlobStorage  {
    url: string,
    fileName: string,
    fileInternalNote: string,
    idFileType: UUID
}