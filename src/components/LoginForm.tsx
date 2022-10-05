import '../styles/components/form.scss'
import { useForm } from "react-hook-form"
import { ErrorMessage } from "./ErrorMessage"
import { checkUser } from "../utils/checkUser"
import { getUsers } from "../utils/getUsers"
import { useEffect, useState } from "react"
import { UserInterface } from "../interfaces/User"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slices/authSlice"
import { useNavigate } from "react-router-dom"


interface LoginFormInput {
    email: string,
    password: string
}

export const LoginForm = () => {
    const { register, getValues, handleSubmit, formState: { errors }, setError } = useForm<LoginFormInput>()
    const [users, setUsers] = useState<UserInterface[]>([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        getUsers().then(res => setUsers(res))
    }, [])

    return(
        <form className="form" autoComplete="on" onSubmit={handleSubmit(() => {
            const { email, password } = getValues()
            const res = checkUser(users, email, password)
            dispatch(setUser({user: res}))

            if(res) {
                navigate("/profile")
            } else {
                setError('password', {message: "Incorrect email or password"})
            }
        })}>
            <input className="form__input" {...register("email", {
                required: "This field is required",
                minLength: {
                    value: 4,
                    message: "Min length is 4"
                },
            })} type="email" placeholder="Email"/>
            <ErrorMessage error={errors.email?.message}/>
            <input className="form__input" {...register("password", {
                required: "This field is required",
                pattern: {
                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    message: "Password requirements: 8 length, numbers,special character and capital letter"
                }
            })} type="password" placeholder="Password"/>
            <ErrorMessage error={errors.password?.message}/>
            <button className="form__submit" type="submit">Submit</button>
        </form>
    )
}