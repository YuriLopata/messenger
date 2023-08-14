import { MouseEventHandler } from "react";

export interface IChatItem {
    avatar: string;
    title: string;
    last_message: {
        created_at: number;
        message: string;
    }
    isActive: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}