// import { useForm } from "react-hook-form";
// import './App.css';

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register("firstName", { required: "First name is required" })}
//           placeholder="First Name"
//         />
//         <input
//           {...register("lastName", {
//             required: "Last name is required",
//             pattern: {
//               value: /^[A-Za-z]+$/,
//               message: "Last name can only contain letters",
//             },
//           })}
//           placeholder="Last Name"
//         />
//         <input
//           {...register("email", { required: "Email is required",
//             pattern: {
//               value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//               message:'invalid email'
//             }
//            })}
           
//           placeholder="Email"
//         />
//         <input
//           {...register("password", { required: "pasword is required",
//             pattern: {
//               value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//               message:'პაროლი უნდა იყოს კაი მოშნი და რაღაც მახინჯობებიც ეწეროს შიგნით'
//             }
//            })}
//            type="password"
//           placeholder="password"
//         />

//         {errors.firstName && <p>{errors.firstName.message}</p>}
//         {errors.lastName && <p>{errors.lastName.message}</p>}
//         {errors.email && <p>{errors.email.message}</p>}
//         {errors.password && <p>{errors.password.message}</p>}

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;
import { Formik, Field, Form, ErrorMessage } from 'formik';
const App = () => {
  const initialValue = {firstName:'',lastName:'', email:'', password:''};

  const onSubmit = (values) => {
    console.log(values)
  }

  const validation = (values) => {
    const errors = {}

    if(!values.firstName) {
      errors.firstName="wtf broo?!"
    }
    if(!values.lastName) {
      errors.lastName='why god why?!'
    }else if(!/^[A-Za-z]+$/.test(values.lastName)) {
      errors.lastName = 'პაპს ნუ ატყუებ'
    }
    if(!values.email) {
      errors.email = 'pivot pivot'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
      errors.email = 'seven seven'
    }
    if(!values.password) {
      errors.password = 'we where on a brake'
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.email)) {
      errors.password = 'პაროლი უნდა იყოს კაი მოშნი და რაღაც მახინჯობებიც ეწეროს შიგნით'
    }
    
    return errors;
  }

  return (
    <div>
      <Formik initialValues={initialValue} onSubmit={onSubmit} validate={validation}>
        <Form>
          <>
            <Field name='firstName' placeholder='first name'/>
            <ErrorMessage name='firstName' component='div' />
          </>
          <>
            <Field name='lastName' placeholder='last name'/>
            <ErrorMessage name='lastName' component='div' />
          </>
          <>
            <Field name='email' placeholder='email '/>
            <ErrorMessage name='email' component='div' />
          </> 
          <>
            <Field type='password' name='password' placeholder='password'/>
            <ErrorMessage name='password' component='div' />
          </> 
          <button>daawkape</button>
        </Form>
      </Formik>
     
    </div>
  )
}

export default App