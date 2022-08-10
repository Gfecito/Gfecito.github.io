import React from "react";

interface Props {
    dates: string[],
    titles: string[],
    descriptions: string[][],
    trophee: string
}


class Awards extends React.PureComponent<Props>{
    render() {
        const { dates, titles, descriptions, trophee } = this.props;
        const awards = [];
        for (let i = 0; i < titles.length; i++) {
            awards.push(
                <div className="card award" key={"award-"+i}>
                    <img className="trophee" src={trophee} alt="trophee" />
                    <div className="container">
                        <h2>{titles[i]}</h2>
                        <h3>{dates[i]}</h3>
                        <p>{descriptions[i]}</p>
                    </div>
                </div>
            )
        }

        return (
            <section id="accolades">
                <h1>Pretty medals!</h1>
                <div id="awards">
                    {awards}
                </div>
            </section>
        );
    }
}


export default Awards