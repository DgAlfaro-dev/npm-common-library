import { UUID } from "crypto";

export interface IFileMetaData {
    fileInternalNote: string,
    idFileType: UUID
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IFileMetaData:
 *       type: object
 *       properties:
 *         fileInternalNote:
 *           type: string
 *           example: "This is an internal note about the file."
 *           description: Nota interna asociada al archivo.
 *         idFileType:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *           description: UUID del tipo de archivo.
 *       required:
 *         - fileInternalNote
 *         - idFileType
 *       description: Metadatos de un archivo asociado a la reasignación o cotización.
 */
