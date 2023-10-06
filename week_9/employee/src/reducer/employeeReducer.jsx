import {employeesList} from "../data";

export const initialState = {
    employees: employeesList,
}

 const employeereducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, payload],
            };
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(
                    (employee) => employee.id !== payload
                ),
            };
        default:
            return new Error(`No case for ${type} found in reducer`);
    }
}
export default employeereducer;