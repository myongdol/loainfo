import styled from "styled-components";
import SidebarItems from "../components/SideBar/SidebarItems";


function Sidebar() {
    return (
        <StyledSidebar>
            <SidebarItems
              href="https://lostark.game.onstove.com/Main"
              src="/Images/lostark.png"
              alt="공식 홈페이지 바로가기"
            >
              공식 홈페이지
            </SidebarItems>

            <SidebarItems
              href="https://loa.icepeng.com/"
              src="/Images/icepeng.png"
              alt="아이스펭 바로가기"
            >
              아이스펭
            </SidebarItems>

            <SidebarItems
              href="https://lostark.inven.co.kr/"
              src="/Images/inven.png"
              alt="로스트아크 인벤 바로가기"
            >
              로아인벤
            </SidebarItems>

            <SidebarItems
              href="https://discord.com/invite/lark"
              src="/Images/discord.png"
              alt="로아 통합디코 바로가기"
            >
              로아 통합디코
            </SidebarItems>

            <SidebarItems
              href="https://cho.elphago.work/"
              src="/Images/chophago.png"
              alt="초파고 바로가기"
            >
              초파고
            </SidebarItems>

            <SidebarItems
              href="https://elixir.elphago.work/"
              src="/Images/elphago.png"
              alt="엘파고 바로가기"
            >
              엘파고
            </SidebarItems>
                        
            <SidebarItems
              href="https://mokotools.noogrum.com/clash"
              src="/Images/kamen.png"
              alt="카멘 격돌연습 바로가기"
            >
              카멘 격돌연습
            </SidebarItems>

            <SidebarItems
              href="https://loatool.taeu.kr/"
              src="/Images/loatool.png"
              alt="로아도구 바로가기"
            >
              로아도구
            </SidebarItems>

            <SidebarItems
              href="https://cam-loa.com/"
              src="/Images/camloa.png"
              alt="깜로아 바로가기"
            >
              깜로아
            </SidebarItems>

            <SidebarItems
              href="https://smtool.app/"
              src="/Images/ssaltool.png"
              alt="쌀먹툴 바로가기"
            >
              쌀먹툴
            </SidebarItems>

            <SidebarItems
              href="https://kloa.gg/"
              src="/Images/kloa.png"
              alt="클로아 바로가기"
            >
              클로아
            </SidebarItems>
            
            <SidebarItems
              href="https://loawa.com/"
              src="/Images/loawa.png"
              alt="로아와 바로가기"
            >
              로아와
            </SidebarItems>

            <SidebarItems
              href="https://iloa.gg/"
              src="/Images/iloa.png"
              alt="일로아 바로가기"
            >
              일로아
            </SidebarItems>
            
            <SidebarItems
              href="https://loachart.com/"
              src="/Images/loachart.png"
              alt="로아차트 바로가기"
            >
              로아차트
            </SidebarItems>
        </StyledSidebar>
    )
};

export default Sidebar;

const StyledSidebar = styled.aside`
width: 180px; 
background-color: #e4e4e4;
padding: 0.25rem;
box-sizing: border-box;
background-color: ${(props) => props.theme.colors.dark};

@media (max-width: 768px) {
    width: 100px;
  }
`;