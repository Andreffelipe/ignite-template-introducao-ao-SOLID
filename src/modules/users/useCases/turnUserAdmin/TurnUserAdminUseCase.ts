import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userExiste = this.usersRepository.findById(user_id);

    if (!userExiste) {
      throw new Error("User not existes");
    }

    const user = this.usersRepository.turnAdmin(userExiste);

    return user;
  }
}

export { TurnUserAdminUseCase };
