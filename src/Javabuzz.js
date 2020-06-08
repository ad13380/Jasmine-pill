class Javabuzz {
  _isDivisibleBy(number, divisor) {
    return number % divisor === 0;
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return 'Javabuzz';
    } else if (this.isDivisibleByThree(number)) {
      return 'Java';
    } else if (this.isDivisibleByFive(number)) {
      return 'Buzz';
    } else {
      return number;
    }
  }
}

// function greet(name) {
//   console.log('hello ' + name);
// }

// ['john', 'amy', 'james'].forEach(function(name) {
//   console.log('hello ' + name)
// }); // this is like [ , , ].forEach(some_function);

// class Dog {
//   constructor(breed) {
//     this.breed = breed;
//   }

//   bark(name) {
//     console.log(name + ' says Woof!');
//   }
// }

// var dog = new Dog('pug');
// dog.bark('rex');

