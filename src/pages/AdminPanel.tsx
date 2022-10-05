import { FC } from "react"
import { ListOfUsers } from "../components/ListOfUsers"
import { BasicLayout } from "../layouts/BasicLayout"

export const AdminPanel: FC = () => {
    return(
        <BasicLayout title="Admin panel">
            <ListOfUsers/>
        </BasicLayout>
    )
}