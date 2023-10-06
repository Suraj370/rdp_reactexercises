import { createContext, useReducer, useContext } from "react";
import employeereducer, {initialState} from "./reducer/employeeReducer";

const EmployeeContext = createContext(initialState);

export const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeereducer, initialState);
 
  const addEmployee = (employee) => {
    console.log(employee);
    dispatch({ type: "ADD_EMPLOYEE", payload: employee });
  };

  const removeEmployee = (id) => {

    dispatch({ type: "REMOVE_EMPLOYEE", payload: id });
  }

  const value = {
    employees: state.employees,
    addEmployee,
    removeEmployee,
  }
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};


const useShop = () => {
    const context = useContext(EmployeeContext);
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
}
export default useShop;