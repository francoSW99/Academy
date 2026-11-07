# Las lecciones con contenido publicado, por curso. gen_temario.py las marca como disponibles.
# Una línea por curso: así las líneas de trabajo de ML y de AI Engineering no chocan al mezclar sus ramas.
# La lección «Cómo funciona un LLM» conserva su dirección vieja («03»): ver ALIAS.
PUBLICADAS = {
    "ai": {"como-funciona-un-llm"},
    "ml": set(),
    "ds": set(),
}
ALIAS = {"como-funciona-un-llm": "03"}  # id en la estructura → dirección publicada
