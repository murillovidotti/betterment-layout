import logoBetter from "../../../public/logo.svg";
import Mobile from "../../../public/homepage-hero-image-device_desktop.webp";
import Ocean from "../../../public/landscape-day-bottom-image_desktop.svg";
import Icon1 from "../../../public/icon/icon1.svg";
import Icon2 from "../../../public/icon/icon2.svg";
import Icon3 from "../../../public/icon/icon3.svg";
import Icon4 from "../../../public/icon/icon4.svg";
import Icon5 from "../../../public/icon/icon5.svg";
import Icon6 from "../../../public/icon/icon6.svg";
import LogoNewYorkTimes from "../../../public/the-new-work-times.png";
import LogoCNBC from "../../../public/cnbc.png"
import LogoBInsider from "../../../public/b-insider.png"
import LogoForbes from "../../../public/forbes.png"

export const Logo = () => {
  return (
    <img style={{ marginRight: "24px" }} src={logoBetter} alt="Logo Header" />
  );
};

export const IconOne = () => {
  return (
    <img
      style={{ height: "48px", width: "48px"}}
      src={Icon1}
      alt=""
    />
  );
};

export const IconTwo = () => {
  return (
    <img
      style={{ height: "48px", width: "48px"}}
      src={Icon2}
      alt=""
    />
  );
};

export const IconThree = () => {
  return (
    <img
      style={{ height: "48px", width: "48px"}}
      src={Icon3}
      alt=""
    />
  );
};

export const IconFour = () => {
  return (
    <img
      style={{ height: "48px", width: "48px"}}
      src={Icon4}
      alt=""
    />
  );
};

export const IconFive = () => {
  return (
    <img
      style={{ height: "48px", width: "48px"}}
      src={Icon5}
      alt=""
    />
  );
};

export const IconSix = () => {
  return (
    <img
      style={{ height: "48px", width: "48px"}}
      src={Icon6}
      alt=""
    />
  );
};

export const LogoNewYork = () => {
  return <img style={{marginRight: '24px', height: '18px'}} src={LogoNewYorkTimes} alt="" />;
};

export const LogoCN = () => {
  return <img style={{marginRight: '24px', height: '28px'}} src={LogoCNBC} alt="" />;
};

export const LogoB = () => {
  return <img style={{marginRight: '24px', height: '18px'}} src={LogoBInsider} alt="" />;
};

export const LogoForb = () => {
  return <img style={{marginRight: '24px', height: '18px'}} src={LogoForbes} alt="" />;
};

export const ImageBotttom = () => {
  return (
    <img
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: "2",
      }}
      src={Ocean}
      alt=""
    />
  );
};

export const MobileComponent = () => {
  return (
    <img
      style={{
        maxWidth: "980px",
        position: "relative",
        width: "150%",
        marginLeft: "auto",
        marginRight: "0",
        left: "-255px",
        zIndex: "2",
      }}
      src={Mobile}
      alt=""
    />
  );
};
