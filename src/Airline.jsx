import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Card from "./Card";

export default function AirLines() {
    const url = "https://kayak.com/h/mobileapis/directory/airlines/homework";
    const allianceCode = { ST: "Sky Team", OW: "OneWorld", SA: "Star Alliance" };
    const { isLoading, error, data } = useFetch(url);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        ST: false,
        OW: false,
        SA: false
    });

    useEffect(() => {
        let filter = [];
        for (let i in selectedFilters) {
            if (selectedFilters[i] === true) {
                filter.push(i);
            }
        }
        setFilteredData(data.filter((d) => filter.includes(d.alliance)));
    }, [selectedFilters, data]);

    return (
        <div>
            <form className="filter">
                {Object.entries(selectedFilters).map((item) => (
                    <label className="label" key={`labelId_${item[0]}`}>
                        <input
                            type="checkbox"
                            id={item[0]}
                            name={allianceCode[item[0]]}
                            className="checkBox"
                            checked={item[1]}
                            onChange={() =>
                                setSelectedFilters({ ...selectedFilters, [item[0]]: !item[1] })
                            }
                        />
                        {allianceCode[item[0]]}
                    </label>
                ))}
            </form>

            <div>
                {isLoading ? (
                    <p className="message">{"Loading ..."}</p>
                ) : error ? (
                    <p className="message">{"Error: " + error}</p>
                ) : (
                    <div className="card-container">
                        {filteredData.length > 1
                            ? filteredData.map((item) => (
                                <Card
                                    data={item}
                                    allianceCode={allianceCode}
                                    key={`cardId_${item.code}`}
                                />
                            ))
                            : data.map((item) => (
                                <Card
                                    data={item}
                                    allianceCode={allianceCode}
                                    key={`cardId_${item.code}`}
                                />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}
