import styled from "styled-components";
import SidebarLayout from "./SidebarLayout";
import SidebarData from "./SidebarData";
import { Sidebutton, SideText, SideLabel, Checkbox, MainText } from "../../styles/Styles";


const Sidenav = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 5px;
  grid-column: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

const Sidebar = () => {

return (
  <>
    <Sidenav>
    <Sidebutton>
      <SideText>
          <MainText>På lager</MainText>
      </SideText>
    <SideLabel>
      <Checkbox type="checkbox"/>
    </SideLabel>
    </Sidebutton>
      {SidebarData.map((item, index) => {
        return <SidebarLayout item={item} key={index} />;
      })}
    </Sidenav>
  </>
 )
}
export default Sidebar;