import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function Square(props) {
  const [temValue, setTemValue] = useState(0)

  return (
    <button className="square" onClick={() =>   alert('click')  }>
    {/* TODO */}
  {props.value}
  </button>
  )
}

function Board() {
  function renderSquare(i) {
    return <Square value={i} />;
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
  )
}


const root = createRoot(document.getElementById("root")); // 创建根节点
root.render(<Game />); // 挂载根节点
