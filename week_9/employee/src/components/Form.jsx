import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import reducer from '../actions';
import { employeesList } from "../data";

const initialState = {
    employees: employeesList,
};


function Form({ departments }) {
    const { register, handleSubmit, reset } = useForm();
    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = (data) => {
        const employee = {
            name: data.name,
            department: data.department,
        };
        dispatch({ type: 'ADD', payload: employee });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" {...register("name")} />
            </div>
            <div>
                <label htmlFor="department">Department:</label>
                <select id="department" {...register("department")}>
                    {departments.map((department) => (
                        <option key={department} value={department}>
                            {department}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">Add Employee</button>
           
        </form>
    );
}

export default Form;
