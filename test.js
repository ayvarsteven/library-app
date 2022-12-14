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

const userProto = {
    sayHello() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
    },
    statePhoneNumber() {
        console.log(this.phoneNumber)
    }
}

const user1 = createPerson('Steven', 'Ayvar', 27);

// Example of closure and using a function to close off the private variables and functions of an object
function UserFactoryFunction(firstName, lastName, age) {
    let phoneNumber = 9565134948;
    let email = 'ayvarsteven@gmail.com'
    function _createUserInfo() {
        return `My email is ${email} and my phoneNumber is ${phoneNumber}`
    }

    return Object.create(userProto, {
        firstName: {
            value: firstName
        },
        lastName: {
            value: lastName
        },
        age: {
            value: age
        },
        secretInfo: {
            value: _createUserInfo()
        }
    })
}

const steven = UserFactoryFunction('Steven', 'Ayvar', 27)
