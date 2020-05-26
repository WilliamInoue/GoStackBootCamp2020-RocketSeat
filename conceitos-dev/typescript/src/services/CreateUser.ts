interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  // password: string | boolean;
  password: string;
  // techs: string[];
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
// export default function createUser(name = '', email: string, password: string) {

  const user = {
    name,
    email,
    password,
  }

  return user;
}