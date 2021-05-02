import firebase from "firebase";
import { accessorType } from "~/store";

// enum altanative
export const Provider = {
  Google: "GOOGLE",
  Twitter: "TWITTER",
} as const;
type Provider = typeof Provider[keyof typeof Provider];


export class Firebase {
  private $accessor: typeof accessorType;

  constructor($accessor: typeof accessorType) {
    this.$accessor = $accessor;
    if (firebase.apps.length == 0) {
      const config = {
        apiKey: "AIzaSyCXJG1cA8272bFdFn4lLvRveEYa_fvelIU",
        authDomain: "nuxt-practicce.firebaseapp.com",
        projectId: "nuxt-practicce",
        storageBucket: "nuxt-practicce.appspot.com",
        messagingSenderId: "343611156725",
        appId: "1:343611156725:web:34cff4fba5e9ae13117dbc",
        measurementId: "G-8G41CRZ1BH",
      };

    //   firebase初期化
      firebase.initializeApp(config);
    }
  }

  async login(provider: Provider) {
    const response = await ((provider: Provider) => {
      switch (provider) {
        case "GOOGLE":
          return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        case "TWITTER":
          return firebase
            .auth()
            .signInWithPopup(new firebase.auth.TwitterAuthProvider());
      }
    })(provider);
    const user = await response.user;
    const token = await user?.getIdToken();

    // vuexに格納
    this.$accessor.user.store({
      id: user!.uid,
      name: user?.displayName ? user?.displayName : "",
      pic: user?.photoURL ? user?.photoURL : "",
      token: token!,
    });
  }

  async logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$accessor.user.drop();
      });
  }

  async addUser(name: string, tel: string) {
    const db = firebase.firestore();
    let dbUsers = db.collection("users");
    dbUsers
      .add({
        name: name,
        tel: tel,
      })
      .then((ref) => {
        console.log("Add ID: ", ref.id);
        //  vuex
        this.$accessor.userInfo.store({
          id: ref.id,
          name: "",
        });
      });
  }

// Todo  単一取得、複数取得などを作る
  getData(id: string) {
    console.log(id);
    const db = firebase.firestore()
    let docUsers = db.collection("users").doc(id);
    docUsers
      .get()
      .then((doc) =>
        this.$accessor.userInfo.setName(
          doc.data()?.name ? doc.data()?.name : ""
        )
      );
  }
  /*
     * ドキュメント削除
     */
  deleteUser(docId: string) {
    const db = firebase.firestore()
    db.collection("users").doc(docId).delete().then(() => {
      //success
    })
    .catch((error) => {
      //error
    })
  }
  
  /*
   * ドキュメント更新
   */
  updateUser(docId: string) {
    const db = firebase.firestore()
    db.collection("users").doc(docId).update({
      name: 'Mike',
    }).then(() => {
      //success
    })
    .catch((error) => {
      //error
    })
  }
}
