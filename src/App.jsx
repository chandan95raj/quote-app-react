import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import { getJoke } from "./services/api-client";
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

  const [joke, setJoke] = useState({ content: `Today is ${getCurrentDate()}`, author: 'Have a nice day' });
  const [loading, setLoading] = useState(false);

  const getJokesData = async () => {
    setLoading(true);
    const newJoke = await getJoke();
    setJoke(newJoke[0]);
    setLoading(false);
  };


  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h2>Quotes App</h2>
            <Button fn={getJokesData} />
          </div>
          <div className="card-body">
            {loading ? (
              <div
                className="d-flex align-items-center justify-content-center"
              >
                <Spin size="large" />
              </div>
            ) : (
              <Message joke={joke} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
