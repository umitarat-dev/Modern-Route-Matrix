import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// error denetim
import NotFound from './NotFound';
import spinner from '../img/spinner.svg'

const Instructors = () => {
  
  const navigate = useNavigate();

  // const [instructors, setInstructors] = useState([]); // her türlü dönüş olur.
  const [instructors, setInstructors] = useState(null); // null error denetim sistemi için..

  // error denetim
  const [error, setError] = useState(false);


  const getInstructors = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error('Somehthing went wrong!')
        }
        return res.json();
      })

      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, []);

  if (error) {
    return <NotFound />
  } else if (!instructors){
    return (
      <div className='container text-center'>
        <h2>Data is Fetching</h2>
        <img src={spinner} alt="" />
      </div>
    )
    
  } else {
    return (
    <div className="container text-center mt-4">
      <h1>INSTRUCTOR LIST</h1>
      <div className="row justify-content-center g-4">
        {instructors?.map((inst) => {
          const { id, name } = inst;
          return (
            
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={id}
              onClick={() => navigate(`/instructors/${id}`)}
              //! Relative path; bulunulan path'in üzerine.. 
              // onClick={() => navigate(`${id}`, { state: inst })}
              //! Absolute path; bulunulan path de belirtilir..
              // onClick={() => navigate(`/instructors/${id}`, { state: inst })}
              style={{ cursor: 'pointer' }}
            >
              <img
                // src={`https://i.pravatar.cc/300/${id}`}
                src={`https://i.pravatar.cc/300?img=${id}`}
                alt=""
              />              
              <h6>{name}</h6>
            </div>
            
          );
        })}
      </div>
    </div>
  );
  }
  
};

export default Instructors;
