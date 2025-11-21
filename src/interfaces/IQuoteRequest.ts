import { UUID } from 'crypto';
import { IFileMetaData } from './IFileMetaData.js';

 interface IQuoteProductRequest {
  productId: number;
  detail: string;
  quantity: number;
  price: number;
  subtotal: number;
  saleTaxRate: number;
  saleTaxAmount: number;
  discount: number;
  total: number;
}

export interface IQuoteRequest {
  quoteDate: Date;
  dueDate: Date;
  currencyId: number;
  businessPartnerId: number;
  businessPartnerRequesterId: number;
  customerName: string;
  customerMail: string;
  customerPhone: string;
  businessPartnerAddressId: number;
  note: string;
  quoteReference: string;
  centroId: number;
  priorityId: number;
  createdUserId: number;
  assignedUserId: number;
  requestedDateTime: Date;
  scheduledDateTime: Date;
  requestId: number;
  quoteProducts: IQuoteProductRequest[]; // Added field for associated QuoteProducts
}

export interface IQuoteRequestToUpdate {
  quoteDate: Date;
  dueDate: Date;
  currencyId: number;
  businessPartnerId: number;
  businessPartnerRequesterId: number;
  customerName: string;
  customerMail: string;
  customerPhone: string;
  businessPartnerAddressId: number;
  note: string;
  quoteReference: string;
  centroId: number;
  priorityId: number;
  createdUserId: number;
  assignedUserId: number;
  requestedDateTime: Date;
  scheduledDateTime: Date;
  requestId: number;
  quoteProducts: IQuoteProductRequest[];
  filesMetaData: IFileMetaData[];
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteRequest:
 *       type: object
 *       properties:
 *         quoteDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T08:00:00Z"
 *           description: Fecha de la cotización.
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: "2024-02-15T08:00:00Z"
 *           description: Fecha de vencimiento de la cotización.
 *         currencyId:
 *           type: integer
 *           example: 1
 *           description: ID de la moneda utilizada en la cotización.
 *         businessPartnerId:
 *           type: integer
 *           example: 101
 *           description: ID del socio de negocios asociado a la cotización.
 *         businessPartnerRequesterId:
 *           type: integer
 *           example: 202
 *           description: ID del solicitante de la cotización.
 *         customerName:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del cliente.
 *         customerMail:
 *           type: string
 *           example: "johndoe@example.com"
 *           description: Correo electrónico del cliente.
 *         customerPhone:
 *           type: string
 *           example: "+1-555-555-5555"
 *           description: Número de teléfono del cliente.
 *         businessPartnerAddressId:
 *           type: integer
 *           example: 303
 *           description: ID de la dirección del socio de negocios.
 *         note:
 *           type: string
 *           example: "This is a note regarding the quote."
 *           description: Nota adicional sobre la cotización.
 *         quoteReference:
 *           type: string
 *           example: "REF12345"
 *           description: Referencia de la cotización.
 *         centroId:
 *           type: integer
 *           example: 404
 *           description: ID del centro asociado a la cotización.
 *         priorityId:
 *           type: integer
 *           example: 1
 *           description: ID de la prioridad de la cotización.
 *         createdUserId:
 *           type: integer
 *           example: 1
 *           description: ID del usuario que creó la cotización.
 *         assignedUserId:
 *           type: integer
 *           example: 2
 *           description: ID del usuario asignado a la cotización.
 *         requestedDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-10T08:00:00Z"
 *           description: Fecha y hora en que se solicitó la cotización.
 *         scheduledDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-20T08:00:00Z"
 *           description: Fecha y hora programada para la cotización.
 *         requestId:
 *           type: integer
 *           example: 789
 *           description: ID de la solicitud relacionada con la cotización.
 *         quoteProducts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IQuoteProductRequest'
 *           description: Lista de productos asociados a la cotización.
 *       required:
 *         - quoteDate
 *         - dueDate
 *         - currencyId
 *         - businessPartnerId
 *         - customerName
 *         - businessPartnerAddressId
 *         - priorityId
 *         - createdUserId
 *         - quoteProducts
 *       description: Modelo de solicitud para crear una nueva cotización.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteProductRequest:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1001
 *           description: ID del producto asociado a la cotización.
 *         detail:
 *           type: string
 *           example: "Detalles del producto A"
 *           description: Descripción del producto.
 *         quantity:
 *           type: number
 *           example: 2
 *           description: Cantidad de productos cotizados.
 *         price:
 *           type: number
 *           format: float
 *           example: 150.00
 *           description: Precio unitario del producto.
 *         subtotal:
 *           type: number
 *           format: float
 *           example: 300.00
 *           description: Subtotal calculado para el producto (precio x cantidad).
 *         saleTaxRate:
 *           type: number
 *           format: float
 *           example: 18.0
 *           description: Porcentaje de impuesto sobre la venta aplicado al producto.
 *         saleTaxAmount:
 *           type: number
 *           format: float
 *           example: 54.00
 *           description: Monto del impuesto sobre la venta aplicado al producto.
 *         discount:
 *           type: number
 *           format: float
 *           example: 10.00
 *           description: Descuento aplicado al producto.
 *         total:
 *           type: number
 *           format: float
 *           example: 344.00
 *           description: Monto total del producto después de impuestos y descuentos.
 *       required:
 *         - productId
 *         - detail
 *         - quantity
 *         - price
 *         - subtotal
 *         - saleTaxRate
 *         - saleTaxAmount
 *         - total
 *       description: Detalles de un producto en la solicitud de cotización.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteRequestToUpdate:
 *       type: object
 *       properties:
 *         quoteDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T08:00:00Z"
 *           description: Fecha de la cotización.
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: "2024-02-15T08:00:00Z"
 *           description: Fecha de vencimiento de la cotización.
 *         currencyId:
 *           type: integer
 *           example: 1
 *           description: ID de la moneda utilizada en la cotización.
 *         businessPartnerId:
 *           type: integer
 *           example: 101
 *           description: ID del socio de negocios asociado a la cotización.
 *         businessPartnerRequesterId:
 *           type: integer
 *           example: 202
 *           description: ID del solicitante de la cotización.
 *         customerName:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del cliente.
 *         customerMail:
 *           type: string
 *           example: "johndoe@example.com"
 *           description: Correo electrónico del cliente.
 *         customerPhone:
 *           type: string
 *           example: "+1-555-555-5555"
 *           description: Número de teléfono del cliente.
 *         businessPartnerAddressId:
 *           type: integer
 *           example: 303
 *           description: ID de la dirección del socio de negocios.
 *         note:
 *           type: string
 *           example: "This is a note regarding the quote."
 *           description: Nota adicional sobre la cotización.
 *         quoteReference:
 *           type: string
 *           example: "REF12345"
 *           description: Referencia de la cotización.
 *         centroId:
 *           type: integer
 *           example: 404
 *           description: ID del centro asociado a la cotización.
 *         priorityId:
 *           type: integer
 *           example: 1
 *           description: ID de la prioridad de la cotización.
 *         createdUserId:
 *           type: integer
 *           example: 1
 *           description: ID del usuario que creó la cotización.
 *         assignedUserId:
 *           type: integer
 *           example: 2
 *           description: ID del usuario asignado a la cotización.
 *         requestedDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-10T08:00:00Z"
 *           description: Fecha y hora en que se solicitó la cotización.
 *         scheduledDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-20T08:00:00Z"
 *           description: Fecha y hora programada para la cotización.
 *         requestId:
 *           type: integer
 *           example: 789
 *           description: ID de la solicitud relacionada con la cotización.
 *         quoteProducts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IQuoteProductRequest'
 *           description: Lista de productos asociados a la cotización.
 *         filesMetaData:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IFileMetaData'
 *           description: Metadatos de archivos adjuntos a la cotización.
 *       required:
 *         - quoteDate
 *         - dueDate
 *         - currencyId
 *         - businessPartnerId
 *         - customerName
 *         - businessPartnerAddressId
 *         - priorityId
 *         - createdUserId
 *         - quoteProducts
 *       description: Modelo de solicitud para actualizar una cotización existente.
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     IFileMetaData:
 *       type: object
 *       properties:
 *         fileId:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *           description: ID único del archivo.
 *         fileName:
 *           type: string
 *           example: "document.pdf"
 *           description: Nombre del archivo.
 *         fileType:
 *           type: string
 *           example: "application/pdf"
 *           description: Tipo de archivo MIME.
 *         fileSize:
 *           type: number
 *           example: 1024
 *           description: Tamaño del archivo en bytes.
 *         fileUrl:
 *           type: string
 *           example: "https://example.com/files/document.pdf"
 *           description: URL donde se encuentra el archivo.
 *       required:
 *         - fileId
 *         - fileName
 *         - fileType
 *         - fileSize
 *         - fileUrl
 *       description: Metadatos de un archivo asociado a una cotización.
 */


