#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para renombrar archivos y carpetas para compatibilidad con Netlify
Elimina espacios, caracteres especiales, y símbolos problemáticos
"""

import os
import re
import shutil
from pathlib import Path

def sanitize_name(name):
    """Convierte nombres a formato compatible con Netlify"""
    # Reemplazar caracteres especiales y espacios
    name = name.replace(' ', '_')
    name = name.replace('#', 'num')
    name = name.replace('ñ', 'n')
    name = name.replace('á', 'a')
    name = name.replace('é', 'e')
    name = name.replace('í', 'i')
    name = name.replace('ó', 'o')
    name = name.replace('ú', 'u')
    name = name.replace('Á', 'A')
    name = name.replace('É', 'E')
    name = name.replace('Í', 'I')
    name = name.replace('Ó', 'O')
    name = name.replace('Ú', 'U')
    name = name.replace('Ñ', 'N')
    
    # Remover caracteres especiales adicionales
    name = re.sub(r'[^a-zA-Z0-9._-]', '', name)
    
    # Convertir a minúsculas para consistencia
    name = name.lower()
    
    return name

def rename_files_and_folders(root_path):
    """Renombra recursivamente archivos y carpetas"""
    changes = []
    
    # Recorrer desde las carpetas más profundas hacia arriba
    for root, dirs, files in os.walk(root_path, topdown=False):
        # Renombrar archivos primero
        for file in files:
            old_path = os.path.join(root, file)
            new_name = sanitize_name(file)
            new_path = os.path.join(root, new_name)
            
            if old_path != new_path:
                try:
                    os.rename(old_path, new_path)
                    changes.append(f"Archivo: {old_path} -> {new_path}")
                    print(f"✓ Renombrado archivo: {file} -> {new_name}")
                except Exception as e:
                    print(f"✗ Error renombrando archivo {file}: {e}")
        
        # Renombrar carpetas
        for dir_name in dirs:
            old_dir_path = os.path.join(root, dir_name)
            new_dir_name = sanitize_name(dir_name)
            new_dir_path = os.path.join(root, new_dir_name)
            
            if old_dir_path != new_dir_path:
                try:
                    os.rename(old_dir_path, new_dir_path)
                    changes.append(f"Carpeta: {old_dir_path} -> {new_dir_path}")
                    print(f"✓ Renombrada carpeta: {dir_name} -> {new_dir_name}")
                except Exception as e:
                    print(f"✗ Error renombrando carpeta {dir_name}: {e}")
    
    return changes

if __name__ == "__main__":
    web_path = "web"
    
    print("🔧 Iniciando renombrado para compatibilidad con Netlify...")
    print("="*60)
    
    if os.path.exists(web_path):
        changes = rename_files_and_folders(web_path)
        
        print("\n" + "="*60)
        print(f"✅ Proceso completado. {len(changes)} cambios realizados.")
        
        if changes:
            print("\n📋 Resumen de cambios:")
            for change in changes:
                print(f"  - {change}")
    else:
        print(f"❌ No se encontró la carpeta '{web_path}'")
    
    print("\n🚀 Ahora puedes hacer commit y push para desplegar en Netlify.")