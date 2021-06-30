import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userFound = this.usersRepository.findById(user_id);
    if (userFound) {
      const updatedUser = this.usersRepository.turnAdmin(userFound);

      return updatedUser;
    }
    throw new Error("Falha ao atualizar usuario");
  }
}

export { TurnUserAdminUseCase };
