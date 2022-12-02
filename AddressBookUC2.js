class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(firstName)){
            this._firstName = firstName;
        }
        else throw 'First name is Incorrect !'
    }
    get firstName(){
        return this._firstName
    }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(lastName)){
            this._lastName = lastName;
        }
        else throw 'Last name is Incorrect !'
    }
    get lastName(){
        return this._lastName
    }
    set address(address) {
        let nameRegex = RegExp('^([A-Za-z]?[: :]?){4,}$');
        if(nameRegex.test(address)){
            this._address = address;
        }
        else throw 'Address is Incorrect !'
    }
    get address(){
        return this._address
    }
    set city(city) {
        let nameRegex = RegExp('^[A-Za-z]{4,}$');
        if(nameRegex.test(city)){
            this._city = city;
        }
        else throw 'City is Incorrect !'
    }
    get city(){
        return this._city
    }
    set state(state) {
        let nameRegex = RegExp('^[A-Za-z]{4,}$');
        if(nameRegex.test(state)){
            this._state = state;
        }
        else throw 'State is Incorrect !'
    }
    get state(){
        return this._state
    }
    set zip(zip) {
        let nameRegex = RegExp('^[0-9]{5,10}$');
        if(nameRegex.test(zip)){
            this._zip = zip;
        }
        else throw 'Zipcode is Incorrect !'
    }
    get zip(){
        return this._zip
    }
    set phoneNumber(phoneNumber) {
        let nameRegex = RegExp('^([0-9]{2})?[0-9]{10}$');
        if(nameRegex.test(phoneNumber)){
            this._phoneNumber = phoneNumber;
        }
        else throw 'Phone number is Incorrect !'
    }
    get phoneNumber(){
        return this._phoneNumber
    }
    set email(email) {
        let nameRegex = RegExp('^[A-Za-z]{3,}[.]?[a-z]*@([a-z]+)[.]?[a-z]+[.]?[a-z]*$');
        if(nameRegex.test(email)){
            this._email = email;
        }
        else throw 'Email is Incorrect !'
    }
    get email(){
        return this._email
    }
    
    toString(){
        return (`First Name: ${this.firstName} \nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip code : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}`)
    }
}
try{
let prathmesh =new Contact("Prathmesh","Vardam","MaharashtraNagar","Mumbai","Mahrashtra",401078,9930516251,"Prathamesh@gmail.com")
console.log(prathmesh.toString())
}catch(e){
    console.error(e)
}