## Домашняя работа 5 по предмету "Кроссплатформенная разработка" 3 курс

##### Хамид Карим
---
Я взял фронтенд из 3 дз(Там немного рефакторил, но в целом, это тот же код) и бэкенд из 4 дз.

Создал авторизацию, регистрацию и logout. Также, сделал список сущностей для просмотра. На него можно перейти в header есть ссылки на конкретный список объектов. Если нажать на карточку, можно провалиться в Detail View. Есть админка (также по имени в header после входа), ну или /admin. Там есть список всех моделей, на каждую можно перейти и сделать CRUD операции.

Для запуска проекта(будут запущены все нужные контейнеры). React будет доступен по 3000 порту, а вот express сделал на 8080, чтобы избежать коллизии портов:
```
docker compose up --build
```

#### Backend
Для запуска бэкенда требуется создать .env файл по подобию .env.example в папке backend/

Реализовано так, что изменять данные и просматривать можно только после регистрации. В задании не указано про создание системы ролей, поэтому и просто авторизованный пользователь может использовать все требуемые действия.

#### Frontend
Я использовал как MUI, так и Ant design. Использовал Ant только на страницах атворизации, и как мне кажется, он показал себя намного лучше чем MUI.