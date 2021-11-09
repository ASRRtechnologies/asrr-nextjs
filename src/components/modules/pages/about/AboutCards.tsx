import React from 'react';

function AboutCards({ kernwaarde }) {
  const { title, text } = kernwaarde;

  return (
    <div>
      <h1 className="h3">{title}</h1>
      <p
        className="no-margin"
        style={{ maxWidth: '400px', textAlign: 'justify' }}
      >
        {text}
      </p>
    </div>
  );
}

export default AboutCards;
