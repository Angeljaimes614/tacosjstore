# Comandos para Desplegar en Netlify

## ✅ Cambios Realizados

Se han solucionado todos los problemas de compatibilidad con Netlify:

### 🔧 Archivos y Carpetas Renombrados
- ❌ Espacios → ✅ Guiones bajos (_)
- ❌ Caracteres especiales (ñ, á, é) → ✅ Caracteres ASCII
- ❌ Símbolos # → ✅ "num"
- ❌ Mayúsculas → ✅ Minúsculas

### 📁 Ejemplos de Cambios
- `Accesorios` → `accesorios`
- `Diseño sin título.png` → `diseno_sin_titulo.png`
- `#4` → `num4`
- `Bolas de entrenamiento` → `bolas_de_entrenamiento`
- `Predator FS` → `predator_fs`

### 📝 Archivos Actualizados
- ✅ Todas las carpetas y archivos renombrados
- ✅ Rutas en `script.js` actualizadas
- ✅ 27 cambios de rutas aplicados

## 🚀 Comandos para Desplegar

Ejecuta estos comandos en orden:

### 1️⃣ Agregar todos los cambios
```bash
git add .
```

### 2️⃣ Hacer commit
```bash
git commit -m "Fix: Rename files and folders for Netlify compatibility

- Remove spaces, special characters, and # symbols
- Convert to lowercase with underscores
- Update all image paths in script.js
- Ready for Netlify deployment"
```

### 3️⃣ Subir cambios
```bash
git push origin main
```

## 🎯 Resultado Esperado

Después del push:
- ✅ Netlify detectará automáticamente los cambios
- ✅ Iniciará una nueva construcción
- ✅ Todas las imágenes se cargarán correctamente
- ✅ No habrá errores de codificación de URL
- ✅ El sitio funcionará perfectamente

## 📋 Verificación Post-Despliegue

1. Revisa que todas las imágenes se muestren correctamente
2. Verifica que no aparezca la imagen de fallback `logo-banner/Jstore.png`
3. Confirma que la navegación funcione sin errores
4. Prueba la funcionalidad del carrito de compras

---

**¡Listo para Netlify! 🚀**