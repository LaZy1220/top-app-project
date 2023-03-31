import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Rating } from "@/components/Rating/Rating";
import { Tag } from "@/components/Tag/Tag";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
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
      <Rating rating={rating} setRating={setRating} isEditable />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory} </li>
        ))}
      </ul>
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
