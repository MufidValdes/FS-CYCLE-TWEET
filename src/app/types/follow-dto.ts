import { UserEntity } from "./auth-dto";

export interface FollowEntity {
    id: number;
    following: UserEntity;
    followingId: number;
    follower: UserEntity;
    followerId: number
    createdAt    :   Date ;
}