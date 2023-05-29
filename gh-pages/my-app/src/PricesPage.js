import React from 'react';
import card1 from './photos/card1.jpg';
import card2 from './photos/card2.jpg';
import card3 from './photos/card3.jpg';
import card4 from './photos/card4.jpg';
import card5 from './photos/card5.jpg';
import card6 from './photos/card6.jpg';
import './Trainers.css';
import './PricesPage.css';

function PricesPage() { 
  return ( 
    <div className="PricesPage"> 
      <header className="Trainers-header"> 
      <br/>
      <div className='Trainers-head'>
              <div style={{ textAlign: "center",fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Цены абонементов</div>
              <a href='direct'> </a>
      </div>
      <br/>
        <div className="cont">
       
            <div className="imgBoxes">
            <img src={card1} className="imgBoxes" alt="" /> 
            </div>
            <div className="contents">
              <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "30px"}}>1500 за 4 занятия</span> <br/>
                <br/>
                <div style={{fontSize: "15px"}}>Этот абонемент рассчитан на четыре занятия по одному из направлений, не включая персональные тренировки. 
                Данный абонемент действует только для одной конкретной секции, и не дает возможности посещать занятия в других направлениях. Если вы хотите 
                заниматься в нескольких секциях одновременно, то вам необходимо приобрести несколько абонементов на четыре занятия или выбрать безлимитный 
                абонемент на месяц.</div>
              </h2>
          </div>
        </div>
        <div className="cont2">
            <div className="imgBoxes2">
           <img src={card2} className="imgBoxes2" alt="" /> 
            </div>
            <div className="contents2">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "30px"}}>2500 за 8 занятий</span> <br/>
                <br/>
                <div style={{fontSize: "15px"}}>Этот абонемент рассчитан на восемь занятий, правила посещения идентичны абонементу на четыре занятия. 
                Однако этот абонемент намного выгоднее, так как стоимость одного занятия здесь ниже. Данный абонемент идеально подходит для тех, кто хочет
                заниматься два раза в неделю в течение месяца.</div>
              </h2>
          </div>
        </div>
        <div className="cont">
            <div className="imgBoxes">
            <img src={card3} className="imgBoxes" alt="" /> 
            </div>
            <div className="contents">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "30px"}}>3000 за 12 занятий </span> <br/>
                <br/>
                <div style={{fontSize: "15px"}}>Этот абонемент рассчитан на двенадцать занятий, правила посещения идентичны абонементу на четыре и 
                восемь занятий. Однако этот абонемент выгоднее обоих предыдущих абонементов, так как стоимость одного занятия здесь еще ниже. Данный
               абонемент идеально подходит для тех, кто хочет заниматься три раза в неделю в течение месяца. Именно благодаря этому абонементу и частому
                посещению занятий вы добьетесь самых лучших результатов.</div>
              </h2>
          </div>
        </div>
        <div className="cont2">

            <div className="imgBoxes2">
            <img src={card4} className="imgBoxes2" alt="" /> 
            </div>
            <div className="contents2">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "30px"}}>3500 за 8 индивидуальных занятий</span> <br/>
                <br/>
                <div style={{fontSize: "15px"}}>Этот абонемент предназначен для людей, которые хотят посещать персональные тренировки с тренером два
                 раза в неделю на протяжении месяца. Именно индивидуальный абонемент позволит вам тренироваться продуктивно и в удовольствие, так как 
                 все тренировки проходят под контролем специалиста и все нагрузки подбираются персонально для вас.</div>
              </h2>
          </div>
        </div>
        <div className="cont2">
            <div className="imgBoxes2">
            <img src={card6} className="imgBoxes2" alt="" /> 
            </div>
            <div className="contents2">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "30px"}}>4500 за 12 индивидуальных занятий</span> <br/>
                <br/>
                <div style={{fontSize: "15px"}}>Этот абонемент идентичен абонементу на восемь индивидуальных занятий, только рассчитан он на три 
                занятия в неделю на протяжении месяца. Брать этот абонемент выгоднее, так как цена одного занятия здесь ниже. Благодаря частым 
                персональным тренировкам, вы очень быстро добьетесь желаемых результатов.</div>
              </h2>
          </div>
        </div>
        <div className="cont2">
            <div className="imgBoxes2">
            <img src={card5} className="imgBoxes2" alt="" /> 
            </div>
            <div className="contents2">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "30px"}}>5000 за безлимитное посещение</span> <br/>
                <br/>
                <div style={{fontSize: "15px"}}>Это самый удобный абонемент, позволяющий посещать любые занятия (не считая персональные тренировки) 
                в неограниченном количестве в течение месяца. Благодаря этому абонементу, вы сможете попробовать все направления и развивать разные 
                спортивные способности вашего тела. </div>
              </h2>
          </div>
        </div>
       
      </header> 
    </div> 
    
  ); 
}

export default PricesPage;