import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">ТЭГ</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
    </>
  );
}
