import './Direct2.css';
import './napravlenie1.css';
import photo1 from './photos/img6.jpg';
import photo2_2 from './photos/img2_2.jpeg';
import photo2_3 from './photos/img2_3.jpg';
import photo2_4 from './photos/img2_4.jpg';


function Direct2(){
    return(
        <div className="Direct2">
            <header className="Directionsss-header">
                <div className="Direct">
                    <br/>
                    
                    <div className="boxs1">
                        <div style={{  fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Персональные тренировки</div>
                    </div>
                    <br/>

                    <div className="box3">
                        <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"25px"}}>Персональные тренировки – это самый быстрый, эффективный
                        и безопасный путь к достижению поставленных фитнес-целей. Индивидуальная программа здоровья под наблюдением коуча учитывает
                        особенности организма и раскрывает все возможности тела, что в итоге дает принципиально новое понимание себя и поддерживает
                        мотивацию к постоянному совершенствованию.</div>

                    </div>
                    
                    
                    <div className="box2">
                        <div className="containerrr">
                            <img src={photo1} />
                            <img src={photo2_2} />
                            <img src={photo2_3}/>
                            <img src={photo2_4}/>
                        </div>
                    </div>
                    
                    <div className="box7">
                        <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"50px"}}>Об услуге</div>
                    </div>


                    <div className="boxs8">
                            <div className="rectangle2">
                                <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"40px",paddingTop:"40px",paddingRight:"40px"}}>ЭФФЕКТИВНОСТЬ И БЕЗОПАСНОСТЬ</div>
                                <br></br>
                                <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"40px",paddingBottom:"40px",paddingRight:"40px"}}>Персональный тренер подбирает необходимую нагрузку,
                                следит за правильностью выполнения упражнений и решает, когда пора увеличивать вес и число повторов. Он регулярно
                                корректирует тренировочную программу на основании текущих показателей, чтобы привести вас к целевым результатам.
                                </div>
                            </div>
                    </div>

                    <div className="box9">
                        <div className="rectangle2 text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"40px",paddingTop:"40px",paddingRight:"40px"}}>МОТИВАЦИЯ И ИНТЕРЕС</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"40px",paddingBottom:"40px",paddingRight:"40px"}}>Фитнес-тренер – это человек, который умеет побеждать.
                                Он уже прошел все этапы, справился с самыми распространенными проблемами, – болью в мышцах, эффектом плато, падением
                                мотивации и т.д. – поэтому он как никто другой, сможет правильно Вас настроить и подбодрить, когда Вам покажется, что
                                сил не осталось. Благодаря постоянному мониторингу тенденций отрасли, наставник всегда в курсе
                                инновационных тренировок. Это позволяет разнообразить занятия и делать их более эффективными.
                            </div>
                        </div>
                    </div>


                        


                </div>
            </header>
        </div>
    )
}

export default Direct2;