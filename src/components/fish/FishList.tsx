import React from "react";

const FishList = ({ fishes, editFish, deleteFish }) => {
    return (
        <table className="table table-hover mt-3" align="center">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Средний вес</th>
                    <th scope="col">Дата начала сезона</th>
                    <th scope="col">Дата окончания сезона</th>
                </tr>
            </thead>
            {fishes.map((fish, index) => {
                return (
                    <tbody key={fish.fishId}>
                        <tr>
                            <th scope="row">{index + 1} </th>
                            <td>{fish.fishName}</td>
                            <td>{fish.avgWeight}</td>
                            <td>{fish.startDateOfProhibition}</td>
                            <td>{fish.endDateOfProhibition}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => editFish(fish)}
                                >
                                    Обновить
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteFish(fish.fishId)}
                                >
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
}

export default FishList;