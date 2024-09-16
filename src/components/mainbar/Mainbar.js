import React, { useContext } from 'react';
import './mainbar.css';
import { Context } from '../../context/Context';

const Mainbar = () => {
  const { input, setInput, onSent, showResult, resultData, loading, recentPrompt, sendCardQuestion } = useContext(Context);
  const handleCardClick = (prompt) => {
    sendCardQuestion(prompt); 
    onSent(prompt);         
  };
  return (
    <div className="mainbar">
      <div className="nav">
        <p>Gemini</p>
        <img src="/assets/user_icon.jpg" alt="" />
      </div>
      {!showResult ? (
        <>
          <div className='mainContainer'>
            <div className="greet">
              <p><span>Hello, Abi</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Help me with planning a European road trip")}>
                <p>Help me with planning a European road trip</p>
                <img src="/assets/compass_icon.png" alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Explain how a generator works")}>
                <p>Explain how a generator works</p>
                <img src="/assets/bulb_icon.png" alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Plan our next big project step-by-step")}>
                <p>Plan our next big project step-by-step</p>
                <img src="/assets/message_icon.png" alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Tell me about HTML")}>
                <p>Tell me about HTML</p>
                <img src="/assets/code_icon.png" alt="" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='result'>
          <div className="resultTitle">
            <img src="/assets/user_icon.jpg" alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className='resultData'>
            <img src="/assets/gemini_icon.png" alt="" />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            )}
          </div>
        </div>
      )}

      <div className="mainbarBottom">
        <div className="searchBox">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
          <div>
            <img src="/assets/gallery_icon.png" alt="" />
            <img src="/assets/mic_icon.png" alt="" />
            {input ? <img onClick={() => onSent()} src="/assets/send_icon.png" alt="" /> : null}
          </div>
        </div>
        <p className="bottomInfo">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Mainbar;
