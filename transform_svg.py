import os

svg_files = [
    ("public/b_roll_creation_workflow_v2.svg", "public/diagrams/b-roll-workflow.svg"),
    ("public/content_script_generator_workflow.svg", "public/diagrams/content-script-generator.svg")
]

style_block = """<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&amp;display=swap');
  
  * { font-family: 'Space Grotesk', sans-serif !important; }
  
  rect { fill: #FDFBF7 !important; stroke: rgba(0,0,0,0.1) !important; stroke-width: 1px !important; }
  
  mask rect { fill: white !important; stroke: none !important; }
  mask rect[fill="black"] { fill: black !important; }
  
  text { fill: #232021 !important; }
  line, path, polygon, polyline { stroke: #232021 !important; }
  path[fill="none"] { fill: none !important; }
  polygon[fill="none"] { fill: none !important; }

  @media (prefers-color-scheme: dark) {
    rect { fill: #1A1A1A !important; stroke: rgba(255,255,255,0.1) !important; }
    mask rect { fill: white !important; stroke: none !important; }
    mask rect[fill="black"] { fill: black !important; }
    text { fill: #FFFFFF !important; }
    line, path, polygon, polyline { stroke: #FFFFFF !important; }
  }
</style>"""

for in_path, out_path in svg_files:
    if not os.path.exists(in_path):
        print(f"Skipping {in_path}, not found.")
        continue
        
    with open(in_path, "r") as f:
        content = f.read()
        
    # Inject after <defs>
    if "<defs>" in content:
        content = content.replace("<defs>", f"<defs>{style_block}", 1)
    else:
        # Fallback if no defs
        content = content.replace("<svg ", f"<svg {style_block}", 1)
        
    with open(out_path, "w") as f:
        f.write(content)
        
    print(f"Saved {out_path}")
