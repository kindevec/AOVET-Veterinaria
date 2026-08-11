import prodVacuna from '../assets/images/prod_vacuna_1785906764797.jpg';
import prodVitamina from '../assets/images/prod_vitamina_1785906757394.jpg';
import secVetProducts from '../assets/images/sec_vet_products_1785907348242.jpg';

export const productos = [
  { 
    id: 1, 
    categoria: "aves", 
    nombre: "Vacuna Triple Aviar", 
    descripcion: "Protección contra Newcastle, Bronquitis y Gumboro.", 
    imagen: prodVacuna
  },
  { 
    id: 2, 
    categoria: "aves", 
    nombre: "Vitaminas AD3E para Aves", 
    descripcion: "Suplemento vitamínico concentrado para aves de postura y engorde.", 
    imagen: prodVitamina
  },
  { 
    id: 3, 
    categoria: "bovinos", 
    nombre: "Desparasitante Bovino Ivermectina 1%", 
    descripcion: "Amplio espectro inyectable contra parásitos internos y externos.", 
    imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80" // Frasco medicamento inyectable
  },
  { 
    id: 4, 
    categoria: "bovinos", 
    nombre: "Sales Minerales para Ganado", 
    descripcion: "Suplemento mineral balanceado para engorde y producción lechera.", 
    imagen: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80" // Saco suplemento mineral
  },
  { 
    id: 5, 
    categoria: "porcinos", 
    nombre: "Vacuna Circovirus Porcino", 
    descripcion: "Inmunización efectiva contra circovirus porcino tipo 2 (PCV2).", 
    imagen: prodVacuna
  },
  { 
    id: 6, 
    categoria: "porcinos", 
    nombre: "Promotor de Crecimiento Porcino", 
    descripcion: "Mejora la conversión alimenticia y digestibilidad en cerdos.", 
    imagen: secVetProducts
  },
  { 
    id: 7, 
    categoria: "mascotas", 
    nombre: "Antipulgas y Garrapatas en Pipeta", 
    descripcion: "Protección mensual tópica de acción rápida para perros y gatos.", 
    imagen: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80" // Medicamento en pipeta/blíster
  },
  { 
    id: 8, 
    categoria: "mascotas", 
    nombre: "Vacuna Antirrábica", 
    descripcion: "Biológico preventivo de alta inmunidad contra la rabia.", 
    imagen: prodVacuna
  }
];
