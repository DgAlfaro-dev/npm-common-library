/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerPaymentMediaRequest:
 *       type: object
 *       properties:
 *         businessPartnerId:
 *           type: integer
 *           example: 123
 *           description: ID del socio de negocios asociado con la media de pago.
 *         name:
 *           type: string
 *           example: "Tarjeta Visa"
 *           description: Nombre asignado a la media de pago.
 *         externalId:
 *           type: string
 *           example: "EXT-456789"
 *           description: ID externo de referencia para la media de pago.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indicador de si la media de pago está activa.
 *         indDefault:
 *           type: boolean
 *           example: false
 *           description: Indicador de si esta es la media de pago predeterminada.
 *         type:
 *           type: string
 *           example: "Tarjeta de Crédito"
 *           description: Tipo de la media de pago (ej. Tarjeta de Crédito, Débito, etc.).
 *         reference:
 *           type: string
 *           example: "Referencia única"
 *           description: Referencia adicional para la media de pago.
 *         number:
 *           type: string
 *           example: "4111111111111111"
 *           description: Número de la media de pago (oculto o enmascarado para seguridad).
 *         countryId:
 *           type: integer
 *           example: 1
 *           description: ID del país asociado a la media de pago.
 *         expirationDate:
 *           type: string
 *           format: date
 *           example: "2025-12-01"
 *           description: Fecha de expiración en formato MM/YY.
 *         lastUsedBy:
 *           type: string
 *           format: date-time
 *           example: "2024-11-01T10:00:00Z"
 *           description: Fecha y hora del último uso de la media de pago.
 *         contactMail:
 *           type: string
 *           format: email
 *           example: "usuario@ejemplo.com"
 *           description: Correo electrónico de contacto asociado a la media de pago.
 *         contactFirstName:
 *           type: string
 *           example: "Juan"
 *           description: Nombre del contacto asociado a la media de pago.
 *         contactLastName:
 *           type: string
 *           example: "Pérez"
 *           description: Apellido del contacto asociado a la media de pago.
 *         contactTelephone:
 *           type: string
 *           example: "+52 123 456 7890"
 *           description: Número telefónico del contacto.
 *         anotherAmount:
 *           type: number
 *           example: 500.0
 *           description: Monto adicional asociado a la media de pago, validado contra el monto de la factura.
 *       required:
 *         - businessPartnerId
 *         - name
 *         - externalId
 *         - indActive
 *         - indDefault
 *         - type
 *         - reference
 *         - number
 *         - countryId
 *         - expirationDate
 *         - contactMail
 *         - contactFirstName
 *         - contactLastName
 *         - contactTelephone
 *         - anotherAmount
 *       description: Representa la solicitud para crear una nueva media de pago de un Socio de Negocios.
 */
export interface IBusinessPartnerPaymentMediaRequest {
  businessPartnerId: number;
  name: string;
  externalId: string;
  indActive: boolean;
  indDefault: boolean;
  type: string;
  reference: string;
  number: string;
  countryId: number;
  expirationDate: Date;
  lastUsedBy?: Date;
  contactMail: string;
  contactFirstName: string;
  contactLastName: string;
  contactTelephone: string;
  anotherAmount: number;
}
