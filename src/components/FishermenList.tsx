import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react';
import '../static/styles/FishermenList.css';
import { useNavigate } from 'react-router-dom';

function FishermenList() {

    const [fishermen, setFishermen] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFishermenList()
    }, []);

    const getFishermenList = () => {
        axios
            .get("/fishermen")
            .then((response) => {
                if (response.status === 200) {
                    setFishermen(response?.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderTableData = () => {
        return fishermen.map((fisherman, index) => {
            const { id, fishermenFullName, age, experience } = fisherman;
            return (
                <tr key={index + 1} onClick={() => navigate('/fishermen/${id}')}>
                    <td>{index + 1}</td>
                    <td>{fishermenFullName}</td>
                    <td>{age}</td>
                    <td>{experience}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className='table-container'>
                <p className='table-header'>Список актуальных участников клуба</p>
                <table id='fishermen'>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FishermenList