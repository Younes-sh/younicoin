import React from 'react'
import reactMinimize from 'react-minimize'

/** reactMinimize is a factory that exports the maximize component. */
// const Maximize = reactMinimize({ React })

const Maximize = (props) => {


  <Maximize
      shouldMaximize={() => true}
      shouldCompress={() => true}
  >
    {maximize => (
      <div>
        <span style={{ float: 'right' }}>
          {maximize.Controls}
        </span>
      </div>
    )}
  </Maximize>
}

export default Maximize ;