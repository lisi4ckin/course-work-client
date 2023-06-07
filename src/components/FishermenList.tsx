import React, { useEffect, useCallback,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../types/AppState';

import { thunkGetFishermanData } from '../store/FishermanReducer/actions';
import { getFishermanData } from '../store/FishermanReducer/reducers';

const FishermenList: React.FC = () => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const [condition, setCondition] = useState(0);
    const fishermenData = useSelector(getFishermanData);

    const fetchData = useCallback(() => {
        setCondition(1000);
        dispatch(thunkGetFishermanData());
    }, [dispatch]);

    useEffect(() => {
        const intervalValue = condition;
        if (condition === 0) {
          setCondition(1000);
          dispatch(thunkGetFishermanData());
        }
        const interval = setInterval(fetchData, intervalValue);
        return () => clearInterval(interval);
    }, [condition, dispatch, fetchData]);

    const FishermanTable = fishermenData.fishermenList.map((fishermean, i) => {
        return (
            <h1 key={`fisherman.${i}.${fishermean.experience}`}>{fishermean.experience}</h1>
        )
    })

    return (
        <>
            <div>FishermenList</div>
            {FishermanTable}
        </>
    )
}

export default FishermenList