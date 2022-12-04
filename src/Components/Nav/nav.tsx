import * as S from "./styles";

export default function Nav() {
  return (
    <nav style={{
        paddingRight: '200px', 
    backgroundColor: '#212121', 
}}
    >
      <S.MenuList>
        <S.ItemList>INDIVIDUALS</S.ItemList>
        <S.ItemList>EMPLOYERS</S.ItemList>
        <S.ItemList>ADVISORS</S.ItemList>
      </S.MenuList>
    </nav>
  );
}
