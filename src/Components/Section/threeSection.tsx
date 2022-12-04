import * as S from "./styles";
import ComponentText from "../TextComponent/index";
import { IconOne, IconTwo, IconThree, IconFour, IconFive, IconSix } from "../Image/ImageComponent/index";

export default function TreeSection() {
  return (
    <S.TreeSection>
      <h2
        style={{
          marginBottom: "72px",
          fontSize: "36px",
          lineHeight: "45px",
          color: "white",
        }}
      >
        What makes Betterment better?
      </h2>
      <div
        style={{
          display: "flex",
        }}
      >
        <ComponentText
          icon={<IconOne />}
          title="Built to make investing easy."
          description="We'll guide you through portfolio options, risk levels, goal setting, and savings features."
        />

        <ComponentText
          icon={<IconTwo />}
          title="Diversified investing."
          description="We custom-build our portfolios using ETFs or cryptocurrencies to give you better diversification."
        />

        <ComponentText
          icon={<IconThree />}
          title="Transparent pricing."
          description="We offer lower cost investing options so everyone can decide what’s best for their money."
        />
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "51px",
        }}
      >
        <ComponentText
          icon={<IconFour />}
          title="Invest with your values."
          description="Socially Responsible Investing can help make an impact while putting your money to work for you."
        />

        <ComponentText
          icon={<IconFive />}
          title="Diversified investing."
          description="Consider our tax strategies designed to help you limit the tax impact of your investments."
        />

        <ComponentText
          icon={<IconSix />}
          title="Track your finances."
          description="Connect outside accounts to better inform our advice in one place."
        />
      </div>
    </S.TreeSection>
  );
}
