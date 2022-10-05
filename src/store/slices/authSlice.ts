import { createSlice } from "@reduxjs/toolkit"
import { UserInterface } from "../../interfaces/User"


interface AuthState {
    user: UserInterface | null
}

const initialState: AuthState = {
    user: {
        id: "ldHbyIitQv5h1YGfkonK",
        name: "Vladislav",
        surname: "Metik",
        username: "destolyar",
        role: "admin",
        email: "vladislavmetik@icloud.com",
        dateOfBirth: "30.03.2002",
        password: "Adgjmptw123@"
    } as UserInterface
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload
            state.user = user
        },
        clearUser: (state) => {
            state.user = null
        }
    },
  })
  

  export const { setUser, clearUser } = authSlice.actions
  export default authSlice.reducer