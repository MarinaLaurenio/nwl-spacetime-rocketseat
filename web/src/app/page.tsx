import { cookies } from "next/headers";
import EmptyMemories from "@/components/EmptyMemories";


export default function Home() {
  const isAuthenticated = cookies().has("token"); //autenticar o usuário, para aparecer seus dados de login

  return <EmptyMemories />;
}
