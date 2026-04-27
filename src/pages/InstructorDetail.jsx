import { useParams, useNavigate } from 'react-router-dom'
import { 
  useEffect, 
  useState, 
  // useCallback, İleri seviye
} from "react"
import NotFound from './NotFound';
import spinner from '../img/spinner.svg'

const InstructorDetail = () => {

  // ! Linkteki parametreyi almak icin useParams Hook'u kullanılabilir.
  const { id } = useParams();

  // const[inst, setInst] = useState([]) // her türlü dönüş olur.
  const[inst, setInst] = useState(null) // null error denetim sistemi için..

  const navigate = useNavigate()
  
  // error denetim
  const [error, setError] = useState(false);

  useEffect(() => {
    const getInstructors = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error('Somehthing went wrong!');
        }
        return res.json();
      })
      
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
    getInstructors();
  }, [id]);

//! useCallback() kullanımı, İleri seviye, Büyük projelerde, fonksiyon yeniden oluşturulmasın isteniyorsa
  // const getInstructors = useCallback(() => {
  // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   .then((res) => res.json())
  //   .then((data) => setInst(data))
  //   .catch((err) => console.log(err));
  // }, [id]);
  // useEffect(() => {
  //   getInstructors();
  // }, [getInstructors]);

  if (error) {
    return <NotFound />
  } else if (!inst){
    return (
      <div className='container text-center'>
        <h2>Data is Fetching</h2>
        <img src={spinner} alt="" />
      </div>
    )
  } else {
    return (
      <div className='container text-center'>
        <h3>{inst.name}</h3>
        <img 
          // src={`https://i.pravatar.cc/300/${id}`} 
          src={`https://i.pravatar.cc/300?img=${id}`}
          alt="" 
        />
        <h4>{inst.email}</h4>
        <h4>{inst.phone}</h4>

        <div>
          <button 
            className='btn btn-success me-2'
            onClick={() => navigate('/')} // Home'a git..
            >Home
          </button>
          <button 
            className='btn btn-warning me-2'
            onClick={() => navigate(-1)} // Bir önceki sayfaya git..
            >Go Back
            </button>
        </div>
      </div>
    )
  }
}

export default InstructorDetail;
