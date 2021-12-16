import Cage from './Cage.js'


class Zoo{
    constructor(name){
        this.name = name
        this.cages = []
        for(let i = 0; i < 10; i++){
            this.cages.push(new Cage())
        }
        this.employees = []
    
    }
    addEmployee(myNewEmployee) {
        this.employees.push(myNewEmployee)
    }
    addAnimal(animal) {
        for (let i = 0; i < this.cages.length; i ++)
         {
             if (this.cages[i].isEmpty()) {
                 this.cages[i].animal = animal
                return `Animal added to the cage at spot ${i}`  
             }
             }
            //  console.log(this.cages)
             return 'All of the cages are full!'
         }
         
         visit() {
             const greeting = []
             
             this.cages.forEach((cage) => {
                // console.log(cage.animal)
                if (!cage.isEmpty()) {
                    greeting.push(cage.animal.speak())
                }
            })

            this.employees.forEach((employee) => {
                greeting.push(employee.greet())
            })
            
            return `${greeting.join("\n")}\n`
        }
            
}
export default Zoo