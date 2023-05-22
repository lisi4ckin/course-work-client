import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../static/styles/FishermanCard.css';

const FishermanCard = (props) => {

    const requestParams = useParams();
    const [fishermanData, setFishermanData] = useState({
        fullName: "",
        age: "",
        experience: "",
        preferencesFish: []
    });

    const { fullName, age, experience, preferencesFish } = fishermanData;

    const [fishesRef, setFishesRef] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getFishermanData();
        getFishReferences();
    }, [])

    const getFishermanData = async () => {
        axios
            .get(`/fishermen/${requestParams.id}`)
            .then((response) => {
                if (response.status === 200) {
                    setFishermanData(response?.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getFishReferences = async () => {
        axios
            .get(`/fishes/ref`)
            .then((response) => {
                if (response.status === 200) {
                    setFishesRef(response?.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onInputChange = e => {
        setFishermanData({ ...fishermanData, [e.target.name]: e.target.value })
    }

    const FormHandle = e => {
        e.preventDefault();
        updateDataToServer(fishermanData)
    }

    const updateDataToServer = (data) => {
        axios.put(`/fishermen/${requestParams.id}`, data);
    };

    const renderTableData = () => {
        if (fishermanData.preferencesFish !== null) {
            return fishermanData.preferencesFish?.map((fish, index) => {
                const { fishId, referenceName } = fish;
                return (
                    <tr key={index + 1} onClick={() => navigate(`/fishes/${fishId}`)}>
                        <td>{index + 1}</td>
                        <td>{referenceName}</td>
                    </tr>
                )
            })
        } else {
            return null;
        }
    }

    return (
        <>
            <div className='main-card-info'>
                <form className='update-create-form' onSubmit={e => FormHandle(e)} onReset={() => navigate(`/fishermen`)}>
                    <section className='form-section'>
                        <h1 className='form-section-title'>Основная информация по участнику клуба</h1>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className='form-input-name'>ФИО</label>
                            <input type="text" className="form-control" name="fullName"
                                placeholder="Введите имя" value={fullName} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className='form-input-name'>Возраст</label>
                            <input type="text" className="form-control" name="age"
                                placeholder="Введите возраст" value={age} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className='form-input-name'>Опыт</label>
                            <input type="text" className="form-control" name="experience"
                                placeholder="Введите опыт" value={experience} onChange={(e) => onInputChange(e)} />
                        </div>
                    </section>
                    <section className='form-section'>
                        <h1 className='form-section-title'>Предпочитаемые рыбы пользователя</h1>
                        <table id='fishermen' className='form-table'>
                            <tbody>
                                <tr>
                                    <td>№</td>
                                    <td>Наименование</td>
                                </tr>
                                {renderTableData()}
                            </tbody>
                        </table>
                    </section>
                    <section className='form-btn-section'>
                        <button type="submit" className="form-btn">Обновить</button>
                        <button type="reset" className="form-btn">Назад</button>
                    </section>
                </form>
            </div>
        </>
    )
}

export default FishermanCard