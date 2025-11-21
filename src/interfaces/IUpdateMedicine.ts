export interface IUpdateMedicine {
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
    indActive: boolean,
    note: string
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IUpdateMedicine:
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
 *         indActive:
 *           type: boolean
 *           description: Indica si la medicina está activa o inactiva en el sistema.
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
 *         - indActive
 *         - note
 *       example:
 *         medicineName: "Ibuprofeno"
 *         medicineGenericName: "Ibuprofen"
 *         presentationId: 2
 *         purpose: "Reducir la inflamación y aliviar el dolor."
 *         benefit: "Alivia el dolor de cabeza, muscular y artritis."
 *         instructions: "Tomar 200 mg cada 4-6 horas mientras persistan los síntomas."
 *         recommendedBrands: "Advil, Motrin"
 *         importantInstructions: "No consumir más de 1200 mg al día."
 *         stopTakingInstructions: "Dejar de usar si se presentan signos de alergia o sangrado estomacal."
 *         sideEffects: "Dolor estomacal, mareos, somnolencia."
 *         additionalRecommendations: "Consultar a un médico si el dolor no mejora después de 5 días."
 *         description: "Un antiinflamatorio no esteroideo comúnmente utilizado."
 *         indActive: true
 *         note: "Revisar interacciones con otros medicamentos antes de usar."
*/