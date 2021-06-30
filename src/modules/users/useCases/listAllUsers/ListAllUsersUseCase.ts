import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User[] {
    const userFound = this.usersRepository.findById(user_id);

    if (!userFound) {
      throw new Error("Non existing user cannot get list of users");
    } else if (!userFound.admin) {
      throw new Error("Non Admin User is noot allowed to get list of users");
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
