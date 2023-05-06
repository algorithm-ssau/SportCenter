import {body} from 'express-validator';

export const registrationValidator=[
    body('email',"Неверный формат почты").isEmail(),
    body('fullName','Имя пользователя минимум 3 символа').isLength({min:3}),
    body('phoneNumber','Некорректный номер телефона').isMobilePhone(),
];