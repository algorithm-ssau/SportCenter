import React from 'react';
import card1 from './photos/card1.jpg';
import card2 from './photos/card2.jpg';
import card3 from './photos/card3.jpg';
import card4 from './photos/card4.jpg';
import card5 from './photos/card5.jpg';
import card6 from './photos/card6.jpg';
import './Trainers.css';

function PricesPage() { 
  return ( 
    <div className="PricesPage"> 
      <header className="PricesPage-header"> 
      <br/>
      <div className='PricesPage-head'>
              <div style={{ textAlign: "center",fontFamily: "Garamond", fontWeight: "bold",fontSize: "60px"}}>Цены абонементов</div>
              <a href='direct'> </a>
      </div>
      <br/>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={card1} className="imgBox" alt="" /> 
            </div>
            <div className="content">
              <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>1500 за 4 занятия</span> 
                <div style={{fontSize: "small"}}>Этот абонемент рассчитан на четыре занятия по одному из направлений, не включая персональные тренировки. 
                Данный абонемент действует только для одной конкретной секции, и не дает возможности посещать занятия в других направлениях. Если вы хотите 
                заниматься в нескольких секциях одновременно, то вам необходимо приобрести несколько абонементов на четыре занятия или выбрать безлимитный 
                абонемент на месяц.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={card2} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>2500 за 8 занятий</span> <br/>
                <div style={{fontSize: "small"}}>Этот абонемент рассчитан на восемь занятий, правила посещения идентичны абонементу на четыре занятия. 
                Однако этот абонемент намного выгоднее, так как стоимость одного занятия здесь ниже. Данный абонемент идеально подходит для тех, кто хочет
                заниматься два раза в неделю в течение месяца.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={card3} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>3000 за 12 занятий </span> <br/>
                <div style={{fontSize: "small"}}>Этот абонемент рассчитан на двенадцать занятий, правила посещения идентичны абонементу на четыре и 
                восемь занятий. Однако этот абонемент выгоднее обоих предыдущих абонементов, так как стоимость одного занятия здесь еще ниже. Данный
               абонемент идеально подходит для тех, кто хочет заниматься три раза в неделю в течение месяца. Именно благодаря этому абонементу и частому
                посещению занятий вы добьетесь самых лучших результатов.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={card4} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>3500 за 8 индивидуальных занятий</span> <br/>
                <div style={{fontSize: "small"}}>Этот абонемент предназначен для людей, которые хотят посещать персональные тренировки с тренером два
                 раза в неделю на протяжении месяца. Именно индивидуальный абонемент позволит вам тренироваться продуктивно и в удовольствие, так как 
                 все тренировки проходят под контролем специалиста и все нагрузки подбираются персонально для вас.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={card5} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>4500 за 12 индивидуальных занятий</span> <br/>
                <div style={{fontSize: "small"}}>Этот абонемент идентичен абонементу на восемь индивидуальных занятий, только рассчитан он на три 
                занятия в неделю на протяжении месяца. Брать этот абонемент выгоднее, так как цена одного занятия здесь ниже. Благодаря частым 
                персональным тренировкам, вы очень быстро добьетесь желаемых результатов.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="box">
            <div className="imgBox">
            <img src={card6} className="imgBox" alt="" /> 
            </div>
            <div className="content">
            <h2 style={{fontFamily: "Garamond"}}>
                <span style={{fontSize: "medium"}}>5000 за безлимитное посещение</span> <br/>
                <div style={{fontSize: "small"}}>Это самый удобный абонемент, позволяющий посещать любые занятия (не считая персональные тренировки) 
                в неограниченном количестве в течение месяца. Благодаря этому абонементу, вы сможете попробовать все направления и развивать разные 
                спортивные способности вашего тела. </div>
              </h2>
            </div>
          </div>
        </div>
       
      </header> 
    </div> 
    
  ); 
}

export default PricesPage;