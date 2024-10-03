import { UserEntity } from "../../../app/types/auth-dto";

export type LoginRequestDTO = Pick<UserEntity, "email" | "password">;

export type LoginResponseDTO = {
  user: UserEntity;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export type RegisterRequestDTO = Pick<
  UserEntity,
  "name" | "email" | "password"
>;

export type RegisterResponseDTO = LoginResponseDTO;

export type UserStoreDTO = Omit<UserEntity, "password">;
