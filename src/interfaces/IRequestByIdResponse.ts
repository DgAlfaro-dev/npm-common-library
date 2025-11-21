import { ICatalogModel } from "./ICatalogModel.js"

export interface IRequestByIdResponse {
    requestId: number,
    relatedRequestId: number,
    requestSubCategory: IRequestSubCategory,
    requestCategory: IRequestCategory,
    requestType: IRequestType,
    requestedBy: IRequestedBy,
    businessPartners: IBusinessPartner,
    businessPartnerAddress: IBusinessPartnerAddres,
    subject: string,
    note: string,
    status: {
        name: string,
        description: string 
    },
    serviceId: number,
    quoteDocNumber: number,
    indInvoiced: boolean,
    invoiceDocNumber: number,
    indPayed: boolean,
    receiptDocNumber: number,
    indPriority: ICatalogModel,
    assignedUser: IUsuario,
    assignedSupportGroup: IAssignedSuppertGroup,
    reportedDateTime: Date,
    requestByDateTime: Date,
    scheduledDateTime: Date,
    supplierId: number,
}

interface IRequestedBy {
    businessPartnerId: number,
    name: string
}

interface IBusinessPartnerAddres {
    businessPartnerAddressId: number,
    businessPartnerId: number,
    addressType: string,
    country: string,
    state: string,
    city: string,
    indMain: boolean,
    dirName: string
}

interface IBusinessPartner {
  businessPartnerId: number,
  firstName: string,
  secondName: string,
  lastName: string,
  sLastName: string,  
}

interface IRequestSubCategory {
    id: number,
    name: string,
}

interface IRequestCategory {
    id: number,
    name: string,
}

interface IRequestType {
    id: number,
    name: string,
}

interface IUsuario {
    usuarioId: number,
    loginUsr: string,
    email: string,
    nombre: string,
}

interface IAssignedSuppertGroup {
    supportGroupId: number,
    name: string,
    indActive: boolean,
    note: string
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestByIdResponse:
 *       type: object
 *       properties:
 *         requestId:
 *           type: integer
 *           example: 123
 *           description: ID único de la solicitud.
 *         relatedRequestId:
 *           type: integer
 *           example: 124
 *           description: ID de la solicitud relacionada.
 *         requestSubCategory:
 *           $ref: '#/components/schemas/IRequestSubCategory'
 *           description: Subcategoría de la solicitud.
 *         requestCategory:
 *           $ref: '#/components/schemas/IRequestCategory'
 *           description: Categoría de la solicitud.
 *         requestType:
 *           $ref: '#/components/schemas/IRequestType'
 *           description: Tipo de solicitud.
 *         requestedBy:
 *           $ref: '#/components/schemas/IRequestedBy'
 *           description: Información sobre la persona que solicitó.
 *         businessPartners:
 *           $ref: '#/components/schemas/IBusinessPartner'
 *           description: Información sobre el socio de negocios.
 *         businessPartnerAddress:
 *           $ref: '#/components/schemas/IBusinessPartnerAddress'
 *           description: Dirección del socio de negocios.
 *         subject:
 *           type: string
 *           example: "Asunto de la solicitud"
 *           description: Asunto de la solicitud.
 *         note:
 *           type: string
 *           example: "Nota sobre la solicitud"
 *           description: Nota adicional sobre la solicitud.
 *         status:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Pendiente"
 *               description: Nombre del estado.
 *             description:
 *               type: string
 *               example: "La solicitud está pendiente"
 *               description: Descripción del estado.
 *         serviceId:
 *           type: integer
 *           example: 789
 *           description: ID del servicio relacionado.
 *         quoteDocNumber:
 *           type: integer
 *           example: 4567
 *           description: Número del documento de cotización.
 *         indInvoiced:
 *           type: boolean
 *           example: true
 *           description: Indica si la solicitud ha sido facturada.
 *         invoiceDocNumber:
 *           type: integer
 *           example: 8910
 *           description: Número del documento de factura.
 *         indPayed:
 *           type: boolean
 *           example: true
 *           description: Indica si la solicitud ha sido pagada.
 *         receiptDocNumber:
 *           type: integer
 *           example: 11213
 *           description: Número del documento de recibo.
 *         indPriority:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Prioridad de la solicitud.
 *         assignedUser:
 *           $ref: '#/components/schemas/IUsuario'
 *           description: Usuario asignado a la solicitud.
 *         assignedSupportGroup:
 *           $ref: '#/components/schemas/IAssignedSupportGroup'
 *           description: Grupo de soporte asignado a la solicitud.
 *         reportedDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T10:00:00Z"
 *           description: Fecha y hora en que se reportó la solicitud.
 *         requestByDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-02T10:00:00Z"
 *           description: Fecha y hora en que se solicitó la solicitud.
 *         scheduledDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-03T10:00:00Z"
 *           description: Fecha y hora programada para la solicitud.
 *         supplierId:
 *           type: integer
 *           example: 5678
 *           description: ID del proveedor relacionado.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestedBy:
 *       type: object
 *       properties:
 *         businessPartnerId:
 *           type: integer
 *           example: 123
 *           description: ID del socio de negocios que realizó la solicitud.
 *         name:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del socio de negocios que realizó la solicitud.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerAddress:
 *       type: object
 *       properties:
 *         businessPartnerAddressId:
 *           type: integer
 *           example: 123
 *           description: ID de la dirección del socio de negocios.
 *         businessPartnerId:
 *           type: integer
 *           example: 456
 *           description: ID del socio de negocios.
 *         addressType:
 *           type: string
 *           example: "Residencial"
 *           description: Tipo de dirección.
 *         country:
 *           type: string
 *           example: "Estados Unidos"
 *           description: País de la dirección.
 *         state:
 *           type: string
 *           example: "California"
 *           description: Estado de la dirección.
 *         city:
 *           type: string
 *           example: "Los Ángeles"
 *           description: Ciudad de la dirección.
 *         indMain:
 *           type: boolean
 *           example: true
 *           description: Indica si es la dirección principal.
 *         dirName:
 *           type: string
 *           example: "Casa de John"
 *           description: Nombre de la dirección.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartner:
 *       type: object
 *       properties:
 *         businessPartnerId:
 *           type: integer
 *           example: 123
 *           description: ID del socio de negocios.
 *         firstName:
 *           type: string
 *           example: "John"
 *           description: Primer nombre del socio de negocios.
 *         secondName:
 *           type: string
 *           example: "A."
 *           description: Segundo nombre del socio de negocios.
 *         lastName:
 *           type: string
 *           example: "Doe"
 *           description: Primer apellido del socio de negocios.
 *         sLastName:
 *           type: string
 *           example: "Smith"
 *           description: Segundo apellido del socio de negocios.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestSubCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 123
 *           description: ID de la subcategoría de la solicitud.
 *         name:
 *           type: string
 *           example: "Subcategoría A"
 *           description: Nombre de la subcategoría de la solicitud.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 123
 *           description: ID de la categoría de la solicitud.
 *         name:
 *           type: string
 *           example: "Categoría A"
 *           description: Nombre de la categoría de la solicitud.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestType:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 123
 *           description: ID del tipo de solicitud.
 *         name:
 *           type: string
 *           example: "Tipo A"
 *           description: Nombre del tipo de solicitud.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IUsuario:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: integer
 *           example: 123
 *           description: ID del usuario.
 *         loginUsr:
 *           type: string
 *           example: "johndoe"
 *           description: Nombre de usuario para iniciar sesión.
 *         email:
 *           type: string
 *           example: "johndoe@example.com"
 *           description: Correo electrónico del usuario.
 *         nombre:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre completo del usuario.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IAssignedSupportGroup:
 *       type: object
 *       properties:
 *         supportGroupId:
 *           type: integer
 *           example: 123
 *           description: ID del grupo de soporte asignado.
 *         name:
 *           type: string
 *           example: "Soporte Técnico"
 *           description: Nombre del grupo de soporte asignado.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si el grupo de soporte está activo.
 *         note:
 *           type: string
 *           example: "Grupo especializado en soporte técnico."
 *           description: Nota adicional sobre el grupo de soporte.
 */



