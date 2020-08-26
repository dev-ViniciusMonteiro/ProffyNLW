import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'


function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t31.0-8/20247876_1526276687409323_3820380078058162379_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=P8tGZ7G_5cMAX8AnSkH&_nc_ht=scontent.fcpq2-1.fna&oh=393fbb2e4b8f774844757bfec87102ae&oe=5F50BF96" alt="Vinicius Monteiro"/>
            <div>
                <strong>Vinicius Monteiro</strong>
                <span>Ciencia da computacao</span>
            </div>
        </header>
        <p>
            Entusiasta na area de programacao.
            <br/> <br/>
            Apaixonado por sofrer, nao achar o bug, escutar que qualquer pessoa faz e um mestre em ouvir mas isso nem 'e tao dificil'
        </p>
        <footer>
            <p>
                Preco por Hora <strong>R$ 500.00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;