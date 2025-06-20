# 🐱 Catbreeds App

Prueba técnica para desarrollador móvil en React Native. Esta aplicación permite explorar distintas razas de gatos utilizando la API pública de [TheCatAPI](https://thecatapi.com/), mostrando información clave como origen, inteligencia, adaptabilidad y esperanza de vida.

## 🚀 Características

- ✅ Consumo de API con autenticación mediante API Key.
- ✅ Estructura basada en **Atomic Design**.
- ✅ Navegación con `@react-navigation/native`.
- ✅ Tipado completo con **TypeScript**.
- ✅ Splash Screen animado con navegación automática.
- ✅ Pantallas:
  - `SplashScreen`: Logo + transición automática.
  - `LandingScreen`: Listado de razas con filtro.
  - `DetailScreen`: Detalle completo de cada raza.

## 📂 Estructura del proyecto

```
src/
├── assets/          # Imágenes y recursos
├── components/      # Atomic Design (atoms, molecules, organisms)
├── constants/       # Colores, strings, tamaños
├── hooks/           # Hooks personalizados
├── navigation/      # Stack de navegación
├── screens/         # Splash, Landing y Detail
└── services/        # Llamado a la API
```

## 🛠️ Tecnologías utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [TheCatAPI](https://thecatapi.com/)

## ▶️ Cómo correr el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/Miguel22agudelo/catbreeds-app.git
cd catbreeds-app
```

2. Instala dependencias:

```bash
yarn install
```

3. Ejecuta el proyecto:

```bash
yarn start
```

4. Escanea el QR en tu celular con Expo Go o ejecuta en emulador.

## 📸 Capturas (opcional)

_¡Aquí puedes agregar screenshots si el tiempo lo permite!_

## 📝 Notas

- La clave API está protegida y se pasa por headers de forma segura.
- El proyecto está optimizado para móviles (Android/iOS).
- Pensado bajo principios de escalabilidad y legibilidad.

## 🧑‍💻 Autor

Desarrollado por [Miguel Ángel Agudelo](https://github.com/Miguel22agudelo) como parte del proceso técnico para Pragma.
