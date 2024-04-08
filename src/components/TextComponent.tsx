import { Paper } from '@material-ui/core'
import React from 'react'
import Tiptap from './Editor';
import Timestamps from './Timestamps'
import AudioPlayer from './AudioPlayer';

const TextComponent = () => {
  return (
    <Paper style={{
        margin: '1rem',
        padding: '1rem',
        height: 'calc(100% - 1rem)',
        overflow: 'auto',}}>
        <AudioPlayer />
        <div style={{display: 'flex', flexDirection: 'row', }}>
          <Timestamps />  
          <Tiptap />  
        </div>
    </Paper>
  )
}

export default TextComponent