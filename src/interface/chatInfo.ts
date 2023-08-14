import { UserInfo } from "./userInfo";

export type ChatInfo = {
    id: string;
    avatar: string;
    count_unread: number;
    created_at: number;
    private: boolean;
    title: string;
    users: UserInfo[];
    last_message: {
        created_at: number;
        message: string;
        user_id: string;
        user_name: string;
        user_surname: string;
        you: boolean;
    }
}