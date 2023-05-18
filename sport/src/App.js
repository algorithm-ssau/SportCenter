import photo from './photos/IMG_0251.jpg';
import './App.css';

function App() { 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
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
      </header> 
    </div> 
  ); 
}

export default App;

export default App;
