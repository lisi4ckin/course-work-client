import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FishermanCard = (props) => {

    const requestParams = useParams();
    const [fishermanData, setFishermanData] = useState();

    useEffect(() => {
        getFishermanData();
    }, [])
    
    const getFishermanData = async () => {
        axios
            .get('/fishermen/' + requestParams.id)
            .then((response) => {
                if (response.status === 200) {
                    setFishermanData(response?.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    } 



    return (
        <div>FishermanCard</div>
    )
}

export default FishermanCard