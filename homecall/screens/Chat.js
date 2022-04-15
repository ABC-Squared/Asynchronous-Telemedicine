import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat, Bubble} from "react-native-gifted-chat";
// Docs: https://stackoverflow.com/questions/60205950/how-to-customize-react-native-gifted-chat-in-react-native-0-61

export default function Chat() {
    const [messages, setMessages] = useState([]);

    // TODO: Custimize the Bubble
    const customBubble = props => {
        return (
          <Bubble
            {...props}
            containerStyle={{
              backgroundColor: "#F75050",
            }}
          />
        );
      };

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hi Abby, how are you can you explain more about your symptoms?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Dr. Michelle Williams',
              avatar: require(`../assets/profilepictures/drmichellewilliamspfp.png`),
            },
          },
        ])
      }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: 1,
        }}
        renderBubble={props => customBubble(props)}
        />
    )
}
