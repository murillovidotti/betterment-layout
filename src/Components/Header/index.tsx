import * as S from './styles';
import {Logo} from '../Image/ImageComponent/index';
import Menu from '../Menu';
import PrimaryButton from '../Button/primaryButton';
import SecondButton from '../Button/secondButton';


const Header = () => {
    return (
      <S.Box>
        <Logo />
        <Menu />
        <SecondButton />
        <PrimaryButton />
      </S.Box>
    );
};

export default Header;
