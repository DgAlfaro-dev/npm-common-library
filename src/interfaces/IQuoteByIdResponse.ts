import { IQuoteProductRequest } from "./IQuoteProductRequest.js";

export interface IQuoteByIdResponse {
  quoteId: number;
  quoteDate: Date;
  dueDate: Date;
  elapsedTime: string;
  status: {
    name: string;
    description: string;
  };
  assignedUser: IAssignedUser;
  totalAmount: number;
  currency: currency;
  businessPartnerId: number;
  businessPartner: string;
  businessPartnerRequesterId: number;
  businessPartnerRequester: string;
  customerName: string;
  customerMail: string;
  customerPhone: string;
  businessPartnerAddress: IBusinessPartnerAddress;
  note: string;
  quoteReference: string;
  priorityColor: string;
  priorityId: number;
  priority: string;
  createdUser: string;
  asignedUser: string;
  requestedDateTime: Date;
  scheduledDateTime: Date;
  requestId: number;
  center: ICenter;
  quoteProducts: IQuoteProduct[];
  quoteHistory: IQuoteHistory[];
}

interface ICenter {
  centroId: number;
  nombre: string;
}
interface IAssignedUser {
  usuarioId: number;
  nombre: string;
}

export interface IQuoteHistory {
  quoteHistoryId: number;
  quoteId: number;
  eventName: string;
  indStatusOld: string;
  indStatusNew: string;
  detail: string;
  eventDateTime: Date;
  IP: string;
  user: string;
  eventDeviceInfo: string;
  internalNote: boolean;
}

export interface IQuoteProduct {
  productId: number;
  productName: string;
  detail: string;
  quantity: number;
  price: number;
  subtotal: number;
  saleTaxRate: number;
  saleTaxAmount: number;
  discount: number;
  total: number;
}

// interface product {
//   serviceId: number;
//   // indPlan: boolean,
//   productName: string;
//   indActive: boolean;
// }

interface currency {
  currencyId: number;
  ISO2Code: string;
  ISO3Code: string;
  symbol: string;
  name: string;
  indActive: boolean;
}

interface IBusinessPartnerAddress {
  addressType: string;
  indMain: boolean;
  dirName: string;
  country: string;
  state: string;
  city: string;
  dirLine1: string;
  dirLine2: string;
  zipCode: string;
  moreDetail: string;
  referenceGps: string;
  geoReferenceGps: string;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteByIdResponse:
 *       type: object
 *       properties:
 *         quoteId:
 *           type: integer
 *           example: 123
 *           description: ID de la cotización.
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
 *         elapsedTime:
 *           type: string
 *           example: "2 days"
 *           description: Tiempo transcurrido desde la creación de la cotización.
 *         status:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Pending"
 *               description: Estado actual de la cotización.
 *             description:
 *               type: string
 *               example: "Awaiting approval"
 *               description: Descripción del estado actual de la cotización.
 *         assignedUser:
 *           $ref: '#/components/schemas/IAssignedUser'
 *         totalAmount:
 *           type: number
 *           format: float
 *           example: 1500.00
 *           description: Monto total de la cotización.
 *         currency:
 *           $ref: '#/components/schemas/currency'
 *         businessPartnerId:
 *           type: integer
 *           example: 101
 *           description: ID del socio de negocios asociado a la cotización.
 *         businessPartner:
 *           type: string
 *           example: "Business Partner A"
 *           description: Nombre del socio de negocios.
 *         businessPartnerRequesterId:
 *           type: integer
 *           example: 202
 *           description: ID del solicitante de la cotización.
 *         businessPartnerRequester:
 *           type: string
 *           example: "Requester B"
 *           description: Nombre del solicitante de la cotización.
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
 *         businessPartnerAddress:
 *           $ref: '#/components/schemas/IBusinessPartnerAddress'
 *         note:
 *           type: string
 *           example: "This is a note regarding the quote."
 *           description: Nota adicional sobre la cotización.
 *         quoteReference:
 *           type: string
 *           example: "REF12345"
 *           description: Referencia de la cotización.
 *         priorityColor:
 *           type: string
 *           example: "#FF0000"
 *           description: Color asociado a la prioridad de la cotización.
 *         priorityId:
 *           type: integer
 *           example: 1
 *           description: ID de la prioridad de la cotización.
 *         priority:
 *           type: string
 *           example: "High"
 *           description: Nombre de la prioridad de la cotización.
 *         createdUser:
 *           type: string
 *           example: "Jane Doe"
 *           description: Nombre del usuario que creó la cotización.
 *         asignedUser:
 *           type: string
 *           example: "John Smith"
 *           description: Nombre del usuario asignado a la cotización.
 *         requestedDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T08:00:00Z"
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
 *         center:
 *           $ref: '#/components/schemas/ICenter'
 *         quoteProducts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IQuoteProductRequest'
 *         quoteHistory:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IQuoteHistory'
 *       required:
 *         - quoteId
 *         - quoteDate
 *         - dueDate
 *         - elapsedTime
 *         - status
 *         - assignedUser
 *         - totalAmount
 *         - currency
 *         - businessPartnerId
 *         - businessPartner
 *         - customerName
 *         - customerMail
 *         - customerPhone
 *         - businessPartnerAddress
 *         - priorityColor
 *         - priorityId
 *         - priority
 *         - createdUser
 *         - requestedDateTime
 *         - quoteProducts
 *       description: Respuesta detallada de una cotización por ID.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     IAssignedUser:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: integer
 *           example: 1
 *           description: ID del usuario asignado.
 *         nombre:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del usuario asignado.
 *       required:
 *         - usuarioId
 *         - nombre
 *       description: Información del usuario asignado a la cotización.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ICenter:
 *       type: object
 *       properties:
 *         centroId:
 *           type: integer
 *           example: 101
 *           description: ID del centro asociado a la cotización.
 *         nombre:
 *           type: string
 *           example: "Centro A"
 *           description: Nombre del centro asociado a la cotización.
 *       required:
 *         - centroId
 *         - nombre
 *       description: Información del centro asociado a la cotización.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerAddress:
 *       type: object
 *       properties:
 *         addressType:
 *           type: string
 *           example: "Home"
 *           description: Tipo de dirección.
 *         indMain:
 *           type: boolean
 *           example: true
 *           description: Indica si es la dirección principal.
 *         dirName:
 *           type: string
 *           example: "Casa de John"
 *           description: Nombre de la dirección.
 *         country:
 *           type: string
 *           example: "USA"
 *           description: País de la dirección.
 *         state:
 *           type: string
 *           example: "California"
 *           description: Estado o provincia de la dirección.
 *         city:
 *           type: string
 *           example: "Los Angeles"
 *           description: Ciudad de la dirección.
 *         dirLine1:
 *           type: string
 *           example: "1234 Elm Street"
 *           description: Primera línea de la dirección.
 *         dirLine2:
 *           type: string
 *           example: "Apt 101"
 *           description: Segunda línea de la dirección.
 *         zipCode:
 *           type: string
 *           example: "90001"
 *           description: Código postal de la dirección.
 *         moreDetail:
 *           type: string
 *           example: "Cerca del parque central"
 *           description: Detalles adicionales sobre la dirección.
 *         referenceGps:
 *           type: string
 *           example: "34.052235, -118.243683"
 *           description: Referencia GPS de la dirección.
 *         geoReferenceGps:
 *           type: string
 *           example: "34.052235, -118.243683"
 *           description: Georeferencia GPS de la dirección.
 *       required:
 *         - addressType
 *         - indMain
 *         - country
 *         - state
 *         - city
 *         - dirLine1
 *         - zipCode
 *       description: Información detallada de la dirección del socio de negocios.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteHistory:
 *       type: object
 *       properties:
 *         quoteHistoryId:
 *           type: integer
 *           example: 1
 *           description: ID del historial de la cotización.
 *         quoteId:
 *           type: integer
 *           example: 123
 *           description: ID de la cotización asociada.
 *         eventName:
 *           type: string
 *           example: "Creación"
 *           description: Nombre del evento en la historia de la cotización.
 *         indStatusOld:
 *           type: string
 *           example: "Pendiente"
 *           description: Estado anterior de la cotización.
 *         indStatusNew:
 *           type: string
 *           example: "Aprobado"
 *           description: Nuevo estado de la cotización.
 *         detail:
 *           type: string
 *           example: "La cotización fue aprobada."
 *           description: Detalles del evento en la historia.
 *         eventDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-20T08:00:00Z"
 *           description: Fecha y hora del evento.
 *         IP:
 *           type: string
 *           example: "192.168.1.1"
 *           description: Dirección IP desde la cual se realizó el evento.
 *         user:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del usuario que realizó el evento.
 *         eventDeviceInfo:
 *           type: string
 *           example: "Chrome on Windows"
 *           description: Información sobre el dispositivo utilizado para realizar el evento.
 *         internalNote:
 *           type: boolean
 *           example: false
 *           description: Indica si la nota es interna.
 *       required:
 *         - quoteHistoryId
 *         - quoteId
 *         - eventName
 *         - indStatusOld
 *         - indStatusNew
 *         - eventDateTime
 *       description: Detalles del historial de eventos de una cotización.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteProduct:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1001
 *           description: ID del producto asociado a la cotización.
 *         productName:
 *           type: string
 *           example: "Producto A"
 *           description: Nombre del producto.
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
 *         - productName
 *         - quantity
 *         - price
 *         - subtotal
 *         - saleTaxRate
 *         - saleTaxAmount
 *         - total
 *       description: Detalles de un producto cotizado.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     currency:
 *       type: object
 *       properties:
 *         currencyId:
 *           type: integer
 *           example: 1
 *           description: ID de la moneda.
 *         ISO2Code:
 *           type: string
 *           example: "US"
 *           description: Código ISO de 2 letras de la moneda.
 *         ISO3Code:
 *           type: string
 *           example: "USD"
 *           description: Código ISO de 3 letras de la moneda.
 *         symbol:
 *           type: string
 *           example: "$"
 *           description: Símbolo de la moneda.
 *         name:
 *           type: string
 *           example: "Dólar estadounidense"
 *           description: Nombre completo de la moneda.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si la moneda está activa.
 *       required:
 *         - currencyId
 *         - ISO3Code
 *         - symbol
 *         - name
 *       description: Información sobre la moneda utilizada en la cotización.
 */
