import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    reset

  } = useForm();

  const formData=(data)=>{
    console.log(data)
    reset();
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(formData)}>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="name"
            {...register('name', { required: 'First name is required' })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="email"
            {...register('email', { required: 'email is required' })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
