// All methods that you want your instances to inherit should go in the prototype
const myCoolProto = {
    talk() {
        return `Hello, I am ${this.name}`
    },
    sayHello() {
        return `Hello World!`
    },
    bio() {
        return `Hello my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
    }
}

// All properties that you want your instances to inherit go in the factory function
function createPerson(firstName, lastName, age) {
    return Object.create(myCoolProto, {
        firstName: {
            value: firstName
        },
        lastName: {
            value: lastName
        },
        age: {
            value: age
        }
    })
}

const steven = createPerson('Steven', 'Ayvar', 27);
