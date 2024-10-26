import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Phone = ({phone,setPhone , handleChange}) => {

    return (
        <PhoneInput
        country={'kg'}       // Установка страны по умолчанию
        value={phone}        // Значение состояния
        onChange={handleChange}  // Обновление состояния при вводе
        placeholder="Введите номер телефона"
      />
    );
};

export default Phone;
