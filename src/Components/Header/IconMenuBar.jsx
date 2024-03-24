import { ContentIcon } from "./IconMenuBarStyle";

const IconMenuBar = ({onClick, openMenu}) => {
  return (
    <ContentIcon onClick={onClick} openMenu={openMenu}>
      <div className="line-one"></div>
      <div className="line-two "></div>
      <div className="line-three"></div>
    </ContentIcon>
  );
};

export default IconMenuBar;
