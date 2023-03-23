import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Tag } from "@/components/Tag/Tag";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">ТЭГ</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Paragraph size="s">Параграф S</Paragraph>
      <Paragraph>Параграф M</Paragraph>
      <Paragraph size="l">Параграф L</Paragraph>
      <Tag size="s">Маленькиий</Tag>
      <Tag color="red">Средний</Tag>
      <Tag size="s" color="green" href="https://www.google.com/">
        Маленькиий
      </Tag>
      <Tag color="primary">Средний</Tag>
    </>
  );
}
