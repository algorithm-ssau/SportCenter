import React from 'react';

import './Categ.css';
import './napravlenie1.css';
import photo1 from './photos/img1.jpeg';
import photo1_2 from './photos/img1_2.jpg';
import photo1_3 from './photos/img1_3.jpg';
import photo1_4 from './photos/img1_4.jpeg';


function Napr1() {
  return (
    <div className="Napr1">
            <header className="Directions-header">
                <div className="Direct">
                    <br/>
                    
                    <div className="boxs1">
                        <div style={{  fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Групповые программы</div>
                    </div>
                    <br/>

                    <div className="box3">
                        <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"25px"}}>В фитнес-клубе FITenergy есть разные виды тренировок:
                        функциональные и силовые, танцевальные и статические. Большой популярностью пользуются боевые искусства и занятия с элементами
                        бокса. Очень эффективны аэробные и силовые аквапрограммы в бассейне. Тренировки на земле и в воде рассчитаны на людей разного
                        уровня подготовки – каждый клиент может выбрать то направление, которое ему подходит.</div>

                    </div>
                    
                    
                    <div className="box2">
                        <div className="containerrr">
                            <img src={photo1} />
                            <img src={photo1_2} />
                            <img src={photo1_3}/>
                            <img src={photo1_4}/>
                        </div>
                    </div>
                    
                    
                    <div className="box4">
                        <div className="rectangle">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Аэробные программы</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Аэробные программы – классика любого фитнес-центра. Во время таких занятий потребляется
                                                      большое количество кислорода, за счет чего быстро уходит лишний вес. В клубе FITenergy вы найдете полный спектр
                                                      аэробных тренировок: от традиционных до самых необычных и модных.Аэробные программы – классика любого
                                                      фитнес-центра. Во время таких занятий потребляется большое количество кислорода, за счет чего быстро
                                                      уходит лишний вес. В клубе FITenergy вы найдете полный спектр аэробных тренировок: от традиционных до самых
                                                      необычных и модных.
                            </div>
                        </div>
                    </div>

                    <div className="box5">
                        <div className="rectangle text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",padding:"10px"}}>Силовая тренировка</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",padding:"10px"}}>Групповые программы в фитнес-центре FITenergy обязательно
                                включают комплекс упражнений для силовых тренировок. Они развивают выносливость, увеличивают мышечную силу, формируют рельеф.
                                Занятия проводятся с использованием оборудования: сборные штанги, бодибары, гантели, амортизаторы, медицинские мячи, фитболы
                                и т.д. Инвентарь прорабатывает как все тело, так и отдельные мышечные группы.
                            </div>
                        </div>
                    </div>

                    <div className="box6">
                        <div className="rectangle text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",padding:"10px"}}>Танцевальные программы</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",padding:"10px"}}>Танцевальные программы – это любимый многими вид активности,
                                ведь сложно найти более искренний и завораживающий способ передать эмоции и чувства. А еще у танца нет возраста: научиться
                                правильно и красиво двигаться может каждый, главное – желание! Наши хореографы обучают самым популярным танцевальным
                                направлениям и помогают каждому почувствовать свое тело.
                            </div>
                        </div>
                    </div>
                        


                </div>
            </header>
        </div>
  );
}

export default Napr1;