export interface IBusinessPartnerProductResponse {
  servicio: string;
  cantidad: number;
  precio: number;
  cargoTotal: number;
  planBase: boolean;
  pagoAutomatico: boolean;
  metodoPago: string;
  paymentMediaId: number;
  businessPartnerProductId: number;
  businessPartnerId: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerProductResponse:
 *       type: object
 *       properties:
 *         servicio:
 *           type: string
 *           example: "Servicio de Internet"
 *         cantidad:
 *           type: number
 *           example: 1
 *         precio:
 *           type: number
 *           format: float
 *           example: 100.0
 *         cargoTotal:
 *           type: number
 *           format: float
 *           example: 100.0
 *         planBase:
 *           type: boolean
 *           example: true
 *         pagoAutomatico:
 *           type: boolean
 *           example: true
 *         metodoPago:
 *           type: string
 *           example: "Tarjeta de Crédito"
 *       required:
 *         - servicio
 *         - cantidad
 *         - precio
 *         - cargoTotal
 *         - planBase
 *         - pagoAutomatico
 *         - metodoPago
 *       description: Respuesta de los productos asociados a un Socio de Negocios.
 */
