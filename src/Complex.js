import React, { useState } from 'react';

// a+jb veya a+ib formatı (ör. 3+j4, -2-i5, 1.5+j0.5)
const COMPLEX_REGEX = /^\s*([+-]?\d+(?:\.\d+)?)\s*([+-])\s*[ij]\s*(\d+(?:\.\d+)?)\s*$/;

function parseComplex(text) {
  const match = COMPLEX_REGEX.exec(text);
  if (!match) return null;
  const a = parseFloat(match[1]);
  const b = parseFloat(match[3]) * (match[2] === '-' ? -1 : 1);
  return { a, b };
}

const round = (n) => Number(n.toFixed(4));

function Complex() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState(null); // 'modulus' | 'inverse'

  const z = parseComplex(text);
  let output = null;
  let error = null;

  if (text.trim() !== '' && z === null) {
    error = 'Invalid format. Use a+jb or a+ib, e.g. 3+j4 or -2-i5.';
  } else if (z && mode === 'modulus') {
    output = `|z| = ${round(Math.hypot(z.a, z.b))}`;
  } else if (z && mode === 'inverse') {
    const d = z.a * z.a + z.b * z.b;
    if (d === 0) {
      error = 'Cannot invert zero.';
    } else {
      const re = round(z.a / d);
      const im = round(-z.b / d);
      output = `1/z = ${re} ${im < 0 ? '-' : '+'} j${Math.abs(im)}`;
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="a+jb"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setMode('modulus')}>Modulus</button>
      <button onClick={() => setMode('inverse')}>Invert</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {output && <div>{output}</div>}
    </div>
  );
}

export default Complex;