from pathlib import Path
import json
BASE = Path(__file__).resolve().parents[1]
MASTER = BASE / "data" / "cronograma_master.json"
data = json.loads(MASTER.read_text(encoding="utf-8"))
print(f"{len(data)} dias carregados do cronograma master.")
print("Use este script como ponto de partida para regenerar páginas HTML.")
