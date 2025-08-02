#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para optimizar imágenes pesadas y mejorar la velocidad de carga
Reduce el tamaño de las imágenes manteniendo calidad aceptable
"""

import os
from PIL import Image
import glob

def optimize_image(image_path, quality=85, max_width=1200):
    """Optimiza una imagen individual"""
    try:
        with Image.open(image_path) as img:
            # Obtener información original
            original_size = os.path.getsize(image_path)
            original_width, original_height = img.size
            
            # Convertir a RGB si es necesario
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Redimensionar si es muy grande
            if original_width > max_width:
                ratio = max_width / original_width
                new_height = int(original_height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"  📏 Redimensionado: {original_width}x{original_height} → {max_width}x{new_height}")
            
            # Guardar con compresión optimizada
            img.save(image_path, 'JPEG', quality=quality, optimize=True)
            
            # Calcular reducción
            new_size = os.path.getsize(image_path)
            reduction = ((original_size - new_size) / original_size) * 100
            
            return {
                'original_size': original_size,
                'new_size': new_size,
                'reduction': reduction
            }
            
    except Exception as e:
        print(f"  ❌ Error optimizando {image_path}: {e}")
        return None

def format_size(size_bytes):
    """Convierte bytes a formato legible"""
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f} KB"
    else:
        return f"{size_bytes / (1024 * 1024):.1f} MB"

def optimize_all_images(root_dir="web", quality=85, max_width=1200):
    """Optimiza todas las imágenes PNG en el directorio"""
    
    # Buscar todas las imágenes PNG
    png_files = glob.glob(os.path.join(root_dir, "**", "*.png"), recursive=True)
    
    if not png_files:
        print("❌ No se encontraron imágenes PNG para optimizar.")
        return
    
    print(f"🔍 Encontradas {len(png_files)} imágenes PNG para optimizar...")
    print("="*80)
    
    total_original = 0
    total_optimized = 0
    optimized_count = 0
    
    for png_file in png_files:
        print(f"\n🖼️  Procesando: {png_file}")
        
        result = optimize_image(png_file, quality, max_width)
        
        if result:
            total_original += result['original_size']
            total_optimized += result['new_size']
            optimized_count += 1
            
            print(f"  📊 Tamaño: {format_size(result['original_size'])} → {format_size(result['new_size'])}")
            print(f"  📉 Reducción: {result['reduction']:.1f}%")
        
    # Resumen final
    print("\n" + "="*80)
    print("📈 RESUMEN DE OPTIMIZACIÓN")
    print("="*80)
    print(f"✅ Imágenes optimizadas: {optimized_count}/{len(png_files)}")
    print(f"📦 Tamaño original total: {format_size(total_original)}")
    print(f"📦 Tamaño optimizado total: {format_size(total_optimized)}")
    
    if total_original > 0:
        total_reduction = ((total_original - total_optimized) / total_original) * 100
        print(f"🚀 Reducción total: {format_size(total_original - total_optimized)} ({total_reduction:.1f}%)")
    
    print("\n🎯 BENEFICIOS:")
    print("  ⚡ Carga más rápida de la página")
    print("  📱 Mejor experiencia en móviles")
    print("  💾 Menor uso de ancho de banda")
    print("  🚀 Mejor SEO y rendimiento")

if __name__ == "__main__":
    print("🚀 OPTIMIZADOR DE IMÁGENES PARA WEB")
    print("Mejora la velocidad de carga reduciendo el tamaño de las imágenes")
    print("="*80)
    
    # Verificar si PIL está instalado
    try:
        from PIL import Image
    except ImportError:
        print("❌ Error: Pillow no está instalado.")
        print("💡 Instala con: pip install Pillow")
        exit(1)
    
    # Configuración de optimización
    QUALITY = 85  # Calidad JPEG (70-95 recomendado)
    MAX_WIDTH = 1200  # Ancho máximo en píxeles
    
    print(f"⚙️  Configuración:")
    print(f"   📏 Ancho máximo: {MAX_WIDTH}px")
    print(f"   🎨 Calidad JPEG: {QUALITY}%")
    print(f"   📁 Directorio: web/")
    
    optimize_all_images("web", QUALITY, MAX_WIDTH)
    
    print("\n✅ ¡Optimización completada!")
    print("🌐 Tu sitio web ahora cargará mucho más rápido.")