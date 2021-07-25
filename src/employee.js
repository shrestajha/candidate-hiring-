import React from 'react';

class Employee extends React.Component {
    constructor(props) { // runs only once
        super(props)
        this.state = {
           employee: props.employee,
           nextattribute: props.nextattribute,
           img: props.img
        }
    }

    componentDidMount() { //runs only once after first render
        console.log(this.state.employee)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.employee!=this.props.employee) {
            this.setState({ employee: this.props.employee })
        }
        if (prevProps.nextattribute!= this.props.nextattribute){
            this.setState({nextattribute: this.props.nextattribute })
        }
    }


    render() {
        const {employee, nextattribute,img } = {...this.state}

        return (
            <div className="card">
                <div className="card-body" style={{textAlign: 'center'}}>
                    <div className = 'row'>
                        <img src={img} className="rounded float-start" alt="..." style={{maxWidth: '150px', maxHeight: '250px', display: 'block', margin: 'auto'}}>
                    </img>
                    </div>
                    <div className = 'row'>
                        <h5 className="card-title">Applicant {employee.id}</h5>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item"><b>GPA: </b>{employee.gpa}</li>
                        {nextattribute>0?<li className="list-group-item"><b>College Tier: </b>{employee.collegetier}</li>:null}
                        {nextattribute>1?<li className="list-group-item"> <b>Conscientiousness: </b>{employee.conscientiousness}</li>: null}
                        {nextattribute>2?<li className="list-group-item"> <b>Openness to Expierence:</b> {employee.openness}</li>: null}
                        {nextattribute>3?<li className="list-group-item"> <b>Age:</b> {employee.age}</li>: null}
                        {nextattribute>4?<li className="list-group-item"> <b>Gender:</b> {employee.gender}</li>: null}
                        
                      </ul>
                  <button className="btn btn-primary" onClick={()=>this.props.candidatechosen()}>Choose</button>
                </div>
              </div>
        )
    }
}
export default Employee;
/*
Simulation -> employeesprocessed +2
Employee -> Choose
*/ 

