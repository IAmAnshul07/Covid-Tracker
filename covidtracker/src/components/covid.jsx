import React, { useEffect } from 'react'
import '../components/covid.css';


const Covid = () => {

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0])
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        // getCovidData();
    }, [])
    return (
        <>
            <h1 className='mainHeading'>🔴LIVE COVID TRACKER</h1>
            <div className="container">
            <section>
                <div className="card">
                    <div className="cardHeading">
                        <div className="cardDetails">
                            <p className="cardName"><span className='spanStyling'>OUR</span>COUNTRY</p>
                            <p className="cardTotal">INDIA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="card">
                    <div className="cardHeading">
                        <div className="cardDetails">
                            <p className="cardName"><span className='spanStyling'>Total </span>RECOVERED</p>
                            <p className="cardTotal">INDIA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="card">
                    <div className="cardHeading">
                        <div className="cardDetails">
                            <p className="cardName"><span className='spanStyling'>Total </span>CONFIRMED</p>
                            <p className="cardTotal">INDIA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="card">
                    <div className="cardHeading">
                        <div className="cardDetails">
                            <p className="cardName"><span className='spanStyling'>Total </span>DEATH</p>
                            <p className="cardTotal">INDIA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="card">
                    <div className="cardHeading">
                        <div className="cardDetails">
                            <p className="cardName"><span className='spanStyling'>Total </span>ACTIVE</p>
                            <p className="cardTotal">INDIA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="card">
                    <div className="cardHeading">
                        <div className="cardDetails">
                            <p className="cardName"><span className='spanStyling'>Last </span>UPDATED</p>
                            <p className="cardTotal">INDIA</p>
                        </div>
                    </div>
                </div>
            </section>

            </div>
        </>
    )
}

export default Covid