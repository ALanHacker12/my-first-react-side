import './Modal.css'
import React from 'react';
import ReactDOM from "react-dom"; 
import { useState, useHistory } from "react";
 
export const Modal = (props) => {
 
  
    return(
    <form className="form1" > 
      <div className =  "modal"  id="myModal" class="modal"  >
        <div className = 'modal__content' class="modal-dialog_modal-sm">
          <div className="container">  
            <div className="row">
            
            </div>
            <div className="row">
              <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                <h2 className = "modal-header-h2">Введите данные:</h2>
            </div>
            <div className="row">
              <input 
                type="text" 
                placeholder="your@email.com" 
                name="email" 
                className="placeholder"
                 
                required 
              />
              <input 
                type="text"
                placeholder="Ваш пароль"
                name="parol" 
                className="placeholder" 
                 
                required 
              />
              <button className="submit"   type="submit">Вход/Регистрация</button>
            </div>
            
          </div>
        </div>
      </div>
    </form>
    )
}