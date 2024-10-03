import { UserEntity } from "./auth-dto";

export type ThreadEntity = {
    id        :number      
    content   :string
    imageUrl?  :string
    createdAt :Date 
    User      :UserEntity
    replies : ThreadEntity[]
    likes: LikeEntity[];
};


export interface LikeEntity {
    id: number;
    userId: number;
    threadId: number;
}
  

export type ThreadRequestDTO = Pick<ThreadEntity, "content" | "imageUrl">;

export type ThreadResponseDTO = {
  data: ThreadEntity;
  status: string;
  message: string;
};
export type ThreadPostResponseDTO = Omit<ThreadResponseDTO, "data">;


// // one to many self relations
// model Thread {
//   id        Int      @id @default(autoincrement())
//   content   String
//   imageUrl  String?
//   createdAt DateTime @default(now())

//   User        User     @relation(fields: [userId], references: [id])
//   userId      Int
//   likes       Like[]
//   replies     Thread[] @relation("ThreadReplies")
//   repliesBy   Thread?  @relation("ThreadReplies", fields: [repliesById], references: [id])
//   repliesById Int?
// }
