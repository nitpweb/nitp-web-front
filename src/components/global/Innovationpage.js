import React, { useEffect, useState } from "react"
import axios from "axios"
import "./css/innovation.css"

const Innovationpage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        const url = `${process.env.GATSBY_API_URL}/api/innovation/all`
        axios
            .get(url)
            .then(res => setData([...res.data]))
            .catch(e => {
                console.log(e)
            })
    }
    const filtered = data.filter(function (el) {
        return el.image.length != 0
    })
    const link = k => {
        k = k.substr(0, k.length - 18)
        k = k.substr(32, k.length)
        return k
    }
    function Card(val) {
        const date = new Date(val.openDate)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const cdate = new Date(val.closeDate)
        const cday = cdate.getDate()
        const cmonth = cdate.getMonth() + 1
        const cyear = cdate.getFullYear()

        return (
            <div className="parentdiv">
                <div className="innonationcard row">
                    <div className="innonation-img-wrap">
                        <img
                            src={`https://drive.google.com/thumbnail?id=${link(
                                val.image[0].url
                            )}`}
                            alt="Hello"
                        ></img>
                    </div>
                    <div className="innovation-details">
                        <h2>{val.title}</h2>
                        <p>{val.description}</p>
                    </div>
                </div>
            </div>
        )
    }
    return <>{filtered.map(Card)}</>
}

export default Innovationpage
