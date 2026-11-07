# Genera src/ruta/temario.ts (pedido 98): AI Engineering desde la propuesta v3, y ML y DL y Data Science desde la propuesta ML v2.
# Los repasos son lecciones cortas con un puente a la lección donde el tema vive a fondo; el requisito se muestra como desvío.
import importlib.util, json, os, sys
AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
from estructura import ML, DS, DESTINOS

spec = importlib.util.spec_from_file_location("v3", os.path.join(AQUI, "estructura_ai.py"))
v3 = importlib.util.module_from_spec(spec); spec.loader.exec_module(v3)
AI = v3.AI

from publicadas import PUBLICADAS, ALIAS  # qué lecciones están publicadas, por curso
PUBLICADA = ALIAS  # conserva la dirección y el avance de la lección publicada
lecs = lambda B: [l for _, mods in B for _, _, ls in mods for l in ls]
titulos = {"ai": {PUBLICADA.get(l[0], l[0]): l[1] for l in lecs(AI) if l[0] != "→"},
           "ml": {l[0]: l[1] for l in lecs(ML)},
           "ds": {l[0]: l[1] for l in lecs(DS)}}

def existe(ref):
    esp, i = ref.split("/", 1)
    return i in titulos[esp]

def leccion(l, esp):
    if l[0] == "→":  # desvío de AI Engineering a ML y DL
        assert l[1] in titulos["ml"], f"desvío a una lección que no existe: ml/{l[1]}"
        return {"titulo": titulos["ml"][l[1]], "disponible": False, "desvio": f"ml/{l[1]}"}
    if len(l) == 5 and l[4] == "requisito":
        destino = DESTINOS[l[0]]
        assert existe(destino), f"requisito a una lección que no existe: {destino}"
        return {"titulo": l[1], "disponible": False, "desvio": destino}
    i = PUBLICADA.get(l[0], l[0])
    return {"id": i, "titulo": l[1], "disponible": l[0] in PUBLICADAS[esp]}

def temario(bloques, esp):
    out, ids = [], set()
    for bloque, mods in bloques:
        for nombre, aviso, ls in mods:
            m = {"bloque": bloque, "nombre": nombre}
            if aviso: m["aviso"] = aviso
            m["lecciones"] = [leccion(l, esp) for l in ls]
            for x in m["lecciones"]:
                if "id" in x:
                    assert x["id"] not in ids, f"id repetido: {x['id']}"
                    ids.add(x["id"])
            out.append(m)
    return out

def puentes(esp, bloques):
    out = []
    for l in lecs(bloques):
        if len(l) == 5 and l[4] == "repaso":
            destino = DESTINOS[l[0]]
            assert existe(destino), f"repaso a una lección que no existe: {destino}"
            assert destino.split("/")[0] != esp, f"el repaso {l[0]} apunta a su propia especialidad"
            tema = l[1].removeprefix("Repaso: ")
            out.append({"desde": f"{esp}/{l[0]}", "hacia": destino, "tipo": "profundiza", "tema": tema[0].upper() + tema[1:] + "."})
    return out

faltan = {l[0] for B in (ML, DS) for l in lecs(B) if len(l) == 5} - set(DESTINOS)
assert not faltan, f"repasos sin destino: {faltan}"

con = puentes("ml", ML) + puentes("ds", DS)
dump = lambda x: json.dumps(x, ensure_ascii=False, indent=2)
ts = f"""// Generado desde temario/estructura_ai.py (AI Engineering) y temario/estructura.py
// (ML y DL, y Data Science; propuesta ML v2, aprobada en el pedido 98). No se edita a mano: se corre gen_temario.py.
import type {{ Conexion, Modulo }} from "./tipos";

type ModuloSinNumero = Omit<Modulo, "n" | "lecciones"> & {{ lecciones: Omit<Modulo["lecciones"][number], "n">[] }};

export const temarioAi: ModuloSinNumero[] = {dump(temario(AI, "ai"))};

export const temarioMl: ModuloSinNumero[] = {dump(temario(ML, "ml"))};

export const temarioDs: ModuloSinNumero[] = {dump(temario(DS, "ds"))};

/** Los puentes de cada repaso: la lección corta enlaza con la lección donde el tema se ve a fondo. */
export const puentesDeRepaso: Conexion[] = {dump(con)};
"""
open(os.path.join(AQUI, "..", "src", "ruta", "temario.ts"), "w").write(ts)
cuenta = lambda B: (sum(1 for l in lecs(B) if l[0] != "→" and not (len(l) == 5 and l[4] == "requisito")), len(B), sum(len(m) for _, m in B))
print("AI:", cuenta(AI), "| ML:", cuenta(ML), "| DS:", cuenta(DS), "| puentes de repaso:", len(con))
