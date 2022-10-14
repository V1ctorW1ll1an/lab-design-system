import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export interface ISignInProps {}

export function SignIn(props: ISignInProps) {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await axios.post("/api/login", {
      email: "victor.willian@teste.com",
      password: "123456",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div
      className={`h-screen w-screen bg-gray-900 flex 
      items-center justify-center text-gray-100 flex-col`}
    >
      <header className="flex flex-col justify-center items-center ">
        <Logo />

        <Heading className="mt-4" size="lg">
          Ignite lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-2">
          Faça login e comece a usa!
        </Text>
      </header>
      <main className="w-full max-w-[400px] mt-8">
        {isUserSignedIn && <Text>Login realizado com sucesso</Text>}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-stretch gap-4"
        >
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">Email</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </TextInput.Root>
          </label>
          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold">Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                type="password"
                id="password"
                placeholder="********************"
              />
            </TextInput.Root>
          </label>
          <label htmlFor="remember" className="flex items-center gap-2">
            <CheckBox id="remember" />
            <Text
              size="sm"
              className="text-gray-200 cursor-pointer select-none"
            >
              Lembrar de mim por 30 dias
            </Text>
          </label>
          <Button className="mt-4" type="submit">
            Entrar na plataforma
          </Button>
        </form>
      </main>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a
            href="google.com"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a
            href="google.com"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Não possui conta? Crie uma agora{" "}
          </a>
        </Text>
      </footer>
    </div>
  );
}
