# Establecer la imagen base para compilar TypeScript
FROM node:20.4.0 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración
COPY package.json package-lock.json tsconfig.json /app/

# Instalar las dependencias del proyecto
RUN npm ci --omit=dev

# Copiar el resto de los archivos del proyecto
COPY . /app

# Compilar el código TypeScript
RUN npm run build

# -----------------------------------

# Establecer la imagen base para ejecutar la aplicación
FROM node:20.4.0

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la compilación
COPY --from=build /app/build /app

# Instalar solo las dependencias necesarias para ejecutar la aplicación
RUN npm ci --only=production

# Exponer el puerto que utilizará la aplicación (si es necesario)
# EXPOSE <puerto>

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
