body {
  cursor: url('https://example.com/your-cursor-image.gif'), auto;
}

@keyframes moveCursor {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.custom-cursor {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 30px;
  height: 30px;
  background-image: url('https://example.com/your-cursor-image.gif');
  background-size: contain;
  background-repeat: no-repeat;
  animation: moveCursor 1s infinite;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  z-index: 9999;
}
