import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCm4VvjCImpuqBYS-uNcxRMB9URw25Zdwk",
  authDomain: "eaglexpress-a1c59.firebaseapp.com",
  databaseURL: "https://eaglexpress-a1c59.firebaseio.com",
  projectId: "eaglexpress-a1c59",
  storageBucket: "eaglexpress-a1c59.appspot.com",
  messagingSenderId: "652793474348",
  appId: "1:652793474348:web:99d3ea97c834cf8bcb1089",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  addUser(user) {
    if (!this.auth.currentUser) {
      console.log("not authorized to add user");
    }
    return this.db.doc(`/users/${this.auth.currentUser.uid}`).set(user);
  }

  deleteUser(id){
    if(this.auth.currentUser)
      return this.db.doc(`/users/${id}`).delete()
  }

  addCourier(courier) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db
      .collection(`/couriers`)
      .add({ ...courier, ownerId: this.auth.currentUser.uid });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async isAdmin(){
    if(this.auth.currentUser){
      const profile = await this.getProfile();
      
      return profile.data().isAdmin ? true : false;
    }
  }

  getProfile() {
    if (this.auth.currentUser)
      return this.db.doc(`/users/${this.auth.currentUser.uid}`).get();
  }

  getUsersWhere() {
    return this.db.collection("/users").where("isAdmin", "==", false).get();
  }

  getCouriers() {
    if (this.auth.currentUser)
      return this.db
        .collection("/couriers")
        .where("ownerId", "==", this.auth.currentUser.uid)
        .get();
  }

  updateCourier(current) {
    if (this.auth.currentUser) {
      console.log('current', current)
      return this.db.doc(`/couriers/${current.id}`).update({current_location: current});
    }
  }

  updateCourierStatus(courierId, status) {
    if (this.auth.currentUser)
      return this.db.doc(`/couriers/${courierId}`).update({
        shipping_status: status,
      });
  }

  deleteCourier(id) { 
    if (this.auth.currentUser) {
      return this.db.doc(`/couriers/${id}`).delete();
    }
  }

  addHistory(historyObject) {
    return this.db
      .collection(`/couriers/${historyObject.id}/histories`)
      .add(historyObject);
  }

  getHistory(courierId) {
    if (this.auth.currentUser)
      return this.db.collection(`/couriers/${courierId}/histories`).get();
  }

  getServerTimestamp() {
    return app.firestore.FieldValue.serverTimestamp()
  }
}

export default new Firebase();
