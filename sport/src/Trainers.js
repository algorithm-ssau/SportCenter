import photo from './photos/IMG_0251.jpg';
import './Trainers.css';

function Trainers() { 
  return ( 
    <div className="Trainers"> 
      <header className="Trainers-header"> 
      <br/>
      <div style={{ textAlign: "center",fontFamily: "Montserrat", fontWeight: "bold"}}>Наши Тренеры</div>
      <br/>

        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
            <img src={photo} className="imgBox" alt="logo" /> 
            </div>
            <div className="content">
              <h2>
                <span style={{fontSize: "medium"}}>Тренер </span> <br/>
                <span style={{fontSize: "small"}}> Его описание </span>
              </h2>
            </div>
          </div>
        </div>
      </header> 
    </div> 
    
  ); 
}

export default Trainers;
