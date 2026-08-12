import prodVitamina from '../assets/images/prod_vitamina_1785906757394.jpg';
import secVetProducts from '../assets/images/sec_vet_products_1785907348242.jpg';

export const productos = [

  {
    id: 5,
    categoria: "ganaderia",
    nombre: "Act Antiflam Spray",
    descripcion: "Spray antiinflamatorio para el tratamiento de la mastitis en bovinos y otros animales.",
    descripcionBreve: "Spray antiinflamatorio para el tratamiento de la mastitis.",
    imagen: "/images/fichas/Act_Antiflam_Clean.png",
    fichaTecnicaUrl: "/fichas/Act_Antiflam_Spray.pdf",
    slug: "act-antiflam",
    composicion: [
      "Eucalyptus globulus: 1.5 ml",
      "Cedrus deodara: 0.5 ml",
      "Lemon grass: 0.5 ml",
      "Basil oil: 0.5 ml",
      "Curcuma longa: 0.5 g"
    ],
    beneficios: [
      "Reduce el dolor y la inflamación asociados a la mastitis clínica.",
      "Proporciona un efecto refrescante y calmante.",
      "Previene el riesgo de infección cruzada hacia los cuartos sanos.",
      "Cierra el orificio o esfínter del pezón, evitando la entrada de microorganismos.",
      "Facilita la extracción de leche de una ubre dolorida."
    ],
    dosificacion: "Bovinos: Aplique en aerosol después de cada ordeño como terapia de apoyo. Otros animales: Aplique una cantidad suficiente después de la limpieza.",
    advertencias: [
      "Evite el contacto directo con los ojos.",
      "No inhale mientras se pulveriza.",
      "Es nocivo si se ingiere.",
      "Solo para uso veterinario."
    ]
  },
  {
    id: 6,
    categoria: "industrial",
    nombre: "Act Organic Choline",
    descripcion: "Aditivo zootécnico que reemplaza el cloruro de colina al 60% para el alimento balanceado.",
    descripcionBreve: "Aditivo zootécnico para Alimento balanceado que sustituye al cloruro de colina.",
    imagen: "/images/fichas/Act_Organic_Choline_Clean.png",
    fichaTecnicaUrl: "/fichas/Act_Organic_Choline.pdf",
    slug: "act-organic-choline",
    composicion: [
      "Colina a base de hierbas, no tóxica y biodisponible en forma conjugada/esterificada."
    ],
    beneficios: [
      "Muestra una destacada actividad antioxidante, hepatoprotectora y antiinflamatoria.",
      "Sustituto eficiente, seguro y económico del cloruro de colina sintético.",
      "Mejora la producción de huevos, la incubabilidad y la viabilidad.",
      "Mejora el metabolismo del alimento y su utilización (mejor conversión alimenticia FCR).",
      "Ayuda a minimizar la acumulación de grasa abdominal y del hígado graso."
    ],
    dosificacion: "Para aves de corral: 250 g a 350 g por tonelada. Para cerdos: 200 g a 400 g por tonelada. Para acuicultura: 350 g a 500 g por tonelada.",
    advertencias: [
      "No para uso humano/medicinal.",
      "Solo para uso veterinario.",
      "Al manipular el producto, evitar el contacto con la piel y la inhalación de polvo."
    ]
  },
  {
    id: 7,
    categoria: "ganaderia",
    nombre: "Act Proboost Bolus",
    descripcion: "Mejora la inmunidad, repone las bacterias buenas y favorece la salud intestinal.",
    descripcionBreve: "Combinación única de probióticos, enzimas y oligoelementos con aminoácidos en bolo.",
    imagen: "/images/fichas/Act_Proboost_Clean.png",
    fichaTecnicaUrl: "/fichas/Act_Proboost_Bolus.pdf",
    slug: "act-proboost-bolus",
    composicion: [
      "Probióticos, enzimas y oligoelementos con aminoácidos en forma de bolo."
    ],
    beneficios: [
      "Promueve un tracto digestivo saludable y un sistema inmunológico fuerte.",
      "Mejora la absorción de nutrientes y combate la indigestión.",
      "Aporta una suplementación regular de oligoelementos.",
      "Mejora la eficiencia proteica, la producción de leche y la eficiencia reproductiva."
    ],
    dosificacion: "Administrar diariamente: Bovinos y vacas (1-2 bolos al día). Ovejas, cabras y terneros (1-2 bolos al día). Peso <100 kg (1-2 bolos/día).",
    advertencias: [
      "No para uso humano/medicinal.",
      "Solo para uso veterinario."
    ]
  },
  {
    id: 8,
    categoria: "industrial",
    nombre: "InuSAP Liquid",
    descripcion: "Extracto de planta natural - Premezcla como promotor de crecimiento.",
    descripcionBreve: "Estimula el crecimiento de bacterias intestinales beneficiosas.",
    imagen: "/images/fichas/Inusap_Liquid_Clean.png",
    fichaTecnicaUrl: "/fichas/Inusap_Liquid.pdf",
    slug: "inusap-liquid",
    composicion: [
      "Extracto de raíces, cáscaras, semillas y frutos de Quillaja Saponaria Molina y Cichorium Intybus."
    ],
    beneficios: [
      "Como sustituto de los AGP (antibióticos promotores de crecimiento).",
      "Apoya la flora intestinal y estimula la secreción de enzimas digestivas.",
      "Actividad antibacteriana, antiviral, antioxidante y antiinflamatoria.",
      "Mejora la eficiencia de conversión alimenticia y reduce emisiones de amoníaco.",
      "Aumenta el peso del huevo y mejora la producción."
    ],
    dosificacion: "Se aplica en dosis de 75 ml - 100 ml por 1000 litros de agua de bebida o según indique el médico veterinario.",
    advertencias: [
      "Agítese bien antes de usar.",
      "Manténgase fuera del alcance de los niños.",
      "Cerrar la cápsula inmediatamente después de usar."
    ]
  },
  {
    id: 9,
    categoria: "ganaderia",
    nombre: "Milkmore Gold",
    descripcion: "Maximiza la producción de leche y mejora la salud del ganado.",
    descripcionBreve: "Suplemento líquido fortificado de minerales quelados, vitaminas y hierbas.",
    imagen: "/images/fichas/Milkmore_Gold_Clean.png",
    fichaTecnicaUrl: "/fichas/Milkmore_Gold.pdf",
    slug: "milkmore-gold",
    composicion: [
      "Vitamina A: 45000 UI",
      "Vitamina D3: 8000 UI",
      "Vitamina B12: 100 mcg",
      "Vitamina H: 10 mg",
      "Vitamina C: 50 mg",
      "Calcio: 1628 mg",
      "Fósforo: 838.5 mg",
      "Carbohidratos: 30 gm"
    ],
    beneficios: [
      "La vitamina H (biotina) es esencial para la vida, crecimiento y desarrollo óseo.",
      "Aumenta la producción de leche y mantiene los niveles de grasa.",
      "Mejora el crecimiento óseo y muscular y la tasa de fertilidad.",
      "Aumenta la inmunidad de las ubres y del cuerpo.",
      "Ayuda a prevenir problemas derivados de deficiencia de calcio y fósforo."
    ],
    dosificacion: "Animales grandes: 80 - 100 ml al día. Animales pequeños: 40 - 50 ml al día.",
    advertencias: [
      "No para uso humano/medicinal.",
      "Solo para uso veterinario.",
      "Al ser un extracto natural no tiene efectos tóxicos."
    ]
  }
];
