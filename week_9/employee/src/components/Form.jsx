import React  from "react";
import { useForm } from "react-hook-form";
// import reducer from '../actions';
import useShop from "../EmployeeContext";





function Form({ departments }) {
    const { register, handleSubmit, reset } = useForm();
    const {addEmployee} = useShop();

    const onSubmit = (data) => {
        const employee = {
            name: data.name,
            department: data.department,
        };
        console.log(employee);
        addEmployee(employee);
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
