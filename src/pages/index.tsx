import * as S from "./styles";
import Header from "../Components/Header/index";
// import Main from "../Components/Main/main";
import PrimarySection from '../Components/Section/primarySection';
import SecondSection from '../Components/Section/secondSection';
import TreeSection from '../Components/Section/threeSection';
import Nav from "../Components/Nav/nav";

function Index() {
  return (
    <S.Container>
      <Nav/>
      <Header/>
      <S.Main>
        <PrimarySection/>
        <SecondSection/>
        <TreeSection/>
      </S.Main>
    </S.Container>
  );
}

export default Index;
