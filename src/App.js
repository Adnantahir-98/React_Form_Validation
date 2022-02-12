import './App.css';
import Signup from './Components/Signup';


function App() {
  return (
    <div>

      <div className="row">
        <div className="col-md-4 offset-md-4">
          <center>
            <h1 className='fw-bolder text-muted'>Formik Form Validation</h1>
            <h2>Using Yup & Formik</h2>
          </center>
          <Signup />
        </div>
      </div>
      
    </div>
  );
}

export default App;
