import type { ContenidoEstacion } from "../tipos";

// Textos cortos sacados de la nota (Pilar 1 · bloque 3). Las escenas interactivas llegan en la Fase 3.
export const estacion03: ContenidoEstacion = {
  n: "03",
  resumen: "Un LLM no consulta la verdad: predice el siguiente token más probable. Alucinar, variar y costar salen de ahí.",
  paradas: {
    1: {
      pregunta: "¿Por qué la misma pregunta da respuestas distintas?",
      texto: "Le preguntas lo mismo dos veces y responde distinto. A veces inventa un dato con total seguridad. Sin saber cómo genera texto, no sabes si eso es una falla o es el diseño.",
    },
    2: {
      pregunta: "¿Cómo elige un LLM la siguiente palabra?",
      texto: "En cada paso le da una probabilidad a cada token que podría seguir y elige uno con esas probabilidades. La temperatura decide cuánto se arriesga.",
      escena: "muestreo",
    },
    3: {
      pregunta: "Tres ideas para decidir bien",
      texto: "Lo que te llevas para decidir y dirigir.",
      puntos: [
        "Predice lo más probable, no consulta la verdad: el contexto que le das manda.",
        "No es determinista: el mismo prompt puede dar respuestas distintas, así que lo importante se valida.",
        "Entender cómo funciona por dentro te deja optimizar todo lo que construyas encima.",
      ],
    },
    4: {
      pregunta: "Dos fallas típicas y cómo se notan",
      texto: "Las dos salen del mismo mecanismo: elegir por probabilidad.",
      puntos: [
        "Alucina con seguridad: una respuesta falsa puede ser la más probable. Se nota cuando da datos exactos sin fuente.",
        "Cambia sin aviso: el mismo prompt da respuestas distintas. Se nota cuando algo pasa la prueba y falla después.",
      ],
    },
    5: {
      pregunta: "Dilo sin palabras técnicas",
      texto: "«Es un autocompletado gigante: lee todo lo que llevas escrito y apuesta por la palabra que suele venir después.» Si puedes decirlo así, lo entendiste.",
    },
    6: {
      pregunta: "Cómo pedírselo al agente",
      texto: "Para tareas que deben repetirse igual: temperatura baja y salida con esquema (JSON). Baja la variación, pero no garantiza la verdad.",
      indicacion: ["Responde solo con la información del contexto.", "Si no está, di «no lo sé»."],
      puntos: ["Datos sin fuente", "Cifras demasiado exactas", "Respuestas que cambian"],
    },
    7: {
      pregunta: "Tu turno",
      texto: "Explica con un ejemplo propio por qué un modelo alucina y qué lo reduce. Usa la parada 2 para encontrar la temperatura en la que empieza a fallar.",
    },
  },
  material: [
    { titulo: "Marina Wyss · AI Engineering en 76 min", detalle: "cap. 1: Transformer, prefill y decode, muestreo" },
    { titulo: "BettaTech · Ingeniería de IA en 26 min", detalle: "los fundamentos del LLM" },
  ],
};
