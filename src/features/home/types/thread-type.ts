// src/types.ts
export interface User {
    id: number;
    name: string;
    username: string;
    bio?: string
    avatarUrl?: string;
  }
  
  export interface Like {
    id: number;
    userId: number;
  }
  
  export interface Thread {
    id: number;
    content: string;
    imageUrl?: string;
    createdAt: string;
    User: User;
    likes: Like[];
    replies: Thread[];
  }
  