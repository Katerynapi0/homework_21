'use strict'
/*1. Створити клас Людина.
Властивості:
- імʼя;
- стать.
Методи:
- конструктор, який приймає два параметри: імʼя та стать.*/
class Human{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    Human(){
        console.log(`Ваше ім'я: ${this.name}. Ваш гендер: ${this.gender}.`)
    }
}
/*2.Створити клас Квартира.
Властивості:
- конструктор не потрібен;
- масив жителів, який при створенні пустий.
Методи:
- додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.*/
class Apartment{
    constructor(){
        this.inmate = [];
    }

    addInMate(human){
        this.inmate.push(human);
    }
}
/*3.Створити клас Будинок.
Властивості:
- масив квартир, який при створенні пустий;
- максимальна кількість квартир.
Методи:
- конструктор, який приймає один параметр: максимальну кількість квартир;
- додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
чи не буде кількість перевищувати максимальну кількість квартир, 
і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.*/
class House{
    constructor(maxCountApartment){
        this.arrayApartment = [];
        this.maxCountApartment = maxCountApartment;
    }

    addApartment(apartment){
        if(this.arrayApartment.length < this.maxCountApartment){
            this.arrayApartment.push(apartment);
        }else(
            console.log(`На жаль, але кількість квартир перевищено.`)
        )
    }
}
/*В якості демонстраціїї створити:
- декілька екземплярів класу Людина;
- декілька екземплярів класу Квартира;
- додати екземпляри класу Людина до екземплярів класу Квартира;
- екземпляр класу Будинок;
- додати екземпляри класу Квартира до екземплярів класу Будинок.*/
const person1 = new Human('Люк', 'чоловік');
person1.Human();

const person2 = new Human('Лея', 'жінка');
person2.Human();
//
const apartment1 = new Apartment;
apartment1.addInMate(person1);
console.log(person1);

const apartment2 = new Apartment;
apartment2.addInMate(person2);
console.log(person2);
//
const house = new House(1);

house.addApartment(apartment1);
house.addApartment(apartment2);