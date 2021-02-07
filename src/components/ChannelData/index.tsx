import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const text = ', me carrega no LoL e CS de novo por favor?';
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            author="Rod Andrade"
            date="21/06/2020"
            content="Meu aniversário é em Janeiro!"
          />
        ))}

        <ChannelMessage
          author="Rod Andrade"
          date="21/06/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>
              {text}
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
