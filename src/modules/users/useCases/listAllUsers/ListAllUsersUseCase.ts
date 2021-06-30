import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userFound = this.usersRepository.findById(user_id);

    if (!userFound) {
      throw new Error("non existing user cannot get list of users");
    } else if (userFound.admin) {
      const users = this.usersRepository.list();
      return users;
    }

    throw new Error("Fail to return list of users");
  }
}

export { ListAllUsersUseCase };
