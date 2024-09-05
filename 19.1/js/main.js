
    const apiKey = '862224482d621b9aede974d50f5c51ba';
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

    let timezoneOffsetInSeconds;
    let isTimeIntervalSet = false;

    // Привязка элементов DOM
    const date = document.querySelector('.date');
    const time = document.querySelector('.time');
    const myLocation = document.querySelector('.location');
    const temperature = document.querySelector('.temperature');
    const feelsLike = document.querySelector('.feels-like');
    const pressure = document.querySelector('.pressure');
    const humidity = document.querySelector('.humidity');
    const cloudiness = document.querySelector('.cloudiness');
    const wind = document.querySelector('.wind');
    const btn = document.getElementById('getWeatherBtn');
    const loading = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');

    // Функция для обновления данных в DOM
    function updateWeatherData(element, label, value) {
      element.textContent = `${label}: ${value}`;
    }

    // Функция форматирования времени
    function formatTime() {
      const currentDate = new Date();
      const utcTimeInMillis = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
      const localTimeInMillis = utcTimeInMillis + timezoneOffsetInSeconds * 1000;
      const localDate = new Date(localTimeInMillis);  

      const hours = String(localDate.getHours()).padStart(2, '0');
      const minutes = String(localDate.getMinutes()).padStart(2, '0');
      const day = localDate.getDate();
      const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
      const month = monthNames[localDate.getMonth()];
      const weekdayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ];
      const weekday = weekdayNames[localDate.getDay()];

      // Обновляем дату и время в DOM
      if (date && time) {
        date.textContent = `${weekday}, ${day} ${month}`;
        time.textContent = `${hours}:${minutes}`;
      }
    }

    // Асинхронная функция для получения данных о погоде
    async function showWeather() {
      try {
        loading.style.display = 'block'; // Показываем индикатор загрузки

        const response = await fetch(apiUrl); // Выполняем запрос к API
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); // Если ошибка, выбрасываем исключение

        const data = await response.json(); // Преобразуем ответ в JSON

        // Проверка данных на корректность
        if (
          !data || !data.main || typeof data.main.temp !== 'number' ||
          !data.sys || typeof data.sys.country !== 'string' ||
          !data.wind || typeof data.wind.speed !== 'number' ||
          typeof data.timezone !== 'number'
        ) throw new Error('Invalid data structure from API');

        timezoneOffsetInSeconds = data.timezone; // Устанавливаем временную зону

        // Обновляем данные о погоде в DOM
        updateWeatherData(myLocation, 'Location', `${data.name}, ${data.sys.country}`);
        updateWeatherData(temperature, 'Temperature', `${data.main.temp}°C`);
        updateWeatherData(feelsLike, 'Feels Like', `${data.main.feels_like}°C`);
        updateWeatherData(pressure, 'Pressure', `${data.main.pressure} hPa`);
        updateWeatherData(humidity, 'Humidity', `${data.main.humidity}%`);
        updateWeatherData(cloudiness, 'Cloudiness', `${data.clouds.all}%`);
        updateWeatherData(wind, 'Wind', `${data.wind.speed} m/s`);

        formatTime(); // Форматируем и отображаем время

        // Устанавливаем обновление времени каждую секунду, если оно не установлено
        if (!isTimeIntervalSet) {
          setInterval(formatTime, 1000);
          isTimeIntervalSet = true;
        }

        loading.style.display = 'none'; // Скрываем индикатор загрузки
        errorMessage.textContent = ''; // Очищаем сообщение об ошибке
      } catch (error) {
        loading.style.display = 'none'; // Скрываем индикатор загрузки при ошибке
        errorMessage.textContent = 'Failed to fetch weather data. Please try again later.'; // Выводим сообщение об ошибке
        console.error('Error fetching weather data:', error); // Логируем ошибку в консоль
      }
    }

    // Обработчик нажатия на кнопку
    btn.addEventListener('click', showWeather);

    // Первоначальный вызов функции для получения данных при загрузке страницы
    showWeather()
      .then(result => {
        console.log('Result:', result);
      })
      .catch(error => {
        console.error('An error in the execution of an asynchronous function:', error);
      });
