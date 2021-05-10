import styled from "styled-components";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import { useState } from "react";

const Sidenav = styled.button`
  background-color: ${({ theme }) => theme.colors.light};
  display: grid;
  grid-template-rows: 4fr 1fr;
  text-decoration: none;
  border: none;
  padding-top: 20px;
  border-color: ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid;
  width: 100%;
  cursor: pointer;
`;

const Text = styled.div`
  grid-column: 1;
  margin: auto auto auto 0;
`;

const Icon = styled.div`
  grid-column: 2;
  margin: auto 0 auto auto;
  font-size: 30px;
`;

const MainText = styled.h2`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
`
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
  font-size: 20px;
  font-weight: 100;
  grid-column: 1;
  color: ${({ theme }) => theme.colors.dark}
`

const Label = styled.label`
  grid-column: 2;
  margin: auto 0 auto auto;
`

const Checkbox = styled.input`
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
`


const SidebarLayout = ({ item }) => {
  const [submenu, setSubmenu] = useState(false);

  const show = () => setSubmenu(!submenu);

  return (
    <>
      <Sidenav onClick={item.subMenu && show}>
        <Text>
          <MainText>{item.title}</MainText>
        </Text>
        <Icon>
          {item.subMenu && submenu ? (
            <ArrowDropDownOutlinedIcon fontSize="inherit"/>
          ) : item.subMenu ? (
            <ArrowDropUpOutlinedIcon fontSize="inherit"/>
          ) : null}
        </Icon>
      </Sidenav>
      {submenu &&
        item.subMenu.map((item, index) => {
          return (<SubmenuBox>
          <SubmenuText>{item.title}</SubmenuText>
          <Label>
          <Checkbox type="checkbox" onClick="Checked"/>
          </Label>
          </SubmenuBox>);
        })}
    </>
  );
};

export default SidebarLayout;
