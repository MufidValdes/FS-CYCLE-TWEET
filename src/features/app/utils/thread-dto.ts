import { UserEntity } from "./auth-dto";

export type ThreadEntity = {
    id        :number      
    content   :string
    imageUrl  :string
    createdAt :Date 
    updatedAt :Date
    User      :UserEntity
};