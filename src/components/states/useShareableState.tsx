import React, { useState } from 'react'

const useShareableState = () => {

    const [sidebar, setSibebar] = useState(false);
    return {
      sidebar,
      setSibebar
    }
}

export default useShareableState
