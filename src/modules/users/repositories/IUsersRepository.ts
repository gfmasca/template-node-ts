import User from '../infra/typeorm/entities/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  findByEmailPhoneOrCpf(email: string, phone: string, cpf: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): User;
  save(data: User): Promise<User>;
}

export default IUsersRepository;
