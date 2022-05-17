import React from "react";

const BackOfficeNeeds = () => {
    return <div>
        <form action="#" method="POST" source="custom" name="form" style={{padding: "10px"}}>
            <div>
                <label htmlFor="name-c11f">Ім'я</label>
                <input type="text" placeholder="Введите Ваше имя" id="name-c11f" name="name" required=""/>
            </div>
            <div>
                <label htmlFor="email-c11f">Эл. пошта</label>
                <input type="email" placeholder="Введите Ваш email адрес" id="email-c11f" name="email" required=""/>
            </div>
            <div>
                <label htmlFor="message-c11f">Запит</label>
                <textarea placeholder="Додайте ваш запит" rows="4" cols="50" id="message-c11f" name="message"
                          required=""/>
            </div>
            <div>
                <input type="checkbox" id="agree-3dbb" name="agree" required=""/>
                <label htmlFor="agree-3dbb">
                    Я приймаю <a href="#">умови надання послуг</a>
                </label>
            </div>
            <div>
                <label htmlFor="select-7d46">Выбрати</label>
                <div>
                    <select id="select-7d46" name="select">
                        <option value="Item 1">Малий бізнес</option>
                        <option value="Item 2">Середній бізнес</option>
                        <option value="Item 3">Великий бізнес</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" className="u-caret">
                        <path fill="currentColor" d="M4 8L0 4h8z"/>
                    </svg>
                </div>
            </div>
            <div>
                <a href="#">Далі</a>
                <input type="submit" value="submit"/>
            </div>
        </form>
    </div>
};

export default BackOfficeNeeds;
