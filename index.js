// Follow along with the examples here
function doNothing() {
}

function sayHelloGuadalupe() {
    console.log('Hello!');
}
sayHelloGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
sayHelloGuadalupe();
sayHelloToLiz();

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}
sayHelloGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomethingyes() {
    console.log("yes");
}
doSomethingyes();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1);

    
  function saygoodbye(Goodbye, firstName) {
      console.log(`Goodbye, ${firstName}!`);
      }
saygoodbye("Julio");

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "hello");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
   return x + y;
  }
  add(1, 2);
  console.log(add(1, 2));

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Liz"));
  console.log(say("Hello", "Liz"));
  
  const sum = add(2, 2 );
  const message = `The sum of your numbers is: ${sum}.`;

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));
