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
        preferencesFishes: []
    });

    const { fullName, age, experience, preferencesFishes } = fishermanData;

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

    function reloadComponent(){
        window.location.reload();
      }

    const onInputChange = e => {
        setFishermanData({ ...fishermanData, [e.target.name]: e.target.value })
    }

    const FormHandle = e => {
        e.preventDefault();
        console.log(fishermanData.preferencesFishes);
        fishermanData.preferencesFishes = tableToJson(document.getElementById('fishermen')) as [];
        console.log(fishermanData.preferencesFishes);
        updateDataToServer(fishermanData);
    }

    const updateDataToServer = (data) => {
        axios.put(`/fishermen/${requestParams.id}`, data);
    };

    const renderTableData = () => {
        if (fishermanData.preferencesFishes !== null) {
            return fishermanData.preferencesFishes?.map((fish, index) => {
                const { id, referenceName } = fish;
                return (
                    <tr key={index + 1} onClick={() => navigate(`/fishes/${id}`)}>
                        <td>{index + 1}</td>
                        <td>{id}</td>
                        <td>{referenceName}</td>
                    </tr>
                )
            })
        } else {
            return null;
        }
    }

    function tableToJson(table) {
        console.log(table);
        var data: any[] = [];
        var headers = ['id', 'referenceName'];
        for (var i = 0; i < table.rows.length; i++) {
            var tableRow = table.rows[i];
            console.log(tableRow);
            var rowData = {};
            for (var j = 1; j < tableRow.cells.length; j++) {
                console.log(tableRow.cells[j]);
                console.log(tableRow.cells[j].innerHTML);
                rowData[headers[j - 1]] = tableRow.cells[j].innerHTML;
            }
            data.push(rowData);
        }
        console.log(data);
        return data;
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
                            <th>
                                <td>№</td>
                                <td>Наименование</td>
                            </th>
                            <tbody>
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