import { useState } from "react";
import axios from "axios";
import FishList from "./FishList";
import { Multiselect } from "multiselect-react-dropdown";

const FishCrud = ({ load, fishes}) => {
    /* state definition  */
    const [id, setId] = useState("");
    const [fishName, setFishName] = useState("");
    const [avgWeight, setAvgWeight] = useState<number>(0)
    const [startDateOfProhibition, setStartDate] = useState("");
    const [endDateOfProhibition, setEndDaste] = useState("");

    /* being handlers */
    async function save(event) {
        event.preventDefault();
        await axios.post("/fishes", {
            fishName: fishName,
            avgWeight: avgWeight,
            startDateOfProhibition: startDateOfProhibition,
            endDateOfProhibition: endDateOfProhibition,
        });
        // reset state
        setId("");
        setFishName("");
        setAvgWeight(0);
        setStartDate("");
        setEndDaste("");
        load();
    }
    async function editFishermen(fishes) {
        setFishName(fishes.fishName);
        setAvgWeight(fishes.avgWeight);
        setStartDate(fishes.startDateOfProhibition);
        setEndDaste(fishes.endDateOfProhibition);
        setId(fishes.fishId);
    }

    async function deleteEmployee(id) {
        await axios.delete("/fish/" + id);
        load();
    }

    async function update(event) {
        event.preventDefault();
        if (!id) return alert("Publisher Details No Found");
        await axios.put("/fish/" + id, {
            id: id,
            fishName: fishName,
            avgWeight: avgWeight,
            startDateOfProhibition: startDateOfProhibition,
            endDateOfProhibition: endDateOfProhibition,
        });
        alert("Fishermen Details Updated");
        // reset state
        setId("");
        setFishName("");
        setAvgWeight(0);
        setStartDate("");
        setEndDaste("");
        load();
    }
    /* end handlers */
    // const onSelect = (selectedList, selectedItem) => {
    //     setPreferencesBaits(selectedList);
    //     let value = "";
    //     selectedList.forEach(element => {
    //         value = value == "" ? element.referenceName : value + "," + element.referenceName;
    //     });
    // }
    // const onRemove = (selectedList, removedItem) => {
    //     setPreferencesBaits(selectedList);
    //     let value = "";
    //     selectedList.forEach(element => {
    //         value = value == "" ? element.referenceName : value + "," + element.referenceName;
    //     });
    // }

    /* jsx */
    return (
        <div className="container mt-4">
            <form>
                <div className="form-group my-2">
                    <input
                        type="text"
                        className="form-control"
                        hidden
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <label>Наименование</label>
                    <input
                        type="text"
                        className="form-control"
                        value={fishName}
                        onChange={e => setFishName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Средний вес</label>
                    <input
                        type="number"
                        step="0.1"
                        className="form-control"
                        value={avgWeight}
                        onChange={e => setAvgWeight(+e.target.value)}
                    />
                </div>

                {/* <div className="form-group mb-2">
                    <label>Наживки</label>
                    <Multiselect placeholder="Выберите наживки" options={baits}
                        displayValue="referenceName"
                        onSelect={onSelect}
                        onRemove={onRemove} />
                </div> */}

                <div className="row">
                    <div className="col-4">
                        <label>Дата начала сезона</label>
                        <input
                            type="text"
                            className="form-control"
                            value={startDateOfProhibition}
                            onChange={e => setStartDate(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-4">
                        <label>Дата окончания сезона</label>
                        <input
                            type="text"
                            className="form-control"
                            value={endDateOfProhibition}
                            onChange={e => setEndDaste(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button className="btn btn-primary m-4" onClick={save}>
                        Создать
                    </button>
                    <button className="btn btn-warning m-4" onClick={update}>
                        Обновить
                    </button>
                </div>
            </form>
            <FishList
                fishes={fishes}
                editFish={editFishermen}
                deleteFish={deleteEmployee}
            />
        </div>
    );
};

export default FishCrud;