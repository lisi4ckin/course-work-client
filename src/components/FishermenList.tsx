import React, { useEffect, useState } from 'react'

function FishermenList() {

    const [fishermen, setFishermen] = useState<any>([]);

    useEffect(() => {

        const apiCall = async () => {
            const response = await fetch('/fishermen');
            const body = await response.json();
            setFishermen(body);
        }
        apiCall();
    }, []);

    return (
        <>
            <div>FishermenList</div>
            {fishermen.map((fishermean, i) => {
                return (
                    <h1>{fishermean.experience}</h1>
                )
            })}
        </>
    )
}

export default FishermenList