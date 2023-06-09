import React from "react";

const FishermenList = ({ fishermens, editFishermen, deleteFishermen }) => {
    return (
        <table className="table table-hover mt-3" align="center">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Возраст</th>
                    <th scope="col">Опыт</th>
                    <th scope="col">Действие</th>
                </tr>
            </thead>
            {fishermens.map((fishermen, index) => {
                return (
                    <tbody key={fishermen.fishermenId}>
                        <tr>
                            <th scope="row">{index + 1} </th>
                            <td>{fishermen.fishermenFullName}</td>
                            <td>{fishermen.age}</td>
                            <td>{fishermen.experience}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => editFishermen(fishermen)}
                                >
                                    Обновить
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteFishermen(fishermen.fishermenId)}
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

export default FishermenList;