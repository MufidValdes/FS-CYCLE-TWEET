import { ThreadEntity } from "../../app/utils/thread-dto";


export type ThreadStoreDTO = Omit<ThreadEntity, 'User'>;
