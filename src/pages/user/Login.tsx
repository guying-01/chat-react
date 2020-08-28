import React,{Component,useState} from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonPage,
  IonContent,
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
} from "@ionic/react";
const [nickname, setNickname] = useState("123");

 class Login extends Component{
  constructor(props:any){
    super(props)
    this.state = {
      nickname:''
    }
  }
   render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start"></IonButtons>
            <IonTitle>登录</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>昵称</IonLabel>
              <IonInput value={nickname} placeholder="请输入" onIonChange={e=> setNickname(e.detail.value)}></IonInput>
            </IonItem>
  
            <IonItem>
              <IonLabel>账号</IonLabel>
              <IonInput value={123} placeholder="请输入"></IonInput>
            </IonItem>
  
            <IonItem>
              <IonLabel>密码</IonLabel>
              <IonInput
                value={123}
                placeholder="请输入"
                type="password"
              ></IonInput>
            </IonItem>
          </IonList>
  
          <IonButton expand="full" color="secondary" onIonFocus={e=>logIn(e)}>
            登录
          </IonButton>
        </IonContent>
      </IonPage>
    );
   }
}
export default Login
