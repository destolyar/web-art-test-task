import { FC } from "react"
import { ProfileFields } from "../components/ProfileFields"
import { BasicLayout } from "../layouts/BasicLayout"

export const Profile: FC = () => {
    return(
        <BasicLayout title="Profile">
            <ProfileFields/>
        </BasicLayout>
    )
}