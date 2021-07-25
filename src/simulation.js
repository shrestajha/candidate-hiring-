import React from 'react';
import Employee from './employee';
class Simulation extends React.Component 
{
    
    constructor(props) {
        super(props)
        this.state={
            employeesprocessed : 0,
            nextattribute: 0,
            employees:[
                {
                    id: 1,
                    gpa: 57,
                    collegetier: 1,
                    conscientiousness: 96,
                    openness: 59,
                    age: 25,
                    gender: 'Female'
                }, {
                    id: 2,
                    gpa: 72,
                    collegetier: 2,
                    conscientiousness: 82,
                    openness: 68,
                    age: 33,
                    gender: 'Male'
                }, {
                    id: 3,
                    gpa: 89,
                    collegetier: 2,
                    conscientiousness: 35,
                    openness: 39,
                    age: 26,
                    gender: 'Male'
                }, {
                    id: 4,
                    gpa: 79,
                    collegetier: 2,
                    conscientiousness: 33,
                    openness: 1,
                    age: 25,
                    gender: 'Male'
                }, {
                    id: 5,
                    gpa: 85,
                    collegetier: 2,
                    conscientiousness: 19,
                    openness: 73,
                    age: 23,
                    gender: 'Female'
                } , {
                    id: 6,
                    gpa: 69,
                    collegetier: 2,
                    conscientiousness: 42,
                    openness: 70,
                    age: 22,
                    gender: 'Male'
                }, {
                    id: 7,
                    gpa: 75,
                    collegetier: 2,
                    conscientiousness: 5,
                    openness: 64,
                    age: 32,
                    gender: 'Non-Binary'
                }, {
                    id: 8,
                    gpa: 83,
                    collegetier: 2,
                    conscientiousness: 36,
                    openness: 39,
                    age: 35,
                    gender: 'Female'
                }, {
                    id: 9,
                    gpa: 55,
                    collegetier: 2,
                    conscientiousness: 4,
                    openness: 28,
                    age: 24,
                    gender: 'Male'
                }, {
                    id: 10,
                    gpa: 64,
                    collegetier: 2,
                    conscientiousness: 19,
                    openness: 47,
                    age: 29,
                    gender: 'Male'
                }
            ]
        }
    }
    // ep= 4
// 0 1 2 3 4 5 6 
    showNext=()=>{
        const nextattribute = this.state.nextattribute
        this.setState({ nextattribute: nextattribute+1 })
    }

    candidatechosen=()=>{
        const employeesprocessed = this.state.employeesprocessed
        this.setState({ employeesprocessed: employeesprocessed+2, nextattribute: 0 })
    }

    render () { 
        const { employees, employeesprocessed, nextattribute } = {...this.state}
        return (
            <div className="container">
                {
                   employeesprocessed<employees.length?
                   <div className="row">   
                   <div className="col-sm-5">
                    <Employee employee={employees[employeesprocessed]} nextattribute={nextattribute} candidatechosen={this.candidatechosen} img = {'Applicant1.PNG'} />
                   </div>
                   <div className="col-sm-2" style={{textAlign: 'center'}}>
                       <button type="button" className="btn btn-primary" onClick={()=>this.showNext()}>Show Next Attribute</button>
                   </div>
                   <div className="col-sm-5">
                   <Employee employee={employees[employeesprocessed+1]} nextattribute={nextattribute} candidatechosen={this.candidatechosen} img = {'Applicant2.PNG'}  />
                   </div>
                     </div>:
                    <h1>No more candidates to show!</h1>
                }
            
              </div>
        )

    }
}
export default Simulation;