# 🐱 Catbreeds App

Prueba técnica para desarrollador móvil en React Native.  
Esta aplicación permite explorar distintas razas de gatos utilizando la API pública de [TheCatAPI](https://thecatapi.com/), mostrando información como origen, inteligencia y esperanza de vida.

---

## 🚀 Características

- ✅ Consumo de API con autenticación mediante API Key.
- ✅ Estructura modular basada en principios de arquitectura limpia.
- ✅ Organización de componentes siguiendo el enfoque de **Atomic Design**.
- ✅ Navegación con `@react-navigation/native`.
- ✅ Tipado completo con **TypeScript**.
- ✅ AxiosAdapter para manejo limpio de HTTP.
- ✅ Pantallas:
  - `LandingScreen`: Listado de razas con búsqueda y scroll infinito.
  - `DetailScreen`: Detalle completo de cada raza.
  - `SplashScreen`: Pantalla de presentación de la App.

---

## 📂 Estructura del proyecto

```
/src
├── assets
│   └── images/                     # Imágenes utilizadas en la app
│
├── components                     # Componentes siguiendo Atomic Design
│   ├── atoms/                      # Elementos básicos
│   ├── molecules/
│   └── organisms/                  # Componentes más complejos
│
├── config
│   └── adapters/
│       ├── http.adapter.ts         # Adaptador Axios genérico con tipado
│       ├── catApiFetcher.ts        # Instancia Axios configurada con la API y headers
│       └── catApiAdapter.ts        # Funciones específicas para cada endpoint
│
├── constants
│   └── index.ts                    # Constantes como la API Key y la baseURL
│
├── hooks
│   ├── useCatBreedsPaginated.ts    # Hook para paginar razas de gatos
│   └── useCatBreedSearch.ts        # Hook para buscar razas por nombre
│
├── navigation
│   ├── NavigationStack.tsx         # Stack principal de navegación
│   └── RootNavigator.tsx           # Contenedor de navegación raíz
│
├── screens
│   ├── Detail/
│   │   └── DetailScreen.tsx        # Vista de detalle de una raza
│   ├── Landing/
│   │   └── LandingScreen.tsx       # Pantalla principal con búsqueda y scroll
│   └── Splash/
│       └── SplashScreen.tsx        # Pantalla de bienvenida
│
├── services
│   └── catService.ts               # Funciones para consumir la API de TheCatAPI
│
└── types
    └── Breed.ts                    # Tipos y modelos (TypeScript) para razas de gatos

```

---

## 🛠️ Tecnologías utilizadas

- [React Native (CLI)](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [React Navigation](https://reactnavigation.org/)
- [TheCatAPI](https://thecatapi.com/)

---

## ▶️ Cómo correr el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/Miguel22agudelo/catBreedsApp.git
cd catBreedsApp
```

2. Instala dependencias:

```bash
yarn install
```

3. Ejecuta el bundler:

```bash
npx react-native start
```

4. En otra terminal, ejecuta la app en Android:

```bash
npx react-native run-android
```

> Asegúrate de tener un emulador corriendo o tu dispositivo conectado con USB debugging.

---

<!-- ## 📸 Capturas

_Si tienes tiempo, agrega screenshots aquí para mostrar el diseño visual._ -->

<!-- --- -->

## 🔐 Notas

- La clave API está centralizada en `src/constants` y se pasa por headers.
- El proyecto está optimizado para dispositivos móviles (Android/iOS).
- Pensado para ser fácilmente escalable y legible.

---

## 📦 Descargar APK

Puedes probar la app descargando el APK de la última versión desde la sección de releases:

[⬇️ Descargar última versión](https://github.com/Miguel22agudelo/catBreedsApp/releases/latest)

O directamente:

[![Descargar APK](https://img.shields.io/badge/📲%20Download%20APK-blue?style=for-the-badge)](https://github.com/Miguel22agudelo/catBreedsApp/releases/latest/download/app-release.apk)

## 🧑‍💻 Autor

Desarrollado por [Miguel Ángel Agudelo Lopera](https://github.com/Miguel22agudelo)  
como parte del proceso técnico para Pragma.
