# 🚀 Configuración Rápida - GitHub Integration

## ✅ Archivos ya modificados:

- `astro.config.mjs` - Configuración de variables de entorno
- `src/lib/github.ts` - Servicio GitHub API actualizado
- `src/lib/github-projects-config.ts` - Configuración de proyectos
- `src/lib/projects.ts` - Lógica de proyectos con GitHub
- `src/sections/Projects.astro` - Componente actualizado

## 🔧 Lo que necesitas hacer AHORA:

### 1. Configura tu archivo `.env`

Crea un archivo `.env` en la raíz del proyecto con:

```env
PUBLIC_GITHUB_TOKEN=tu_token_aqui
PUBLIC_GITHUB_USERNAME=maximodip
```

### 2. Obtén tu GitHub Token

1. Ve a: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Selecciona scope: `public_repo`
4. Copia el token

### 3. Reinicia el servidor

```bash
# Detén el servidor actual (Ctrl+C)
# Luego reinicia:
bun dev
```

### 4. Verifica en la consola

Deberías ver:

```
✅ GitHub API configurado para usuario: maximodip
```

En lugar de:

```
⚠️ GitHub API no configurado - usando datos estáticos
```

## 🎯 Proyectos configurados actualmente:

En `src/lib/github-projects-config.ts`:

- ✅ unit-converter
- ✅ marcelo-muebles
- ✅ prisma-farmacia
- ⚠️ hugodanielcabral/proyectoprogramacion3 (este da 404 porque no existe)
- ⚠️ hugodanielcabral/dog360

## 🔧 Para personalizar tus proyectos:

Edita `src/lib/github-projects-config.ts`:

```typescript
export const GITHUB_PROJECTS_CONFIG = [
  {
    repoName: "unit-converter", // ✅ Tu repo
    title: "Unit Converter",
    featured: true,
    order: 1,
  },
  {
    repoName: "otro-repo-tuyo", // ✅ Agrega más repos tuyos
    title: "Mi Proyecto",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    order: 2,
  },
  // Elimina o corrige los repos que dan 404
];
```

## 🎉 Resultado esperado:

Una vez configurado correctamente verás:

- ⭐ Número de stars de cada repo
- 🍴 Número de forks
- 💻 Lenguaje principal
- 📝 Descripción actualizada automáticamente
- 🚀 Link a homepage si existe

## 🐛 Solución de problemas:

### Si sigue dando 404:

- Verifica que el nombre del repo sea correcto
- Asegúrate de que el repo sea público
- Revisa que el token tenga permisos `public_repo`

### Si no carga las variables:

- Asegúrate de que tengan el prefijo `PUBLIC_`
- Reinicia el servidor después de cambiar el `.env`
- Verifica que no haya espacios extra en el archivo `.env`
