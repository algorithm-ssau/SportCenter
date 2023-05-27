import photo from './photos/tr1.jpg';
import photo from './photos/tr1.jpg';
import photo from './photos/tr1.jpg';
import photo from './photos/tr1.jpg';
import photo from './photos/tr1.jpg';
import './Trainers.css';

function Trainers() { 
  return ( 
    <div className="Trainers"> 
      <header className="Trainers-header"> 
      <br/>
      <div className='Trainers-head'>
              <div style={{ textAlign: "center",fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Наши Тренеры</div>
              <a href='direct'> </a>
      </div>
      <br/>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
              <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Александр Смирнов</span> 
                <div style={{fontSize: "small"}}>Александр специализируется на функциональном тренинге и кроссфите. Его занятия направлены на развитие силы, выносливости и улучшение общей физической формы. 
                Поможет вам подготовиться к соревнованиям и повысить уровень физической активности.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Мария Воронцова</span> <br/>
                <div style={{fontSize: "small"}}>Мария - профессиональный тренер по йоге и пилатесу. Ее занятия помогут вам расслабиться и избавиться от стресса, улучшить осанку, укрепить мышцы и повысить гибкость. 
                Мария также проводит медитации и сеансы дыхательных практик.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Денис Кузнецов </span> <br/>
                <div style={{fontSize: "small"}}> Денис является опытным тренером по плаванию. Он ведет как индивидуальные, так и групповые занятия для всех уровней: начинающих, продолжающих и профессионалов. 
                Дополнительно оказывает услуги коррекции техники плавания.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Анна Макарова</span> <br/>
                <div style={{fontSize: "small"}}>Анна специализируется на танцах различных стилей – от хип-хопа и джаз-фанка до традиционных бальных танцев. 
                Поможет вам научиться передвигаться под музыку, развить чувство ритма и, конечно, хорошо провести время.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Егор Соколов</span> <br/>
                <div style={{fontSize: "small"}}>Егор – опытный боксер, оказывает услуги по обучению технике бокса как для начинающих, так и для продолжающих и профессионалов. 
                Занятия помогут вам обрести самооборону, силу, уверенность и быстрое мышление.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Наталья Полякова</span> <br/>
                <div style={{fontSize: "small"}}>Наталья - сертифицированный фитнес-тренер по зумбе и аэробике. 
                Ее занятия подойдут любому уровню подготовки и гарантированно поднимут вашу энергию, улучшат выносливость и координацию движений.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Владимир Зайцев</span> <br/>
                <div style={{fontSize: "small"}}>Владимир – тренер по триатлону, поможет вам подготовиться к соревнованиям или просто овладеть комплексным набором 
                навыков в плавании, велоспорте и беге, улучшая вашу общую физическую форму.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>Ольга Романова</span> <br/>
                <div style={{fontSize: "small"}}>Ольга — тренер по стретчингу и гимнастике. Поможет вам развить гибкость, 
                укрепить мышцы, улучшить осанку и научиться выполнять основные элементы гимнастики и акробатики.</div>
              </h2>
            </div>
          </div>
        </div>
      </header> 
    </div> 
    
  ); 
}

export default Trainers;

