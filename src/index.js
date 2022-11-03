import React, { Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import App from './App';
import './i18n.js';
import { ContextProvider } from './Context';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ne'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },

    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

  const loadingMarkup = (
    <div className='py-4 text-center'>
      <h2> Loading ..</h2>
    </div>
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback = {loadingMarkup}>
    <ContextProvider>
    <App />
    </ContextProvider>,
    </Suspense>
  </React.StrictMode>
);

