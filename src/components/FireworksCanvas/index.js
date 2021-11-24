// import { CSSProperties } from 'react';
import { Fireworks, useFireworks } from 'fireworks-js/dist/react';
import { ReactComponent as Shark } from "./shark.svg";
import css from "./styles.module.scss";

export default function FireworksCanvas() {
  const { enabled, options, setEnabled, setOptions } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 1,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 20,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      sound: {
        enabled: false,
        files: [
          'https://fireworks.js.org/sounds/explosion0.mp3',
          'https://fireworks.js.org/sounds/explosion1.mp3',
          'https://fireworks.js.org/sounds/explosion2.mp3',
        ],
        volume: {
          min: 1,
          max: 10,
        },
      },
      mouse: {
        click: true,
        move: false,
        max: 1,
      },
    },
  });

  const mainStyle = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: 'none',
    zIndex: '1',
  };

  const disabledStyle = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: 'none',
    // zIndex: '1',
  };

const style=!enabled ? mainStyle : disabledStyle
  // const toggleSound = () => {
  //   setOptions({ sound: { enabled: !options.sound?.enabled } });
  // };

  const handleChange = () => {
    setEnabled()
    setOptions({ sound: { enabled: !options.sound?.enabled } });
  }

  return (
    <Fireworks style={style} enabled={!enabled} options={options}>
      <div
        style={{
          gap: '6px',
          padding: '6px',
          display: 'flex',
          // background: '#607d8b',
        }}
      >
        {/* <button className={css.fireworksButton} onClick={() => setEnabled()}>
          Fireworks {enabled ? 'enabled' : 'disabled'}
        </button>
        <button onClick={() => toggleSound()}>
          Sound {options.sound?.enabled ? 'enabled' : 'disabled'}
        </button> */}

        <button className={css.fireworksButton} onClick={handleChange}>
          <Shark width='80' height='60'/>
        </button>
      </div>
    </Fireworks>
  );
}
