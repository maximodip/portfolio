# Configuración de GitHub API para Portfolio

## Configuración de Variables de Entorno

Para que tu portfolio pueda conectarse con GitHub y extraer información de tus repositorios, necesitas configurar las siguientes variables de entorno:

### 1. Crear un Token de GitHub

1. Ve a [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Haz clic en "Generate new token (classic)"
3. Dale un nombre descriptivo como "Portfolio Token"
4. Selecciona los siguientes scopes:
   - `public_repo` (para acceder a repositorios públicos)
   - `read:user` (opcional, para información de usuario)
5. Copia el token generado

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto con:

```env
PUBLIC_GITHUB_TOKEN=tu_token_aqui
PUBLIC_GITHUB_USERNAME=tu_usuario_github
```

**Importante:** En Astro, las variables de entorno que necesitas en el cliente deben tener el prefijo `PUBLIC_`. Esto permite que estén disponibles en el navegador.

**Ejemplo:**

```env
PUBLIC_GITHUB_TOKEN=ghp_1234567890abcdef1234567890abcdef12345678
PUBLIC_GITHUB_USERNAME=maximodip
```

### 3. Configurar Proyectos a Mostrar

Edita el archivo `src/lib/github-projects-config.ts` para configurar qué repositorios mostrar:

```typescript
export const GITHUB_PROJECTS_CONFIG: GitHubProjectConfig[] = [
  {
    repoName: "nombre-del-repo", // Solo el nombre si es tuyo
    title: "Título Personalizado",
    descriptionKey: "CLAVE_TRADUCCION", // Opcional
    image: "/projects/imagen.png", // Opcional
    tags: [TAGS.REACT, TAGS.TAILWIND],
    featured: true, // Para destacar el proyecto
    order: 1, // Para ordenar
  },
  {
    repoName: "otro-usuario/repo-colaborativo", // Con usuario si es de otro
    title: "Proyecto Colaborativo",
    tags: [TAGS.NEXTJS, TAGS.PRISMA],
    order: 2,
  },
];
```

### 4. Personalizar Configuración

En el mismo archivo, puedes ajustar:

```typescript
export const GITHUB_CONFIG = {
  showOnlyFeatured: false, // Solo proyectos destacados
  maxProjects: 10, // Máximo número de proyectos
  sortByUpdatedDate: true, // Ordenar por fecha de actualización
  fallbackToStatic: true, // Usar proyectos estáticos si falla GitHub
  cacheTime: 60, // Tiempo de caché en minutos
};
```

## Características Implementadas

### ✅ Integración con GitHub API

- Obtiene datos en tiempo real de tus repositorios
- Información de stars, forks, lenguaje principal
- Descripción actualizada automáticamente

### ✅ Configuración Flexible

- Selecciona qué proyectos mostrar
- Personaliza títulos y descripciones
- Ordena y destaca proyectos importantes

### ✅ Fallback Robusto

- Si falla la API de GitHub, usa datos estáticos
- Manejo de errores transparente
- Experiencia de usuario consistente

### ✅ Información Enriquecida

- Muestra stars y forks del repositorio
- Indica el lenguaje principal
- Badge para proyectos destacados
- Links automáticos a homepage si existe

### ✅ Multiidioma

- Compatible con el sistema i18n existente
- Traducciones personalizadas por proyecto
- Fallback a descripción de GitHub

## Uso

Una vez configurado, tus proyectos se actualizarán automáticamente con información de GitHub cada vez que se construya el sitio. Los datos incluyen:

- **Stars y Forks**: Se muestran automáticamente si > 0
- **Lenguaje**: Se detecta el lenguaje principal
- **Descripción**: Usa tu configuración personalizada o la de GitHub
- **Homepage**: Link automático si está configurado en el repo
- **Última actualización**: Para ordenamiento automático

## Solución de Problemas

### Token no funciona

- Verifica que el token tenga los permisos correctos
- Asegúrate de que no haya espacios extra en el `.env`

### Proyectos no aparecen

- Revisa que el nombre del repositorio sea correcto
- Verifica que el repositorio sea público
- Checa la consola del navegador para errores

### Fallback a datos estáticos

- Es normal si no hay token configurado
- Los proyectos seguirán funcionando con datos estáticos
- Configura el token para datos dinámicos

## Próximas Mejoras

- [ ] Caché de datos de GitHub en localStorage
- [ ] Modo offline con datos guardados
- [ ] Integración con GitHub GraphQL API
- [ ] Estadísticas de commits y contributors
- [ ] Preview de README en modal
