import './Direct3.css';
import './Categ.css';

import photo1 from './photos/img2.jpg';
import photo3_2 from './photos/img3_2.jpeg';
import photo3_3 from './photos/img3_3.jpg';
import photo3_4 from './photos/img3_4.jpg';


function Direct3(){
    return(
        <div className="Direct3">
            <header className="Direct-header">
                <div className="Direct">
                    <br/>
                    
                    <div className="boxs1">
                        <div style={{  fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Тренажерный зал</div>
                    </div>
                    <br/>

                    <div className="box3">
                        <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"25px"}}>Тренажерные залы FITenergy – это просторные
                        тренировочные пространства, где каждый найдет оборудование для достижения своих целей. Удобное разделение по зонам и
                        продуманное расположение обеспечивают максимальный комфорт. Все оборудование для фитнеса поставляется ведущими мировыми
                        брендами – Life Fitness, Hammer Strength и другими.</div>

                    </div>
                    
                    
                    <div className="box2">
                        <div className="containerrr">
                            <img src={photo1} />
                            <img src={photo3_2} />
                            <img src={photo3_3}/>
                            <img src={photo3_4}/>
                        </div>
                    </div>
                    
                    <div className="box7">
                        <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"50px"}}>Об услуге</div>
                    </div>


                    <div className="box8">
                        <div className="rectangle2 text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"40px",paddingTop:"40px",paddingRight:"40px"}}>ЭФФЕКТИВНЫЕ ТРЕНИРОВКИ - ВСЕ ПОД РУКОЙ</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"40px",paddingBottom:"40px",paddingRight:"40px"}}>Оборудование в наших залах грамотно расставлено,
                                поэтому вам не придется искать нужный тренажер для выполнения очередного упражнения.
                            </div>
                        </div>
                    </div>

                    <div className="box10">
                        <div className="rectangle2 text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"40px",paddingTop:"40px",paddingRight:"40px"}}>ФИТНЕС МЕНЯЕТ ЖИЗНЬ</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"40px",paddingBottom:"40px",paddingRight:"40px"}}>Регулярные тренировки – это не только красивая фигура
                                и здоровый организм, но еще и отличное настроение! Занятия ускоряют обмен веществ, способствуют выработке эндорфинов,
                                дарят энергию и заряд бодрости. В наших залах вы пройдете все запланированные этапы тренировки с комфортом и без потери времени.
                            </div>
                        </div>
                    </div>


                        


                </div>
            </header>
        </div>
    )
}

export default Direct3;