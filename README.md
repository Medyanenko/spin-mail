[Демо](https://medyanenko.github.io/spin-mail/)

## Відповідно до ТЗ було реалізовано проект:
1.Вхід за допомогою Google Auth.

2.Інтерфейс проекту складається з двох частин:
- сайдбар із списком папок (перехід між папкам не працює);
- основний блок зі списком листів, що складаються з теми листів та дати (по 50 шт на сторінці).
Також додані кнопки пагінації, для переходу між сторінками.

3.При кліці на обраний лист, рендириться прев"ю листа з інформацією про дату, від кого та кому надісланий лист і безпосередньо текст.
Додана кнопка "⟵ Back", щоб повернутися на попередню сторінку та "Show more...", при кліці на яку відкривається повний html-лист, попередньо декодований з формату base64.

4.Стилізовано за допомогою методології style module.

### Technical stack:
-react

-react-redux

-reduxjs/toolkit

-react-router-dom

-react-oauth/google

-axios

-js-base64