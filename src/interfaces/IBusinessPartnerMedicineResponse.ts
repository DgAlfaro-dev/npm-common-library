import { ICatalogModel } from './ICatalogModel.js';

export interface IBusinessPartnerMedicine {
  businessPartnerMedicineId: number;
  medicineId: number;
  medicineName?: string;
  medicineGenericName?: string;
  medicinePresentation: ICatalogModel;
  dosisQuantity: number;
  measure: ICatalogModel;
  dosisFrequency: number;
  dosisFrequencyMeasure: ICatalogModel;
  dosisTime: number;
  dosisTimeMeasure: ICatalogModel;
  dosisMode: ICatalogModel;
  dosisNote?: string;
  startDateTime: Date;
  endDateTime?: Date;
  medicineNameCatalog: string;
  medicineGenericNameCatalog: string;
  medicinePresentationName?: string;
  abbreviation?: string;
  medicalRptRecipeId?: number;
  indStatus: ICatalogModel,
  indSuspended: boolean;
  suspendedDateTime: Date,
  suspensionNote: string;
  registerBy: IRegisteredBy;
  registerDate: Date;
  createdDate: Date;
  updatedBy: IRegisteredBy;
  updatedDate: Date;
  endedBy: IRegisteredBy,
  endedDate: Date,
}

 interface IRegisteredBy{
  usuarioId: number,
  loginUsr: string,
  nombre: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedicine:
 *       type: object
 *       properties:
 *         businessPartnerMedicineId:
 *           type: number
 *           example: 1
 *         medicineId:
 *           type: number
 *           example: 1
 *         medicineName:
 *           type: string
 *           example: Paracetamol
 *         medicineGenericName:
 *           type: string
 *           example: Acetaminophen
 *         medicinePresentation:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         dosisQuantity:
 *           type: number
 *           example: 500
 *         measure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         dosisFrequency:
 *           type: number
 *           example: 3
 *         dosisFrequencyMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         dosisTime:
 *           type: number
 *           example: 8
 *         dosisTimeMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         dosisMode:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         dosisNote:
 *           type: string
 *           example: Take with food
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T12:00:00Z"
 *         endDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-20T12:00:00Z"
 *         medicineNameCatalog:
 *           type: string
 *           example: Paracetamol
 *         medicineGenericNameCatalog:
 *           type: string
 *           example: Acetaminophen
 *         medicinePresentationName:
 *           type: string
 *           example: Tablet
 *         abbreviation:
 *           type: string
 *           example: tab
 *       required:
 *         - businessPartnerMedicineId
 *         - medicineId
 *         - medicinePresentation
 *         - dosisQuantity
 *         - measure
 *         - dosisFrequency
 *         - dosisFrequencyMeasure
 *         - dosisTime
 *         - dosisTimeMeasure
 *         - dosisMode
 *         - startDateTime
 *         - medicineNameCatalog
 *         - medicineGenericNameCatalog
 */
