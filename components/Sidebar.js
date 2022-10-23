import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@material-ui/core/Button';
import * as EmailValidator from 'email-validator';

const Sidebar = () => {
  const createChat = () => {
    const input = prompt('Please enter an email address for the user you wish to chat with');
    if (!input) return null;

      if (EmailValidator.validate(input)) {
          //We need to add chat into DB "chats" collection
      }
  };


  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/*List of Chats*/}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
  /*outline-width:0;*/
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
