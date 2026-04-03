from pathlib import Path
import json
BASE = Path(__file__).resolve().parents[1]
for path in (BASE / "data" / "dias").glob("*.json"):
    json.loads(path.read_text(encoding="utf-8"))
print("Todos os JSONs de dias estão válidos.")
