# SPA for AbeloHost
# SPA for AbeloHost

## Technical Requirements

### Technologies
- **Next.js** & **TypeScript**: The application must be developed using Next.js and TypeScript.
- **SCSS Modules** & **Bootstrap**: Use SCSS Modules for custom styles and Bootstrap for layout.
- **State Management with Zustand**: Manage application state (favorite cities, search results) using Zustand.
- **API Interaction with Axios**: Fetch weather data from OpenWeatherMap API using Axios.
- **Code Quality**: Utilize ESLint for code linting and Stylelint for maintaining CSS/SCSS consistency.



## Features

### Pages
#### 1. Home Page
- Search field to enter a city name.
- Display current weather for the selected city.
- Retrieve the last selected city from **localStorage** (default: Netherlands).
- Use **Zustand Persistent Store** to store the selected city and load data accordingly.

#### 2. Weather Forecast Page
- Displays detailed weather forecasts for several upcoming days.
- User is redirected here upon entering a city name in the search field.

#### 3. Favorites Page
- Displays a list of saved favorite cities.
- Each city shows brief weather information for the current day.

---

## State Management (Zustand)
- **Favorites**: A global store for managing favorite cities.
- **Search Results**: Store search queries and results in the global state.
- **Persistent Storage**: Retain the selected city after page reload using Zustand's persistence mechanism.

---

## UI/UX Considerations
- Loading indicators during data fetching.
- Proper error handling and user-friendly messages.
- Responsive design with Bootstrap.

---

## Evaluation Criteria
1. Ability to work with external APIs and display relevant data.
2. Effective state management using Zustand.
3. Handling different UI states (loading, error, success).
4. Clean project structure and maintainable codebase.




Deploy:  [https://testwork07.vercel.app/](https://testwork07.vercel.app/)

## Author

- [Pavel Gordienko](https://github.com/gordienkodev)

## Setup and Running

- Use `node 22.x` or higher.
- Clone this repo: `$ git clone https://github.com/gordienkodev/testwork07.git`. 
- Install dependencies: `$ npm install`.
- Start server: `$ npm run dev`.
- Now you can see web application to the address: `http://localhost:5173/`.

### Build

Builds the app for production to the build folder. It correctly bundles Next in production mode and optimizes the build for the best performance.

```bash
npm run build
```

## Stack

- React
- Next.js
- Typescript
- SCSS Modules
- Bootstrap
- Axios
- ESLint
- Zustand
- Stylelint
- Prettier
 
## Folder structure

- app – Main application pages.
- components – Reusable UI components (buttons, forms, cards, etc.).
- hooks – Custom React hooks for managing state, fetching data, and handling business logic.
- store – Global state management, storing favorite cities, search results, etc.
- types – TypeScript types and constants.

## Screenshots

![image](https://github.com/user-attachments/assets/ab5b24a9-c479-4580-916c-3265e3018556)
![image](https://github.com/user-attachments/assets/f8cba72a-59d7-4e92-9190-eb90614b7345)
![image](https://github.com/user-attachments/assets/5a8e5b6c-cc95-48c0-b5c8-3dc3dc7f6352)
![image](https://github.com/user-attachments/assets/a1def3b6-93bd-48d8-a98e-a86b5b8ebe34)
![image](https://github.com/user-attachments/assets/936ffc36-1fed-4482-9e26-ee32b2e9512a)


## Task
![image](https://github.com/user-attachments/assets/f254ffc4-b8de-4597-9036-0bec2b10ce9b)





Создайте приложение для просмотра текущей погоды и прогноза на несколько дней вперед, используя OpenWeatherMap API. Приложение должно позволять пользователям искать погоду в разных городах и сохранять избранные города.

Технические требования:

Next.js и TypeScript:
Приложение должно быть написано с использованием Next.js и TypeScript.
Структура страниц:
Главная страница: Поле поиска для ввода города и отображение текущей погоды в выбранном городе.
Страница прогноза погоды: Детальный прогноз погоды на несколько дней вперед.
Страница избранного: Отображает сохраненные пользователем города с краткой информацией о погоде.
SCSS Modules и Bootstrap:
Используйте SCSS Modules для кастомных стилей и Bootstrap для верстки.
Работа с API:
Используйте OpenWeatherMap API для получения текущей погоды и прогноза.
Взаимодействие с API должно быть реализовано через Axios.
Состояние приложения:
Управляйте состоянием (избранные города, результаты поиска) с помощью Zustand.
Избранные города должны сохраняться в глобальном состоянии и оставаться после перезагрузки страницы.
UI/UX:
Обеспечьте понятный интерфейс, включая индикацию загрузки данных и обработку ошибок.
Качество кода:
Используйте ESLint для проверки кода на соответствие стандартам качества.
Настройте линтер для стилей (например, Stylelint) для поддержания единообразия и качества CSS/SCSS кода.
 

Что будет оцениваться:
Умение работать с внешним API и отображать данные пользователям.
Организация состояния приложения и работа с Zustand.
Обработка различных состояний интерфейса (загрузка, ошибки).
Структура проекта и поддержание чистоты кода.
	
	
