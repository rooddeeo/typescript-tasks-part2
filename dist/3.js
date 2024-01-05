// реалізація класу Wizard
class Wizard {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        if (this.level < 1) {
            throw new Error("Level too low");
        }
    }
    introduce(phrase) {
        console.log(phrase + ", " + this.name);
    }
    castSpell() {
        console.log("Casting a spell, behold my power!");
    }
    levelUp() {
        this.level++;
        console.log(`Level up! New level is ${this.level}`);
    }
}
// тестування класу
const wizard = new Wizard("Merlin", 15);
wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
export {};
//# sourceMappingURL=3.js.map