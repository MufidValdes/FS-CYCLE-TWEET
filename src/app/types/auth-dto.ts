import { FollowEntity } from "./follow-dto";
import { LikeEntity, ThreadEntity } from "./thread-dto";

export interface UserEntity {
    id           :   number;
    name         :   string;
    username?     :   string;
    email        :   string;
    password     :   string;
    bio?          :   string;
    avatarUrl?   :   string;
    role: "USER" | "ADMIN";
    isEmailVerified : false ;


    likes: LikeEntity
    Thread: ThreadEntity
    followers : FollowEntity[]
    following : FollowEntity[]
    createdAt    :   Date ;
    updatedAt    :   Date ;
}


  // model User {
//   id              Int      @id @default(autoincrement())
//   name            String
//   username        String?
//   email           String   @unique
//   password        String
//   bio             String?
//   avatarUrl       String?
//   role            Role     @default(USER)
//   isEmailVerified Boolean  @default(false)
//   createdAt       DateTime @default(now())
//   updatedAt       DateTime @updatedAt

//   Thread    Thread[]
//   likes     Like[]
//   followers Follower[] @relation("UserFollowers")
//   following Follower[] @relation("UserFollowing")
//   Token     Token[]
// }
