#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para actualizar las rutas de imágenes en script.js
después del renombrado para compatibilidad con Netlify
"""

import re

def update_script_js():
    """Actualiza las rutas de imágenes en script.js"""
    
    # Leer el archivo script.js
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Mapeo de cambios de rutas
    path_replacements = {
        # Carpetas principales
        'web/Accesorios/': 'web/accesorios/',
        'web/tacosbillar/M20/': 'web/tacosbillar/m20/',
        'web/tacosbillar/M21/': 'web/tacosbillar/m21/',
        'web/tacosbillar/M23/': 'web/tacosbillar/m23/',
        'web/tacosbillar/M29/': 'web/tacosbillar/m29/',
        'web/tacosbillar/M2S/': 'web/tacosbillar/m2s/',
        'web/tacosbillar/M2/': 'web/tacosbillar/m2/',
        'web/tacosbillar/M6black/': 'web/tacosbillar/m6black/',
        'web/tacosbillar/Predator FS/': 'web/tacosbillar/predator_fs/',
        'web/tacosbillar/Predator P3/': 'web/tacosbillar/predator_p3/',
        'web/tacosbillar/Predator king/': 'web/tacosbillar/predator_king/',
        'web/tacosbillar/TACO DE SALTO Y SALIDA YFEN/': 'web/tacosbillar/taco_de_salto_y_salida_yfen/',
        
        # Subcarpetas de accesorios
        'Bolas de entrenamiento/': 'bolas_de_entrenamiento/',
        'Estuches/Crical/': 'estuches/crical/',
        'Estuches/Diamond/': 'estuches/diamond/',
        'Estuches/Yfen/': 'estuches/yfen/',
        'Estuches/McDermott/': 'estuches/mcdermott/',
        'Estuches/predator/': 'estuches/predator/',
        'Estuches/Tiger/': 'estuches/tiger/',
        'Estuches/vanqs/': 'estuches/vanqs/',
        'Estuches/Doble flecha/': 'estuches/doble_flecha/',
        'Extensiones/yfen/': 'extensiones/yfen/',
        'Extensiones/crical/': 'extensiones/crical/',
        'Extensiones/#2/': 'extensiones/num2/',
        'Extensiones/#3/': 'extensiones/num3/',
        'Extensiones/#4/': 'extensiones/num4/',
        'Guantes/IBS/': 'guantes/ibs/',
        'IBS/': 'ibs/',
        'Pica casquillos/3 en 1/': 'pica_casquillos/3_en_1/',
        'Pica casquillos/llaveros/': 'pica_casquillos/llaveros/',
        'PortaTizas/#2/': 'portatizas/num2/',
        'PortaTizas/': 'portatizas/',
        'Tizas/': 'tizas/',
        
        # Nombres de archivos
        'Diseño sin título.png': 'diseno_sin_titulo.png',
        'Diseño sin título (1).png': 'diseno_sin_titulo_1.png',
        'Diseño sin título (2).png': 'diseno_sin_titulo_2.png',
        'Diseño sin título (3).png': 'diseno_sin_titulo_3.png',
        'Diseño sin título (4).png': 'diseno_sin_titulo_4.png',
        'Diseño sin título (5).png': 'diseno_sin_titulo_5.png',
        'Nuevo Documento de texto.txt': 'nuevo_documento_de_texto.txt'
    }
    
    # Aplicar reemplazos
    updated_content = content
    changes_made = []
    
    for old_path, new_path in path_replacements.items():
        if old_path in updated_content:
            updated_content = updated_content.replace(old_path, new_path)
            changes_made.append(f"'{old_path}' -> '{new_path}'")
    
    # Escribir el archivo actualizado
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    return changes_made

if __name__ == "__main__":
    print("🔧 Actualizando rutas de imágenes en script.js...")
    print("="*60)
    
    try:
        changes = update_script_js()
        
        print(f"✅ Script actualizado exitosamente. {len(changes)} cambios realizados.")
        
        if changes:
            print("\n📋 Cambios realizados:")
            for change in changes:
                print(f"  - {change}")
        else:
            print("\n📋 No se encontraron rutas para actualizar.")
            
    except Exception as e:
        print(f"❌ Error actualizando script.js: {e}")
    
    print("\n🚀 Las rutas de imágenes han sido actualizadas para Netlify.")