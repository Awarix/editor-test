import React, { useState } from 'react';
import { Box, Typography, Slider } from '@material-ui/core';

const Timestamps: React.FC = () => {
  const [blockSize, setBlockSize] = useState<number>(5);

  const timeBlocks = Math.ceil(600 / blockSize);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setBlockSize(newValue);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const format = (val: number) => String(val).padStart(2, '0');
    return `00:${format(minutes)}:${format(remainingSeconds)}`;
  };

  const handleBlockClick = (start: number) => {
    alert(`Время начала: ${formatTime(start)}`);
  };

  return (
    <Box style={{ margin: '0.5rem' }}>
      <Slider
        min={10}
        max={30}
        value={blockSize}
        onChange={handleSliderChange}
        aria-labelledby="step-slider"
        valueLabelDisplay="auto"
        color='primary'
        marks={true}
        step={10}
        style={{ width: '125px', marginTop: '3rem' }}
      />
      <Box display="flex" flexDirection="column" style={{ width: '125px', gap: '1rem', overflow: 'auto', height: '800px', position: 'relative', marginBottom: '1rem' }}>
        {Array.from(Array(timeBlocks)).map((_, index) => {
          const startTime = index * blockSize;
          const endTime = Math.min((index + 1) * blockSize, 600); // Ограничиваем конечное время до 600 секунд

          return (
            <Box key={index} onClick={() => handleBlockClick(startTime)} 
            style={{ 
              cursor: 'pointer', 
              padding: '10px', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid gray',
              borderRadius: '10px',
            }}>
              <Typography>{formatTime(startTime)}</Typography>
              {index !== timeBlocks - 1 && <Typography>{formatTime(endTime)}</Typography>}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Timestamps;

