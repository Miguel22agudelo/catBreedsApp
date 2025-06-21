# 🐱 Catbreeds App

Prueba técnica para desarrollador móvil en React Native.  
Esta aplicación permite explorar distintas razas de gatos utilizando la API pública de [TheCatAPI](https://thecatapi.com/), mostrando información como origen, inteligencia y esperanza de vida.

---

## 🚀 Características

- ✅ Consumo de API con autenticación mediante API Key.
- ✅ Estructura modular basada en principios de arquitectura limpia.
- ✅ Navegación con `@react-navigation/native`.
- ✅ Tipado completo con **TypeScript**.
- ✅ AxiosAdapter para manejo limpio de HTTP.
- ✅ Pantallas:
  - `LandingScreen`: Listado de razas con búsqueda y scroll infinito.
  - `DetailScreen`: Detalle completo de cada raza (en desarrollo).
  - `SplashScreen`: (pendiente si decides agregar animación).

---

## 📂 Estructura del proyecto

```
/src
├── api
│   └── catService.ts             # Lógica para consumir TheCatAPI
│
├── config
│   └── adapters
│       ├── http.adapter.ts       # AxiosAdapter reutilizable
│       └── catApiAdapter.ts      # Cliente configurado con API base
│
├── constants
│   └── index.ts                  # API key y constantes globales
│
├── hooks
│   └── useCatBreedsPaginated.ts # Hook de paginación, carga y búsqueda
│
├── components
│   └── molecules
│       ├── BreedCard.tsx         # Componente de tarjeta de raza
│       └── SearchInput.tsx       # Input reutilizable
│
├── screens
│   ├── LandingScreen.tsx         # Vista principal
│   └── DetailScreen.tsx          # Vista de detalle (próximamente)
│
├── navigation
│   └── RootNavigator.tsx         # Navegador principal de la app
│
├── types
│   └── Breed.ts                  # Tipado de las razas
│
└── index.ts                      # Punto de entrada compartido (opcional)
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
git clone https://github.com/Miguel22agudelo/catbreeds-app.git
cd catbreeds-app
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

## 📸 Capturas

_Si tienes tiempo, agrega screenshots aquí para mostrar el diseño visual._

---

## 🔐 Notas

- La clave API está centralizada en `src/constants` y se pasa por headers.
- El proyecto está optimizado para dispositivos móviles (Android/iOS).
- Pensado para ser fácilmente escalable y legible.

---

## 🧑‍💻 Autor

Desarrollado por [Miguel Ángel Agudelo](https://github.com/Miguel22agudelo)  
como parte del proceso técnico para Pragma.
