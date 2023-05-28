import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Napravlenie1 from './napravlenie1';
import './App';

import './Categ.css';

import photo1 from './photos/img1.jpeg';
import photo2 from './photos/img6.jpg';
import photo3 from './photos/img2.jpg';
import photo4 from './photos/img3.jpg';
import photo5 from './photos/img4.jpg';
import photo6 from './photos/img5.jpg';

import Direct2 from './Direct2';


function Categ() {
  return (
      //<form className="custom-form">
        
        
        <div className="Directions">
            <header className="Directions-header">
                <br/>
                <div className='Directions-head'>
                    <div style={{ textAlign: "center",fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Фитнес-программы и направления</div>
                </div>
                
                <div className="p3">
                    <div className="imgblock">
                        <div className="hover-text-one">
                            <figure className="effect-text-two">
                                <Link to="/napravlenie1"><img src={photo1} alt=""/>
                                <figcaption>
                                    <h3>Групповые <span>программы</span></h3>
                                    <p>В клубе представлено более 30 направлений групповых программ: высокоинтенсивные тренировки, функциональные тренировки, йога, стретчинг</p>
                                </figcaption></Link>

                      
                            </figure>
                        </div>
                    </div>
                    
                    <div className="imgblock">
                        <div className="hover-text-one">
                            <figure className="effect-text-two">
                                <Link to="/Direct2"><img src={photo2} alt=""/>
                                <figcaption>
                                    <h3>Персональные <span>тренировки</span></h3>
                                    <p>Выбор тренера, составление индивидуальной программы, учитывающей все пожелания и многое другое</p>
                                </figcaption></Link>
                            </figure>
                        </div>
                    </div>

                    <div className="imgblock">
                        <div className="hover-text-one">
                            <figure className="effect-text-two">
                                <Link to="/Direct3"><img src={photo3} alt=""/>
                                <figcaption>
                                    <h3>Тренажерный <span>зал</span></h3>
                                    <p>Тренажерный зал находится на двух этажах, огромный выбор блочных и нагружаемых тренажеров на все группы мышц, зона свободных весов, кардио зона</p>
                                </figcaption></Link>
                            </figure>
                        </div>
                    </div>

                    <div className="imgblock">
                        <div className="hover-text-one">
                            <figure className="effect-text-two">
                                <Link to="/Direct4"><img src={photo4} alt=""/>
                                <figcaption>
                                    <h3>Бассейн <span>с морской водой</span></h3>
                                    <p>Бассейн с морской водой, 25 метров. Детский бассейн. Аквааэробика, классическое плавание, реабилитационные курсы</p>
                                </figcaption></Link>
                            </figure>
                        </div>
                    </div>

                    <div className="imgblock">
                        <div className="hover-text-one">
                            <figure className="effect-text-two">
                                <Link to="/Direct5"><img src={photo5} alt=""/>
                                <figcaption>
                                    <h3>Йо<span>га</span></h3>
                                    <p> Занятия йогой позволяют бороться со стрессовыми состояниями, повышают гибкость позвоночника, учат управлять дыханием, способствуют оздоровлению и омоложению организма</p>
                                </figcaption></Link>
                            </figure>
                        </div>
                    </div>

                    <div className="imgblock">
                        <div className="hover-text-one">
                            <figure className="effect-text-two">
                                <Link to="/Direct6"><img src={photo6} alt=""/>
                                <figcaption>
                                    <h3>Стретчинг <span>и шпагат</span></h3>
                                    <p>Развитие гибкости и стройности, укрепление мышц тела, приобретение уверенности в себе</p>
                                </figcaption></Link>
                            </figure>
                        </div>
                    </div>
                </div>    
                
                
            </header>
            
            
        </div>
        
      //</form>
      
  );
}

export default Categ;