import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const TypeWriter = () => {
  return (
    <ReactTypingEffect
      text={["Frontend Developer."]}
      displayTextRenderer={(text, i) => {
        return (
          <h1 className='Typewriter'>
            {text.split('').map((char, i) => {
              const key = `${i}`;
              return (
                <strong
                  key={key}
                  style={i % 2 === 0 ? { color: '' } : {}}
                >
                  {char}
                </strong>
              );
            })}
          </h1>
        );
      }}
    />
  );
};

export default TypeWriter;
