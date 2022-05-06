import React from 'react';

function Footer() {
  return (
    <footer className="bg-white w-full bottom-0 pt-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <a className="text-gray-600 hover:text-orange-400  transition-colors duration-200" href="/">
              Главная
            </a>
          </li>
          <li className="my-2">
            <a className="text-gray-600 hover:text-orange-400  transition-colors duration-200" href="/delivery">
              Доставка
            </a>
          </li>
          <li className="my-2">
            <a className="text-gray-600 hover:text-orange-400  transition-colors duration-200" href="/aboutus">
              О Нас
            </a>
          </li>
          <li className="my-2">
            <a className="text-gray-600 hover:text-orange-400  transition-colors duration-200" href="/hitssales">
              Хиты Продаж
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a href="https://github.com/mallouny" className="text-gray-600 hover:text-orange-400  transition-colors duration-200">
            <svg xmlns="http://www.w3.o rg/2000/svg" width="20" height="20" fill="currentColor" className="text-xl hover:text-orange-400  transition-colors duration-200" viewBox="0 0 1792 1792">
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/vladislav-bahaiev-79929621a/" className="text-gray-600 hover:text-orange-400  transition-colors duration-200">
            <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-orange-400  transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
            </svg>
          </a>
          <a href="https://instagram.com/mallouny" className="text-gray-600 hover:text-orange-400  transition-colors duration-200">
            <svg viewBox="0 0 24 24" height="20" width="20" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-xl hover:text-orange-400  mt-1 transition-colors duration-200">
              <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
              <circle cx="11.994" cy="11.979" r="3.003" />
            </svg>
          </a>
        </div>
        <div className="text-center text-gray-500 pt-4 font-light flex items-center justify-center">
          Created by Mallouny
        </div>
      </div>
    </footer>

  );
}

export default Footer;
