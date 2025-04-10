export default function Basic() { 
    const objA = {
        age: 23,
    }

    function foo() {
        console.log("Hello World")
        return "Hello World"
    }

     /// const => constant => Cannot be changed anymore
    const person = {
        name: "Warodom",
        surname: "Werapun",
        myObject: objA,
        myArray: [1, 2, 3],
        myFoo: foo,  // traditional function
        myBar: function () { // anonymous function
            return "Bar"
        },
        myBaz: () => "Baz"  // arrow function
    }
    person.name = "Donald"
     

    function sum(a: number, b: number, c: number) {
        return a+b+c
    }

    const result = sum(1, 2, 3)
    console.log(result) // 6

    // Curried function
    const sum0 = (a: number) => {
        return (b: number) => {
            return (c: number) => {
                return a + b + c
            }
        }
    }
    console.log(sum0(1)(2)(4)) // 6 
    
    const sum1 = (a:number) => 
        (b:number) => 
            (c:number) => 
                a + b + c
    console.log(sum1(1)(2)(3)) // 6



    return (<div> {person.name} {person.surname}
        <br />
        {person.myObject.age}
        {person.myArray[2]}
        {JSON.stringify(person)} 
        {person.myFoo()}
        {person.myBar()}
        {person.myBaz()}
    </div>)
}