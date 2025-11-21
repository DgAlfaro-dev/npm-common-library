/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerPaymentMediaResponse
 *       type: object
 *       properties:
 *         paymentMediaId:
 *           type: integer
 *           example: 789
 *           description: ID único de la media de pago.
 *         name:
 *           type: string
 *           example: "Tarjeta Visa"
 *           description: Nombre asignado a la media de pago.
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
 *         number:
 *           type: string
 *           example: "4111111111111111"
 *           description: Número de la media de pago (oculto o enmascarado para seguridad).
 *         countryId:
 *           type: integer
 *           example: 1
 *           description: ID del país asociado a la media de pago.
 *         countryName:
 *           type: string
 *           example: "México"
 *           description: País asociado a la media de pago.
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
 *         brand:
 *           type: string
 *           example: "Visa"
 *           description: Marca de la tarjeta (Visa, MasterCard, etc.), si aplica.
 *       required:
 *         - name
 *         - indActive
 *         - indDefault
 *         - type
 *         - number
 *         - countryId
 *         - countryName
 *         - expirationDate
 *         - lastUsedBy
 *         - contactMail
 *         - contactFirstName
 *         - contactLastName
 *         - contactTelephone
 *         - brand
 *       description: Representa la solicitud para crear una nueva media de pago de un Socio de Negocios.
 */

export interface IBusinessPartnerPaymentMediaResponse {
  paymentMediaId: number;
  name: string;
  indActive: boolean;
  indDefault: boolean;
  type: string;
  number: string;
  countryId: number;
  countryName: string;
  expirationDate: Date;
  lastUsedBy: Date;
  contactMail: string;
  contactFirstName: string;
  contactLastName: string;
  contactTelephone: string;
  brand: string;
  panToken: string;
}
