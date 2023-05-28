//import './Directions.css';
import './napravlenie1.css';
import './Direct5.css';
import photo1 from './photos/img4.jpg';
import photo5_2 from './photos/img5_2.jpg';
import photo5_3 from './photos/img5_3.jpg';
import photo5_4 from './photos/img5_4.jpg';


function Direct5(){
    return(
        <div className="Direct5">
            <header className="Directions-headerrr">
                <div className="Direct">
                    <br></br>
                    
                    <div className="boxs1">
                        <div style={{  fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Йога</div>
                    </div>
                    

                    <div className="box13">
                        <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"25px"}}>Древнейшая индийская система самосовершенствования
                        человека на всех уровнях существования. Комплексы физических и дыхательных упражнений каждый раз делают вас на шаг ближе гармонии.
                        Комплекс специально подобранных упражнений на развитие гибкости и оздоровление позвоночника, основанный на методе Б.К.С. Айенгара.
                        Логически выстроенная последовательность асан подойдёт для любого уровня подготовки и позволит улучшить подвижность суставов.</div>

                    </div>
                    <br></br>
                    
                    <div className="box2">
                        <div className="containerrr">
                            <img src={photo1} />
                            <img src={photo5_2} />
                            <img src={photo5_3}/>
                            <img src={photo5_4}/>
                        </div>
                    </div>


                    <div className="box4">
                        <div className="rectangle text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Антигравити йога</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>AntiGravity помогает развить гибкость, укрепить суставы,
                                улучшить их подвижность, расслабить мышцы, снять напряжение и отвлечься от повседневных стрессов.
                            </div>
                        </div>
                    </div>

                    <div className="box14">
                        <div className="rectangle text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Йога для начинающих</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Занятия растяжкой и йогой буквально снимают камень с груди,
                                избавляя от забитости и зажатости мышц. Улучшается кровообращение, тело в целом приходит в тонус. 
                                Особую пользу йога приносит для спины и грудного отдела. Мягкое раскрытие и растяжка плеч, спины
                                приводят к тому, что человеку буквально становится легче дышать.  Мышцы спины укрепляются,
                                снимается их гипертонус. Это незаменимая практика для тех, кто подолгу занят офисной работой.
                            </div>
                        </div>
                    </div>

                    <div className="box15">
                        <div className="rectangle text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Йоговские растяжки</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Йоговские растяжки - это суставная гимнастика Суукшма
                                Вьяяма и динамические практики. Предназначены для разогрева суставов и вытяжения мышц ног. Динамические практики позволяют
                                поддерживать тело в разогретом состоянии и способствуют вытяжению позвоночника и мышц рук. Йоговские растяжки - это комплексный
                                подход к обретению гибкости тела и гармонии.
                            </div>
                        </div>
                    </div>


                    <div className="box16">
                        <div className="rectangle text">
                            <div style={{fontFamily:"Garamond",fontWeight:"bolder",fontSize:"30px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}}>Йога в гамаках</div>
                            <br></br>
                            <div style={{fontFamily:"Garamond",fontWeight:"normal",fontSize:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Ощутить чувство свободы, парения и безмятежности теперь доступно каждому,
                                благодаря занятиям Йога в гамаках. В процессе занятия позы могут быть разными: в гамаке лежат, сидят, висят и закручиваются в
                                полотно. За счет того, что все движения происходят в подвешенном и перевернутом состоянии, выпрямляется и вытягивается
                                позвоночник, снимается напряжение с суставов, шеи и спины, а положение вниз головой запускает механизм самообновления.
                                Практика избавляет от дискомфорта в теле, развивает гибкость, улучшает общее состояние организма.


                            </div>
                        </div>
                    </div>
                        


                </div>
            </header>
        </div>
    )
}

export default Direct5;