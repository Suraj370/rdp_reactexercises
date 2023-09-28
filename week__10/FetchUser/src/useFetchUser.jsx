import React,{ useState, useEffect } from 'react'

const useFetchUser = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          // Make an API call to fetch user details
          const response = await fetch('https://e5843de6-a3d4-4b88-877b-e76fc93df3fc.mock.pstmn.io/users/2');
          const data = await response.json();
          console.log(data[0]);
  
          // Update the state with the fetched user details
          setDetails(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchUser();
    }, []);
  
    return { loading, error, details };
  };
  
  export default useFetchUser;