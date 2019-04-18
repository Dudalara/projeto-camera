import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';


/**
 * Generated class for the CreateContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-contact',
  templateUrl: 'create-contact.html',
})
export class CreateContactPage {
model: Contact;


  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsProvider: ContactsProvider, public toast: ToastController) {
  this.model = new Contact();
this.model.name = 'Novo contato';
this.model.gender = 'male';
this.model.photo = '';


  }
  createContact(){
   var data = {};
  this.contactsProvider.addContact(data)
    .then((result: any) => {
      this.toast.create({ message: 'Contato criado'}).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Falha ao criar o contato: ' + error.error }).present();
      console.log(error);
    });

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateContactPage');
  }

}

export class Contact {
  name: string;
  gender: string;
  photo: string;
}

