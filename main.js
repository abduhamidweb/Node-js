{
    // Object (Obyekt): Obyekt, obyektoriyentlangan dasturlashda ma'lumotlar 
    // va funksiyalarning bir majmuasi hisoblanadi.Obyekt, xususiyatlarni(properties) va 
    // funksiyalarni(methods) saqlaydi.Misol uchun, 
    // Person nomli classdan yaratilgan person obyekti bir shaxsni ma'lumotlarini (ism, yosh, manzil) saqlayishi mumkin.
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        sayHello() {
            console.log(`Salom, mening ismim ${this.name} va men ${this.age} yoshdaman.`);
        }
    }

    const person = new Person('Ali', 25, 'Toshkent');
    person.sayHello(); // Salom, mening ismim Ali va men 25 yoshdaman.

} {
    // Class(Klass): Class, obyektlarni yaratish uchun ko 'rsatmalar va qoidalar to'
    // plami hisoblanadi.Classlar obyektlarning 
    // xususiyatlari va funksiyalarini taqsimlash uchun ishlatiladi.Misol uchun,
    //     Person nomli class shaxslarni ifodalaydi va ularning xususiyatlari(ism, yosh) 
    //     va funksiyalari(salomlashish) mavjud.
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log(`Salom, mening ismim ${this.name} va men ${this.age} yoshdaman.`);
        }
    }

    const person = new Person('Ali', 25);
    person.sayHello(); // Salom, mening ismim Ali va men 25 yoshdaman.

} {
    // Inheritance (Miras oluvchi): Inheritance, bir classning (otasining) xususiyatlarini va funksiyalarini boshqa classlarga (farzandlarga) o'tkazish imkonini beradi. Miras oluvchilik bilan
    //  bir class boshqasi asosida yaratiladi va uning xususiyatlari va funksiyalari qisman yoki butunlay oluvchiga o'tkaziladi.
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} gapiradi.`);
        }
    }

    class Dog extends Animal {
        constructor(name, breed) {
            super(name);
            this.breed = breed;
        }

        fetch() {
            console.log(`${this.name} o'yinchoqni olib keladi.`);
        }
    }

    const dog = new Dog('Max', 'German Shepherd');
    dog.speak(); // Max gapiradi.
    dog.fetch(); // Max o'yinchoqni olib keladi.

} {
    // Polymorphism(Ko 'plik): Polymorphism, bir qator obyektlarning bir qismini ya'
    // ni bir obyekt turi bilan boshqa obyekt turlarini almashtirish imkonini beradi.Bunda bitta
    //  interfeys yoki boshqa bir obyekt, bir nechta obyektlarga o 'z xususiyatlarini o'
    // zgartirmaslik bilan birgalikda ularga mos funksiyalarni chaqirish imkonini beradi.
    class Animal {
        constructor(name) {
            this.name = name;
        }

        makeSound() {
            console.log(`${this.name} ovoz chiqaradi.`);
        }
    }

    class Dog extends Animal {
        makeSound() {
            console.log(`${this.name} gav-gav qiladi.`);
        }
    }

    class Cat extends Animal {
        makeSound() {
            console.log(`${this.name} myau-myau qiladi.`);
        }
    }

    const animals = [
        new Dog('Max'),
        new Cat('Lucy'),
    ];

    animals.forEach(animal => {
        animal.makeSound();
    });

}

{

    // Abstraction (O'zgaruvchanligi) Abstraction, obyektoriyentlangan dasturlashda kodning murakkabliklarini yashirish imkonini beradi. Obyektning faqat zarur bo'lgan ma'lumotlari va funksiyalariga
    //  ega bo'lishi ta'minlanadi, to'liq implementatsiyasini yashirib, sodda interfeys bilan ishlash imkoniyatini beradi.
    class Shape {
        constructor() {
            if (new.target === Shape) {
                throw new Error('Shape class-i ni yaratib bo\'lmaydi');
            }
        }

        calculateArea() {
            throw new Error('calculateArea metodi implementatsiyasini o\'zgartiring');
        }
    }

    class Rectangle extends Shape {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        calculateArea() {
            return this.width * this.height;
        }
    }

    const rectangle = new Rectangle(5, 10);
    console.log(rectangle.calculateArea()); // 50

} {
    // Encapsulation(Qamrovqatlash): Encapsulation, obyektlar yordamida ma 'lumotlarni (xususiyatlarni) va funksiyalarni (metodlarni) bir birligida yig'
    // ish va shu obyektlar orqali foydalanishni ta 'minlash imkonini beradi. Bu kontsept obyektning ichki holatini (state) himoya qilish va faqat kerakli funksiyalar orqali ma'
    // lumotlarga murojaat qilishni ta 'minlaydi.
    class BankAccount {
        #balance = 0;

        deposit(amount) {
            this.#balance += amount;
            console.log(`${amount} miqdoridagi pul hisobingizga qo'shildi. Yangi hisob: ${this.#balance}`);
        }

        withdraw(amount) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`${amount} miqdoridagi pul hisobingizdan yechildi. Yangi hisob: ${this.#balance}`);
            } else {
                console.log(`Hisobingizda yetarli mablag' mavjud emas. Joriy hisob: ${this.#balance}`);
            }
        }

        getBalance() {
            console.log(`Joriy hisob: ${this.#balance}`);
        }
    }

    const account = new BankAccount();
    account.deposit(1000); // 1000 miqdoridagi pul hisobingizga qo'shildi. Yangi hisob: 1000
    account.withdraw(300); // 300 miqdoridagi pul hisobingizdan yechildi. Yangi hisob: 700
    account.getBalance(); // Joriy hisob: 700
    // Ushbu misolda BankAccount nomli class yaratilgan.Bu class #balance xususiyati(ichki xususiyat) va deposit, withdraw, getBalance metodlari bilan ishlaydi.deposit metodi hisobga pul qo 'shish imkonini beradi, withdraw metodi pul yechish imkonini beradi va getBalance metodi joriy hisobni chiqarib beradi. #balance xususiyati esa privat (kichik harf bilan boshlanishi) bo'
    // lib, faqat class ichida foydalanilishi mumkin.Misolning oxirida account obyekti yaratiladi va ushbu obyektni yordamida metodlar ishlatiladi.
}