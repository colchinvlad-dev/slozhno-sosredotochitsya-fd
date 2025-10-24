// Функция для переключения тем
function toggleTheme(theme) {
  // Удаляем все классы тем
  document.body.classList.remove('theme_light', 'theme_dark', 'theme_auto');
  
  // Добавляем выбранную тему
  document.body.classList.add(`theme_${theme}`);
  
  // Сохраняем выбор пользователя в localStorage
  localStorage.setItem('theme', theme);
  
  // Обновляем состояние кнопок
  updateActiveButton(theme);
}

// Функция обновления активной кнопки
function updateActiveButton(activeTheme) {
  // Находим все кнопки переключения темы
  const buttons = document.querySelectorAll('.header__theme-menu-button');
  
  // Убираем активный класс и включаем все кнопки
  buttons.forEach(button => {
    button.classList.remove('header__theme-menu-button_active');
    button.disabled = false;
  });
  
  // Находим и активируем нужную кнопку
  const activeButton = document.querySelector(`.header__theme-menu-button_type_${activeTheme}`);
  if (activeButton) {
    activeButton.classList.add('header__theme-menu-button_active');
    activeButton.disabled = true;
  }
}

// Функция инициализации темы при загрузке страницы
function initializeTheme() {
  // Пытаемся получить сохраненную тему из localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Если тема сохранена - используем её, иначе 'auto'
  const theme = savedTheme || 'auto';
  
  // Применяем тему
  toggleTheme(theme);
}

// Обработчик кликов по кнопкам темы
document.addEventListener('DOMContentLoaded', () => {
  // Находим контейнер с кнопками переключения темы
  const themeMenu = document.querySelector('.header__theme-menu');
  
  // Добавляем обработчик клика
  themeMenu.addEventListener('click', (event) => {
    // Проверяем, что кликнули по кнопке
    if (event.target.classList.contains('header__theme-menu-button')) {
      // Определяем тип темы из класса кнопки
      const themeType = event.target.classList[1].split('_').pop();
      
      // Переключаем тему
      toggleTheme(themeType);
    }
  });
  
  // Инициализируем тему при загрузке
  initializeTheme();
});