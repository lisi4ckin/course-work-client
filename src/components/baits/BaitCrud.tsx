import { useState } from "react";
import axios from "axios";
import BaitList from "./BaitList";
import { Multiselect } from "multiselect-react-dropdown";

const BaitCrud = ({ load, baits }) => {
    /* state definition  */
    const [id, setId] = useState("");
    const [baitName, setBaitName] = useState("");
    const [baitType, setBaitType] = useState("");
    const [baitTechnic, setBaitTechnic] = useState("");

    /* being handlers */
    async function save(event) {
        event.preventDefault();
        await axios.post("/baits", {
            baitName: baitName,
            baitType: baitType,
            baitTechnic: baitTechnic,
        });
        alert("Bait Record Saved");
        // reset state
        setId("");
        setBaitName("");
        setBaitType("");
        setBaitTechnic("");
        load();
    }
    async function editBaits(baits) {
        setBaitName(baits.baitName);
        setBaitType(baits.baitType);
        setBaitTechnic(baits.baitTechnic);
        setId(baits.baitId);
    }

    async function deleteBait(id) {
        await axios.delete("/baits/" + id);
        load();
    }

    async function update(event) {
        event.preventDefault();
        if (!id) return alert("Publisher Details No Found");
        await axios.put("/baits/" + id, {
            id: id,
            baitName: baitName,
            baitType: baitType,
            baitTechnic: baitTechnic,
        });
        alert("Fishermen Details Updated");
        // reset state
        setId("");
        setBaitName("");
        setBaitType("");
        setBaitTechnic("");
        load();
    }

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
                        value={baitName}
                        onChange={e => setBaitName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Тип</label>
                    <input
                        type="text"
                        className="form-control"
                        value={baitType}
                        onChange={e => setBaitType(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Техника ловли</label>
                    <input
                        type="text"
                        className="form-control"
                        value={baitTechnic}
                        onChange={e => setBaitTechnic(e.target.value)}
                    />
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
            <BaitList
                baits={baits}
                editBait={editBaits}
                deleteBait={deleteBait}
            />
        </div>
    );
};

export default BaitCrud;