import styled from "styled-components";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import { useState } from "react";
import { Sidebutton, SideText, SideLabel, Checkbox, MainText } from "../../styles/Styles";

const Icon = styled.div`
  grid-column: 2;
  margin: auto 0 auto auto;
  font-size: 30px;
`;

const SubmenuBox = styled.button`
  background-color: ${({ theme }) => theme.colors.light};
  display: grid;
  grid-template-rows: 4fr 1fr;
  text-decoration: none;
  border: none;
  padding-top: 2px;
  border-color: ${({ theme }) => theme.colors.grey};
  border-left: 1px solid;
  width: 90%;
  margin: 0 auto 0 0;
`;

const SubmenuText = styled.h3`
  font-size: 14px;
  font-weight: 100;
  grid-column: 1;
  color: ${({ theme }) => theme.colors.dark};
  @media (${({ theme }) => theme.scale.medium}) {
    font-size: 20px;
  }
`


const SidebarLayout = ({ item }) => {
  const [submenu, setSubmenu] = useState(false);

  const show = () => setSubmenu(!submenu);

  return (
    <>
      <Sidebutton onClick={item.subMenu && show}>
        <SideText>
          <MainText>{item.title}</MainText>
        </SideText>
        <Icon>
          {item.subMenu && submenu ? (
            <ArrowDropDownOutlinedIcon fontSize="inherit"/>
          ) : item.subMenu ? (
            <ArrowDropUpOutlinedIcon fontSize="inherit"/>
          ) : null}
        </Icon>
      </Sidebutton>
      {submenu &&
        item.subMenu.map((item, index) => {
          return (<SubmenuBox key={index}>
          <SubmenuText>{item.title}</SubmenuText>
          <SideLabel>
          <Checkbox type="checkbox"/>
          </SideLabel>
          </SubmenuBox>);
        })}
    </>
  );
};

export default SidebarLayout;
