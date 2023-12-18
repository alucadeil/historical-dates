import { FC } from 'react'
import { Header } from './ui'

interface ITitleProps {
  text?: string
};

const Title: FC<ITitleProps> = ({ text }) => (
  <Header>
    {text ?? "Исторические даты"}
  </Header>
);

export default Title;