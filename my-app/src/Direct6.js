//import './Directions.css';
import './napravlenie1.css';
import './Direct6.css';
import './Direct2.css';
import photo1 from './photos/img5.jpg';
import photo6_2 from './photos/img6_2.jpeg';
import photo6_3 from './photos/img6_3.jpg';
import photo6_4 from './photos/img6_4.jpg';


function Direct6(){
    return(
        <div className="Direct5">
            <header className="Dir-header">
                <div className="Direct">
                    <br></br>
                    
                    <div className="boxs1">
                        <div style={{  fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Стретчинг</div>
                    </div>
                    

                    <div className="box13">
                        <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"25px"}}>Занятия растяжкой - это один из самых гармоничных видов фитнеса.
                        А если у Вас лишний вес или, напротив, недостаток веса и силы, упражнения на гибкость помогут быстрее достичь желаемой формы.
                        Они весьма энергозатратны и развивают очень важный внутренний слой мышц (особенно вдоль позвоночника).</div>

                    </div>
                    
                    <br></br>
                    <div className="box2">
                        <div className="containerrr">
                            <img src={photo1} />
                            <img src={photo6_2} />
                            <img src={photo6_3}/>
                            <img src={photo6_4}/>
                        </div>
                    </div>


                    <div className="box4">
                        <div className="rectangle">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Аэростретчинг</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Упражнения на растяжку на подвесных лентах – относительно новый вид
                                спорта с неповторимой эстетикой. Тренировки направлены на укрепление мышц и сухожилий, повышение их эластичности, развитие
                                выносливости и физической силы. Упражнения благоприятно сказываются на работе суставов, не перегружая их. При системном подходе и
                                правильном выполнении можно не только улучшить гибкость и избавиться от лишнего веса, но и сформировать соблазнительные очертания
                                тела, предотвратить развитие заболеваний опорно-двигательного аппарата, укрепить здоровье.
                            </div>
                        </div>
                    </div>

                    <div className="box17">
                        <div className="rectangle2">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}}>Как проходят занятия растяжкой</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"40px"}}>Заниматься стретчингом вы сможете в небольших группах либо индивидуально с тренером.
                                В любом случае программа занятия будет состоять из:<br></br><br/>Активной разминки и разогрева целевых мышц, силовой подкачки.<br></br><br/>Суставной гимнастики для мягкого раскрытия суставов.<br></br><br/>Непосредственно упражнений на растяжку, в том числе в парах или с тренером.<br></br><br/>Заминки в конце тренировки.
                                Если у вас совсем «деревянные» и тугие мышцы, это также не является препятствием для занятий растяжкой. Тренер научит вас
                                чувствовать свое тело и уверенно прогрессировать, приближаясь к желанному шпагату каждый день.
                            </div>
                        </div>
                    </div>

                    <div className="box18">
                        <div className="rectangle2">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}}>Польза растяжки</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"40px"}}>Эластичные мышцы будут меньше подвержены травмам и растяжениям, уменьшится
                                вероятность вывихов. Если заниматься растяжкой регулярно и на все тело, то конечности перестанет сводить при неловких движениях.
                                В целом вы начнете лучше чувствовать свое тело.
                                Отдельную пользу стретчинг приносит для спины. После комплекса упражнений у вас:<br></br><br/>Улучшится кровообращение позвоночника.<br></br><br/>Уйдут зажимы в шейном отделе, которые вызывают онемение и головные боли.<br></br><br/>Увеличится свободный прогиб в спине.<br></br><br/>Укрепится мышечный корсет.
                            </div>
                        </div>
                    </div>


                        
                        


                </div>
            </header>
        </div>
    )
}

export default Direct6;