
import { useState } from "react";
import { useRouter } from 'next/navigation'

import { Mid, Style } from "@/styles/Style";



// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(5, "Too short!")
//     .max(15, "Must be 15 characters or less")
//     .required("Name is Required"),
//   email: Yup.string().email("Invalid email address").required("Email is Required"),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });


export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const router = useRouter()

  async function onSubmit(e: any) {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(
        {
          "email": email,
          "password": password
        }
      )
    };
    try {
      const response = await fetch("https://library-crud-sample.vercel.app/api/user/login", options);
      // setIsError(false);
      // setIsLoading(true);

      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const data = await response.json();
      // Update component state with fetched data
      console.log(data.token);
      const token = String(data.token);
      localStorage.setItem("token", token);


      setTimeout(() => {
        alert("Login is successful");
        router.push("/dashboard/home")
      }, 1000);
    } catch (error) {
      alert("Incorrect Email or Password");
    }
  }

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   console.log("trigger submit");
  //   fetchData()
  // }


  return (

    <div >

      <form onSubmit={onSubmit}>
        <Style title=" Login"></Style>
        <Mid>

          <label htmlFor="email">Email Address</label>
          <input name="email" onChange={(e) => setEmail(e.target.value)} type="email" required autoComplete="off"/>
          {/* <ErrorMessage name="email" component="div"></ErrorMessage> */}

          <label htmlFor="password">Password</label>
          <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" required autoComplete="on"/>

        </Mid>
        <div class="inline-flex">
        <button type="submit"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full grid grid-cols-1 justify-items-center"> Login </button>
        <br/>
      </div>
        <p className="form__hint, text-lg">Don't have an account? <a className="form__link" href="/">Register Here</a></p>


        

      </form>

    </div >
  )
}
