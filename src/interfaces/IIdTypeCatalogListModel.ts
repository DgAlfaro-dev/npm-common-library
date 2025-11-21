export interface IIdTypeCatalogListModel {
    catalogName: string;
    catalogId: string;
    catalogDescription: string;
    catalogCode: string;
    dataMask: string
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IIdTypeCatalogListModel:
 *       type: object
 *       properties:
 *         catalogName:
 *           type: string
 *           description: Nombre del catálogo.
 *         catalogId:
 *           type: string
 *           description: Identificador único del catálogo.
 *         catalogDescription:
 *           type: string
 *           description: Descripción del catálogo.
 *         catalogCode:
 *           type: string
 *           description: Código representativo del catálogo.
 *         dataMask:
 *           type: string
 *           description: Máscara de datos utilizada para formatos o validaciones específicas.
 *       required:
 *         - catalogName
 *         - catalogId
 *         - catalogDescription
 *         - catalogCode
 *         - dataMask
 *       description: Modelo que representa un elemento de lista de catálogo para tipos de identificación.
 */