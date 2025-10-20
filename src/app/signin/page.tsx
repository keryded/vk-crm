// components/VkIdAuth.js
"use client"
import React, { useEffect } from 'react';
import * as VKID from '@vkid/sdk';

const VkIdAuth = () => {
  useEffect(() => {
    // Функция генерации случайной строки
    const rand = (len = 43) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
      let s = '';
      for(let i=0; i<len; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
      return s;
    };

    VKID.Config.init({
      app: 54244892,           // Вставьте сюда ID приложения VK ID
      redirectUrl: 'https://vk-crm101.vercel.app/auth/callback', // URL редиректа
      state: rand(32),
      codeVerifier: rand(43),
      scope: 'email phone',
    });
  }, []);

  return <button onClick={() => VKID.Auth.login()}>Войти через VK ID</button>;
};

export default VkIdAuth;