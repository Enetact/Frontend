import React, {FC, useState} from 'react';
import EstimatedRate from "../../../../common/estimated-rate/EstimatedRate";
import ChatBubble from "../../../../common/chat-bubble/ChatBubble";
import RateEdition from "./rate-edition/RateEdition";
import RateDetail from "./rate-detail/RateDetail";

const Rate: FC = (): JSX.Element => {
    const [edition, setEdition] = useState<boolean>(false);

    const View = edition ? <RateEdition setEdition={setEdition}/> : <RateDetail setEdition={setEdition}/>;

    return (
        <>
            <EstimatedRate/>
            <ChatBubble messages={[
                {
                    message: 'Below is your project summary. You can edit & update your information.'
                },
                {
                    message: 'Here’s a refresher on what’s covered and what’s not.'
                },
            ]}/>
             { View }
        </>
    );
};

export default Rate;