
import * as Yup from "yup";
import { useRouter } from 'next/navigation'
import Link from 'next/link';


import { useFormik } from "formik";
import { BoldLink, BoxContainer, FieldContainer, FieldError, FormContainer, FormError, FormSuccess, Input, MutedLink, SubmitButton } from "@/styles/common";
import { useState } from "react";
// import { Marginer } from "@/styles/Marginer";



const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too short!")
    .max(15, "Must be 15 characters or less")
    .required("Name is Required"),
  email: Yup.string().email("Invalid email address").required("Email is Required"),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});


export default function Register() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter()

  async function onSubmit() {



    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(
        {
          "name": formik.values.name,
          "email": formik.values.email,
          "password": formik.values.password,
        }
      )
    };
    try {
      const response = await fetch("https://library-crud-sample.vercel.app/api/user/register", options);
      // setIsError(false);
      // setIsLoading(true);

      if (!response.ok) {
        throw new Error('Error fetching');
      }


      const data = await response.json();
      // Update component state with fetched data
      console.log(data);


      if (response && data) {
        setError(null);
        setSuccess(data.message);
        formik.resetForm();
      }

      setTimeout(() => {
        alert("Register is successful");
        router.push("/accounts/login")

      }, 1000);
    } catch (error) {
      console.log(error);
    }


  }

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   console.log("trigger submit");
  //   fetchData()
  // }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (

    <BoxContainer>
      <h1>Register Information</h1>
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>
      }
      {!success && <FormError>{error ? error : ""}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="name"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>

        {/* <Marginer direction="vertical" margin="1em" /> */}
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>
      </FormContainer>
      {/* <Marginer direction="vertical" margin={5} /> */}
        Already have an account?
        <Link href="/accounts/login" >
          sign in
        </Link>
    </BoxContainer>
  )
}
