import React, { Component } from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditCard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/drivercard/DriverCard';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import Dice from './components/dice/Dice';
import Carousel from './components/carusel/Carousel';
import NumbersTable from './components/numberstable/NumbersTable';
import SignupPage from './components/signupform/SignupPage'

import FaceBook from './components/facebook/FaceBook'

export default class App extends Component {
  render() {
    const style = {
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all',
      marginTop: 50,
      padding: 16,
      height: 60,
      border: '2px solid black',
      textAlign: 'center',
    };
    return (
      <div className="App">
        <div>
          <h3>IdCard</h3>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth="1992-07-14"
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth="1988-05-11"
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
        <div>
          <h3>Greetings</h3>
          <div>
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
          </div>
        </div>
        <div>
          <h3>Random</h3>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
        <div>
          <h3>BoxColor</h3>
          <BoxColor style={style} r={255} g={0} b={0} />
          <BoxColor style={style} r={128} g={255} b={0} />
        </div>
        <div>
          <h3>Credit Card</h3>
          <div className="CreditCard">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white"
            />
          </div>
        </div>
        <div>
          <h3>Rating</h3>
          <div>
            <Rating>0</Rating>
            <Rating>1.49</Rating>
            <Rating>1.5</Rating>
            <Rating>3</Rating>
            <Rating>4</Rating>
            <Rating>5</Rating>
          </div>
        </div>
        <div>
          <h3>DriverCard</h3>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </div>
        <div>
          <h3>Like buttons</h3>
          <LikeButton />
          <LikeButton />
        </div>
        <div>
          <h3>ClickablePicture</h3>
          <ClickablePicture />
        </div>
        <div>
          <h3>Dice</h3>
          <Dice />
        </div>
        <div>
          <h3>Carousel</h3>
          <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg',
            ]}
          />
        </div>
        <div>
          <h3>NumbersTable</h3>
              <NumbersTable limit={12}  />
        </div>
        <div>
        <h3>FaceBook</h3>
          <FaceBook  />
        </div>
        <div>
        <h3>SignupPage</h3>
              <SignupPage />  
        </div>
        <div>
          <h3>RGBColorPicker</h3>
        </div>
      </div>
    );
  }
}
