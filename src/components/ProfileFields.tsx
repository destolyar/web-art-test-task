import '../styles/components/profile-fields.scss'
import { FC } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { UserInterface } from "../interfaces/User"
import { RootState } from "../store/store"
import { changeUser } from "../utils/changeUser"

export const ProfileFields: FC = () => {
    const currentUser: UserInterface = useSelector((state: RootState) => state.auth.user) || {} as UserInterface
    const { register, handleSubmit, getValues } = useForm({
        defaultValues: currentUser
    })

    return(
        <form className="profile-fields" autoComplete="on" onSubmit={handleSubmit(() => {
            const values = Object.assign(getValues(), { role: currentUser.role })
            changeUser(values, currentUser?.id)
        })}>
            <fieldset className="profile-fields__container">
                <legend className="profile-fields__container__legend">User info</legend>

                <label className="profile-fields__container__label" htmlFor="name">Name</label>
                <input className="profile-fields__container__item" type="text" id="name" {...register("name", {
                    required: true,
                    minLength: 4,
                })}/>
                
                <label className="profile-fields__container__label" htmlFor="surname">Surname</label>
                <input className="profile-fields__container__item" type="text" id="surname" {...register("surname", {
                    required: true,
                    minLength: 4,
                })}/>

                <label className="profile-fields__container__label" htmlFor="username">Username</label>
                <input className="profile-fields__container__item" type="text" id="username" {...register("username", {
                    required: true,
                    minLength: 4,
                })}/>

                <label className="profile-fields__container__label" htmlFor="dateOfBirth">Date of birth</label>
                <input className="profile-fields__container__item" type="text" id="dateOfBirth" {...register("dateOfBirth", {
                    required: true,
                    minLength: 4,
                })}/>
                                
                <label className="profile-fields__container__label" htmlFor="email">Email</label>
                <input className="profile-fields__container__item" type="text" id="email" {...register("email", {
                    required: true,
                    minLength: 4,
                })}/>

                <label className="profile-fields__container__label" htmlFor="password">Password</label>
                <input className="profile-fields__container__item" type="text" id="password" {...register("password", {
                    required: true,
                    minLength: 4,
                })}/>
                
                <button className="profile-fields__container__submit" type="submit">Save changes</button>
            </fieldset>
        </form>
    )
}