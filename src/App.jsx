import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import { getEmoji, getQuote } from "./services/api-client";
import { Spin } from 'antd';

const App = () => {

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const [quotes, setQuotes] = useState({ content: `Today is ${getCurrentDate()}`, author: 'Have a nice day' });
  const [loading, setLoading] = useState(false);
  const [emoji, setEmoji] = useState({ character: "😄" });

  const getQuotesData = async () => {
    setLoading(true);
    const newQuote = await getQuote();
    const NewEmojiList = await getEmoji();

    const limitedEmojiList = NewEmojiList.slice(0, 100);
    const randomIndex = Math.floor(Math.random() * limitedEmojiList.length);
    const randomEmoji = limitedEmojiList[randomIndex];

    setQuotes(newQuote[0]);
    setEmoji(randomEmoji);
    setLoading(false);
  };


  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>Quotes App</h2>

          </div>
          <div className="card-body">
            {loading ? (
              <div
                className="d-flex align-items-center justify-content-center"
              >
                <Spin size="large" />
              </div>
            ) : (
              <Message quotes={quotes} emoji={emoji} />
            )}
          </div>
          <div className="card-footer">
            <Button fn={getQuotesData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
