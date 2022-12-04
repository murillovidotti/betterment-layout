import * as S from "./styles";
import { MobileComponent, LogoNewYork, LogoCN, LogoB, LogoForb, ImageBotttom} from "../Image/ImageComponent/index";
import PrimaryButton from "../Button/primaryButton";

export default function PrimarySection() {
  return (
    <>
      <S.PrimarySection>
        <S.Container>
          <S.Box>
            <S.h1>
              Investing <br /> made better
            </S.h1>
            <p>
              Meet the app that gives you the tools, inspiration, and support{" "}
              <br /> to help you become a better investor.
            </p>
            <div style={{ marginBottom: "50px" }}>
              <PrimaryButton />
            </div>
            <div style={{width:'400px', height: '31px', display: 'flex', position: 'absolute'}}>
              <LogoNewYork/>
              <LogoCN/>
              <LogoB/>
              <LogoForb/>
            </div>
          </S.Box>
        </S.Container>
        <div style={{ width: "980px", height: "589px" }}>
          <MobileComponent />
        </div>
      </S.PrimarySection>
      <div>
        <ImageBotttom/>
      </div>
    </>
  );
}
