export interface IMedicineResponse {
  medicineId: number;
  medicineName: string;
  medicineImageSrc: string,
  medicineGenericName: string;
  medicinePresentation: {
    medicinePresentationId: number;
    medicinePresentationName: string;
    abbreviation: string;
  };
  purpose: string;
  benefit: string;
  instructions: string;
  recommendedBrands: string;
  importantInstructions: string;
  stopTakingInstructions: string;
  sideEffects: string;
  additionalRecommendations: string;
  description: string;
  indActive: boolean;
  note: string;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     MedicinePresentation:
 *       type: object
 *       properties:
 *         medicinePresentationId:
 *           type: number
 *           example: 1
 *         medicinePresentationName:
 *           type: string
 *           example: Presentation A
 *         abbreviation:
 *           type: string
 *           example: Abbreviation A
 *       required:
 *         - medicinePresentationId
 *         - medicinePresentationName
 *         - abbreviation
 *       description: Respuesta de presentación de medicamento
 *
 *     IMedicineResponse:
 *       type: object
 *       properties:
 *         medicineId:
 *           type: number
 *           example: 1
 *         medicineName:
 *           type: string
 *           example: Medicine A
 *         medicineGenericName:
 *           type: string
 *           example: Generic Medicine A
 *         medicinePresentation:
 *           $ref: '#/components/schemas/MedicinePresentation'
 *         purpose:
 *           type: string
 *           example: Purpose of the medicine
 *         benefit:
 *           type: string
 *           example: Benefit of the medicine
 *         instructions:
 *           type: string
 *           example: Instructions for using the medicine
 *         recommendedBrands:
 *           type: string
 *           example: Recommended brands for the medicine
 *         importantInstructions:
 *           type: string
 *           example: Important instructions for using the medicine
 *         stopTakingInstructions:
 *           type: string
 *           example: Instructions for stopping the medicine
 *         sideEffects:
 *           type: string
 *           example: Side effects of the medicine
 *         additionalRecommendations:
 *           type: string
 *           example: Additional recommendations for using the medicine
 *         description:
 *           type: string
 *           example: Description of the medicine
 *         indActive:
 *           type: boolean
 *           example: true
 *         note:
 *           type: string
 *           example: Note about the medicine
 *       required:
 *         - medicineId
 *         - medicineName
 *         - medicineGenericName
 *         - medicinePresentation
 *         - indActive
 *       description: Respuesta de medicamento
 */