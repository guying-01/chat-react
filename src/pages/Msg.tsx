import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Msg.css';
import {
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
const Msg: React.FC = () => {

  useIonViewDidEnter(() => {
    console.log("ionViewDidEnter event fired");
  });

  useIonViewDidLeave(() => {
    console.log("ionViewDidLeave event fired");
  });

  useIonViewWillEnter(() => {
    let isLogin = localStorage.getItem('userInfo')
    if(!isLogin){
    }
  });

  useIonViewWillLeave(() => {
    console.log("ionViewWillLeave event fired");
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>消息</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Msg;
