# Deploy local — GitHub Pages

Este fichero contiene las instrucciones locales para compilar y desplegar la aplicación AnviVino en GitHub Pages.

> Este fichero es de uso local y está incluido en `.gitignore`. No debe subirse al repositorio.

## 1. Compilar

Como la aplicación utiliza un dominio personalizado (`www.anvivino.com`), el `base-href` debe ser `/`.

```bash
npm run build -- --base-href /
```

El resultado se genera en:

```text
dist/anvivino/browser
```

## 2. Preparar el despliegue

Crear un directorio temporal:

```bash
TMPDIR="/Users/carolcespedes/Documents/anvivino_deploy_tmp"

rm -rf "$TMPDIR" && mkdir "$TMPDIR"
```

Copiar el resultado del build:

```bash
cp -r dist/anvivino/browser/. "$TMPDIR/"
```

Crear `.nojekyll` para GitHub Pages:

```bash
touch "$TMPDIR/.nojekyll"
```

Configurar el dominio personalizado:

```bash
echo "www.anvivino.com" > "$TMPDIR/CNAME"
```

## 3. Desplegar en GitHub Pages

Entrar en el directorio temporal:

```bash
cd "$TMPDIR"
```

Inicializar Git:

```bash
git init
git checkout -b gh-pages
```

Crear el commit:

```bash
git add -A
git commit -m "Deploy"
```

Configurar el repositorio remoto:

```bash
git remote add origin git@github.com:nglorac/anvivino.git
```

Subir la rama `gh-pages`:

```bash
git push origin gh-pages --force
```

## 4. Limpiar

Volver al proyecto:

```bash
cd /Users/carolcespedes/Documents/projects/anvivino
```

Eliminar el directorio temporal:

```bash
rm -rf "$TMPDIR"
```

## 5. Comprobación

Después del despliegue, comprobar:

```text
https://www.anvivino.com/
```

El dominio personalizado de GitHub Pages debe mantenerse como:

```text
www.anvivino.com
```

Y las imágenes y recursos deberían cargarse desde:

```text
https://www.anvivino.com/assets/...
```

y no desde:

```text
https://www.anvivino.com/anvivino/assets/...
```
