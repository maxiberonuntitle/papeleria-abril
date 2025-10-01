# 🚀 Guía de Despliegue en Netlify - Papelería Abril

## 📋 Requisitos Previos
- Cuenta en [Netlify](https://www.netlify.com/)
- Repositorio Git (GitHub, GitLab o Bitbucket)

## 🔧 Método 1: Despliegue desde Git (Recomendado)

### Paso 1: Subir el código a Git
```bash
# Si aún no has inicializado Git
git init
git add .
git commit -m "Preparar para despliegue en Netlify"

# Crear repositorio en GitHub y subir el código
git remote add origin <URL_DE_TU_REPOSITORIO>
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Netlify
1. Inicia sesión en [Netlify](https://app.netlify.com/)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona tu proveedor de Git (GitHub, GitLab, Bitbucket)
4. Autoriza el acceso a Netlify
5. Selecciona el repositorio **papeleriaAbril**

### Paso 3: Configuración de Build
Netlify detectará automáticamente la configuración desde `netlify.toml`, pero verifica:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

### Paso 4: Desplegar
1. Haz clic en **"Deploy site"**
2. Espera a que termine el build (2-3 minutos)
3. ¡Tu sitio estará en línea! 🎉

## 🔧 Método 2: Despliegue con Netlify CLI

### Instalar Netlify CLI
```bash
npm install -g netlify-cli
```

### Iniciar sesión
```bash
netlify login
```

### Construir y desplegar
```bash
# Construir la aplicación
npm run build

# Desplegar (primera vez)
netlify deploy --prod

# O usar el comando directo
netlify deploy --prod --dir=dist
```

## 🔧 Método 3: Despliegue Manual (Drag & Drop)

1. Construye la aplicación localmente:
```bash
npm install
npm run build
```

2. Ve a [Netlify](https://app.netlify.com/)
3. Arrastra y suelta la carpeta **`dist`** en el área de despliegue

## ⚙️ Configuración Incluida

El proyecto ya incluye:
- ✅ **netlify.toml** - Configuración de build y redirects
- ✅ **_redirects** - Manejo de rutas para React Router
- ✅ **.nvmrc** - Versión de Node.js especificada

## 🌐 Dominio Personalizado

### Agregar dominio propio:
1. En el dashboard de Netlify, ve a **"Domain settings"**
2. Haz clic en **"Add custom domain"**
3. Ingresa tu dominio (ej: `papeleriaabril.com`)
4. Sigue las instrucciones para configurar los DNS

### Configuración DNS recomendada:
```
Tipo: A
Nombre: @
Valor: 75.2.60.5

Tipo: CNAME
Nombre: www
Valor: <tu-sitio>.netlify.app
```

## 🔒 HTTPS

Netlify proporciona **HTTPS automático y gratuito** con Let's Encrypt:
- Se habilita automáticamente
- Se renueva automáticamente
- Incluye certificado SSL/TLS

## 🔄 Despliegue Continuo

Una vez conectado con Git, cada push a la rama principal desplegará automáticamente:
```bash
git add .
git commit -m "Actualización del sitio"
git push origin main
```

## 📊 Variables de Entorno (Opcional)

Si necesitas agregar variables de entorno:
1. Ve a **Site settings** → **Environment variables**
2. Agrega las variables necesarias
3. Redespliega el sitio

## 🐛 Solución de Problemas

### Error: "Build failed"
- Verifica que todas las dependencias estén en `package.json`
- Ejecuta `npm install` y `npm run build` localmente primero

### Error: "Page not found" al refrescar
- Verifica que `netlify.toml` y `_redirects` estén en la raíz del proyecto

### Imágenes no cargan
- Asegúrate de que las rutas de imágenes sean relativas
- Verifica que las imágenes estén en `src/assets/`

## 📱 Vista Previa de Despliegue

Netlify genera automáticamente:
- **URL de producción:** `https://abrilpapeleria.com` (dominio personalizado)
- **URL alternativa:** `https://papeleria-abril.netlify.app`
- **URLs de preview:** Para cada Pull Request

## 🎯 Optimizaciones Incluidas

- ✅ Cache de assets estáticos (1 año)
- ✅ Headers de seguridad
- ✅ Compresión automática (Gzip/Brotli)
- ✅ CDN global automático
- ✅ Optimización de imágenes

## 📞 Soporte

Si tienes problemas, consulta:
- [Documentación de Netlify](https://docs.netlify.com/)
- [Foro de la comunidad](https://answers.netlify.com/)
- [Status de Netlify](https://www.netlifystatus.com/)

---

¡Listo para desplegar! 🚀✨


