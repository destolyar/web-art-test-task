import { createSlice } from "@reduxjs/toolkit"
import { UserInterface } from "../../interfaces/User"


interface AuthState {
    user: UserInterface | null
}

const initialState: AuthState = {
    user: {} as UserInterface
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload
            state.user = user
        }
    },
  })
  

  export const { setUser } = authSlice.actions
  export default authSlice.reducer