import React, {useState} from 'react';
import { Component } from 'react-router-dom';

import s from "./registrationForm.module.css";
import portmone from '../../img/portmone.png';
import Phone from '../../img/Phone.jpg';
const RegistrationForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatePassword] = useState('');
    const [name, setName] = useState('');

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'repeatPassword':
                setRepeatePassword(value);
                break;
            case 'name':
                setName(value);
                break;
            default:
                console.log('error');
        };
    };
    
    const handleSubmit = () => {
        const {onRegistrationSubmit} = props;

        onRegistrationSubmit({email, password, repeatPassword, name});
    };

    return (
        <section>
            <h1 className={s.App}>Finance App</h1>
            <img src={Phone} className={s.Phone} alt="" />
            <div className={s.registr_bore}>
                <div>   
                <img src={portmone} className={s.portmone} alt="" />
                    <h2 className={s.Wete}>Wallet</h2>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();                                                                      
                    handleSubmit()
                }}>
                    <label htmlFor="" name="register" >
                        <input className={s.Em} type="text" placeholder="E-mail" name="email" onChange={e => {
                            handleChange(e);
                        }}/>
                    </label>
                    <label>
                        <input className={s.Powor} type="text" placeholder="Пароль" name="password" onChange={e => {
                            handleChange(e);
                        }}/>
                    </label>
                    <label>
                        <input className={s.Powor_next} type="text" placeholder="Подтвердите пароль" name="repeatPassword" onChange={e => {
                            handleChange(e);
                        }}/>
                    </label>
                    <label>
                        <input className={s.Yo_neme} type="text" placeholder="Ваше имя" name="name" onChange={e => {
                            handleChange(e);
                        }}/>
                    </label>
                    <button className={s.button_link} type="submit">Регистрация</button>
                    <button className={s.button_hit} to='/login'>Вход</button>
                </form>
        </div>
        </section>
        
    );
};

export default RegistrationForm;