import React from "react";

const BaitList = ({ baits, editBait, deleteBait }) => {
    return (
        <table className="table table-hover mt-3" align="center">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Техника ловли</th>
                </tr>
            </thead>
            {baits.map((bait, index) => {
                return (
                    <tbody key={bait.fishId}>
                        <tr>
                            <th scope="row">{index + 1} </th>
                            <td>{bait.baitName}</td>
                            <td>{bait.baitType}</td>
                            <td>{bait.baitTechnic}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => editBait(bait)}
                                >
                                    Обновить
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteBait(bait.baitId)}
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

export default BaitList;