export interface ICreateMedicineRequest {
    medicineName: string,
    medicineGenericName: string,
    medicineImageSrc: string,
    presentationId: number,
    purpose: string,
    benefit: string,
    instructions: string,
    recommendedBrands: string,
    importantInstructions: string,
    stopTakingInstructions: string,
    sideEffects: string,
    additionalRecommendations: string,
    description: string,
    note: string
}


/**
 * @swagger
 * components:
 *   schemas:
 *     ICreateMedicineRequest:
 *       type: object
 *       properties:
 *         medicineName:
 *           type: string
 *           description: Nombre comercial de la medicina.
 *         medicineGenericName:
 *           type: string
 *           description: Nombre genérico de la medicina.
 *         presentationId:
 *           type: number
 *           description: Identificador de la presentación de la medicina (por ejemplo, tabletas, inyección).
 *         purpose:
 *           type: string
 *           description: Propósito principal de la medicina.
 *         benefit:
 *           type: string
 *           description: Principales beneficios de utilizar la medicina.
 *         instructions:
 *           type: string
 *           description: Instrucciones generales de uso.
 *         recommendedBrands:
 *           type: string
 *           description: Marcas recomendadas o sugeridas.
 *         importantInstructions:
 *           type: string
 *           description: Instrucciones importantes que deben seguirse cuidadosamente.
 *         stopTakingInstructions:
 *           type: string
 *           description: Instrucciones sobre cómo y cuándo dejar de tomar la medicina.
 *         sideEffects:
 *           type: string
 *           description: Efectos secundarios posibles o comunes.
 *         additionalRecommendations:
 *           type: string
 *           description: Recomendaciones adicionales para el uso de la medicina.
 *         description:
 *           type: string
 *           description: Descripción detallada de la medicina.
 *         note:
 *           type: string
 *           description: Notas adicionales relevantes sobre la medicina.
 *       required:
 *         - medicineName
 *         - medicineGenericName
 *         - presentationId
 *         - purpose
 *         - benefit
 *         - instructions
 *         - recommendedBrands
 *         - importantInstructions
 *         - stopTakingInstructions
 *         - sideEffects
 *         - additionalRecommendations
 *         - description
 *         - note
 *       example:
 *         medicineName: "Paracetamol"
 *         medicineGenericName: "Acetaminophen"
 *         presentationId: 1
 *         purpose: "Para reducir la fiebre y aliviar el dolor leve a moderado."
 *         benefit: "Alivia rápidamente el dolor y reduce la fiebre."
 *         instructions: "Tomar una tableta cada 6 horas después de comer."
 *         recommendedBrands: "Tylenol, Panadol"
 *         importantInstructions: "No exceder de 4 dosis en 24 horas."
 *         stopTakingInstructions: "Consultar a un médico si el dolor o la fiebre no se reducen después de 3 días."
 *         sideEffects: "Náuseas, somnolencia, reacciones alérgicas raras."
 *         additionalRecommendations: "Beber mucha agua para evitar la deshidratación."
 *         description: "Un analgésico y antipirético usado comúnmente."
 *         note: "No usar en combinación con otros productos que contengan paracetamol."
*/