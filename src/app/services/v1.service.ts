import { Subject } from 'rxjs';

export interface Person {
    name: string;
    age: string;
    gender: string;
}

export  class AppServiceV1 {
    private persons: Person[] = [{name:"Ayah Alrefai",age:"25",gender:"Female"}];
    appUpdated = new Subject();

    constructor() {
        let persons:Person[] = JSON.parse(( localStorage.getItem("inputs"))  as string) ;
        if(persons !== null && persons !== undefined && persons.length !== 0) {
            this.persons = persons;
        }
    }

    addPerson(person: Person) {
        this.persons.push(person);
        this.appUpdated.next(this.persons);

        localStorage.setItem("inputs", JSON.stringify(this.persons));
    }

    deletePerson(i:number) {
        delete this.persons[i];
        this.persons =  this.persons.filter(p => p!==null && p!==undefined);
        this.appUpdated.next(this.persons);

        localStorage.setItem("inputs", JSON.stringify(this.persons));
    }

    getPersons() {
        return [...this.persons];
    }

    isEmpty() {
        return this.persons.length === 0;
    }

    filterInputs(filter : Person) {
        return this.persons.filter(p => {
            return (p.name===filter.name || filter.name===null || filter.name==="") && 
                    (p.age===filter.age || filter.age===null || filter.age==="") &&
                    (p.gender===filter.gender || filter.gender===null || filter.gender==="");
        });
    }
}