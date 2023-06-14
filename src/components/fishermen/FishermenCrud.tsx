import { useState } from "react";
import axios from "axios";
import FishermenList from "./FishermenList";
import { Multiselect } from "multiselect-react-dropdown";
import fileDownload from 'js-file-download'


const FishermenCrud = ({ load, fishermens, fishes }) => {
    /* state definition  */
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState<number>(0)
    const [experience, setExperience] = useState<number>(0);
    const [preferencesFishes, setPreferencesFishes] = useState(null);


    /* being handlers */
    async function save(event) {
        const regexp = /[^А-Яа-я]+/g;
        event.preventDefault();
        if (checkValidFields(fullName, age, experience)) {
            await axios.post("/fishermen", {
                fullName: fullName,
                age: age,
                experience: experience,
                preferencesFishes: preferencesFishes,
            });
            alert("Fishermen Record Saved");
            // reset state
            setId("");
            setFullName("");
            setAge(0);
            setExperience(0);
            setPreferencesFishes(null);
            load();
        }
    }
    async function editFishermen(fishermens) {
        setFullName(fishermens.fishermenFullName);
        setAge(fishermens.age);
        setExperience(fishermens.experience);
        setId(fishermens.fishermenId);
    }

    async function deleteEmployee(id) {
        await axios.delete("/fishermen/" + id);
        alert("Fishermen Details Deleted Successfully");
        load();
    }

    async function update(event) {
        event.preventDefault();
        if (!id) return alert("Publisher Details No Found");
        if (checkValidFields(fullName, age, experience)) {
            await axios.put("/fishermen/" + id, {
                id: id,
                fullName: fullName,
                age: age,
                experience: experience,
                preferencesFishes: preferencesFishes,
            });
            alert("Fishermen Details Updated");
            // reset state
            setId("");
            setFullName("");
            setAge(0);
            setExperience(0);
            setPreferencesFishes(null);
            load();
        }
    }

    async function download() {
        await axios.get("/fishermen/report", {
            responseType: 'blob',
        })
            .then(response => {
                fileDownload(response.data, `Report.xlsx`);
            });
    }

    function checkValidFields(fullName, age, experience): boolean {
        const regexp = /[^А-Яа-я]+/g;
        if (regexp.test(fullName) || fullName === '') {
            alert("Name is not correct");
        } else if (age < 14 || age > 150) {
            alert("Age is not correct");
        } else if (experience > 150) {
            alert("Experience is not correct");
        } else {
            return true;
        }
        return false;
    }

    /* end handlers */
    const onSelect = (selectedList, selectedItem) => {
        setPreferencesFishes(selectedList);
        let value = "";
        selectedList.forEach(element => {
            value = value == "" ? element.referenceName : value + "," + element.referenceName;
        });
    }
    const onRemove = (selectedList, removedItem) => {
        setPreferencesFishes(selectedList);
        let value = "";
        selectedList.forEach(element => {
            value = value == "" ? element.referenceName : value + "," + element.referenceName;
        });
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
                    <label>Имя</label>
                    <input
                        type="text"
                        className="form-control"
                        maxLength={30}
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Возраст</label>
                    <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="150"
                        value={age}
                        onChange={e => setAge(+e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Предпочитаемые рыбы</label>
                    <Multiselect placeholder="Выберите предпочитаемых рыб" options={fishes}
                        displayValue="referenceName"
                        onSelect={onSelect}
                        onRemove={onRemove}
                    />
                </div>

                <div className="row">
                    <div className="col-4">
                        <label>Опыт</label>
                        <input
                            type="number"
                            className="form-control"
                            value={experience}
                            min="0"
                            max="150"
                            placeholder="Published Post(s)"
                            onChange={e => setExperience(+e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button className="btn btn-primary m-4" onClick={save}  >
                        Создать
                    </button>
                    <button className="btn btn-warning m-4" onClick={update}>
                        Обновить
                    </button>
                </div>
            </form>
            <button className="btn btn-primary m-4" onClick={download}>
                Загрузить отчет
            </button>
            <FishermenList
                fishermens={fishermens}
                editFishermen={editFishermen}
                deleteFishermen={deleteEmployee}
            />
        </div>
    );
};

export default FishermenCrud;