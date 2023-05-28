//import './Directions.css';
import './Direct4.css';
import './napravlenie1.css';
import photo1 from './photos/img3.jpg';
import photo4_2 from './photos/img4_2.jpg';
import photo4_3 from './photos/img4_3.jpg';
import photo4_4 from './photos/img4_4.jpg';


function Direct4(){
    return(
        <div className="Direct4">
            <header className="Directions-header">
                <div className="Direct">
                    <br/>
                    
                    <div className="boxs1">
                        <div style={{  fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Бассейн с морской водой</div>
                    </div>
                    <br/>

                    <div className="box3">
                        <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"25px"}}>Визитная карточка большей части клубов FITenergy – бассейны
                        с морской водой. Она известна своими целебными свойствами, снимает стресс и создает дополнительный терапевтический эффект
                        для кожи. Бассейны фитнес-клубов FITenergy оборудованы многоступенчатой системой очистки, обеспечивающей идеальное состояние воды.
                        Вы можете заниматься самостоятельно или с инструктором, а также посещать групповые тренировки.</div>

                    </div>
                    
                    
                    <div className="box2">
                        <div className="containerrr">
                            <img src={photo1} />
                            <img src={photo4_2} />
                            <img src={photo4_3}/>
                            <img src={photo4_4}/>
                        </div>
                    </div>


                        <div className="box4">
                            <div className="rectangle text">
                                <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Аквааэробика</div>
                                <br></br>
                                <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Аквааэробика – это комплекс упражнений,
                                выполняемых в воде под ритмичную музыку. Тренировки в бассейне пользуются огромной популярностью, т.к. водная среда
                                минимизирует нагрузку на опорно-двигательный аппарат и подходит практически всем. Благодаря сопротивлению воды
                                равномерно прорабатываются все участки тела, повышается выносливость и укрепляется сердечно-сосудистая система. В
                                клубе FITenergy есть аквапрограммы как для начинающих, так и для подготовленных. Занятия проводятся с
                                использованием специального оборудования и помогают быстро привести тело в тонус.
                                </div>
                            </div>
                        </div>

                        <div className="box11">
                            <div className="rectangle text">
                                <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Плавание</div>
                                <br></br>
                                <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Плавание в бассейне – это идеальный вид активности,
                                который помогает быстро подтянуть тело, натренировать мышцы и улучшить эмоциональное состояние. В FITenergy вы можете
                                тренироваться самостоятельно, а также под контролем инструктора, который обучит вас правильной технике плавания. Плавание в
                                бассейне – это идеальный вид активности, который помогает быстро подтянуть тело, натренировать мышцы и улучшить эмоциональное
                                состояние. В FITenergy вы можете тренироваться самостоятельно, а также под контролем инструктора, который обучит вас
                                правильной технике плавания.
                                </div>
                            </div>
                        </div>

                        <div className="box12">
                            <div className="rectangle text">
                                <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Детские занятия</div>
                                <br></br>
                                <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Детские занятия в бассейне построены по принципу
                                увлекательной игры и помогают малышам быстро освоиться в водной среде. Самые маленькие учатся держаться без опоры,
                                преодолевают водобоязнь, а дети постарше  осваивают техники плавания, участвуют в занимательных играх и эстафетах.
                                </div>
                            </div>
                        </div>
                        


                </div>
            </header>
        </div>
    )
}

export default Direct4;