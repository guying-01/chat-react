import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { chatbubble, navigate, person } from "ionicons/icons";
import Msg from "./Msg";
import Tab2 from "./Zone";
import Tab3 from "./My";


const App: React.FC = () => {
  return (
    <IonApp>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/msg" component={Msg} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab3" component={Tab3} />
            <Route
              path="/"
              render={() => <Redirect to="/msg" />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="msg" href="/msg">
              <IonIcon icon={chatbubble} />
              <IonLabel>消息</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={navigate} />
              <IonLabel>大厅</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={person} />
              <IonLabel>我</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonApp>
  );
};

export default App;
