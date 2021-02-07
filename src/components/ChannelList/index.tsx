import React from 'react';

import { Container, Category, AddCateoryIcon } from './styles';
import ChanellButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCateoryIcon />
      </Category>

      <ChanellButton channelName="chat-livre" />
      <ChanellButton channelName="react" />

      <ChanellButton channelName="vue" />

      <ChanellButton channelName="react-native" />

      <ChanellButton channelName="ui-ux" />
    </Container>
  );
};

export default ChannelList;
