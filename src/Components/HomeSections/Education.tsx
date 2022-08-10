import React from "react";

interface Props {
    images: string,
    shorthands: string[],
    titles: string[],
    degrees: string[],
    times_and_places: string[],
    descriptions: string[][],
    classes: string[],
}

class Education extends React.PureComponent<Props>{
    render() {
        const { images, shorthands, titles, degrees, times_and_places, descriptions, classes } = this.props;
        var cards = [];
        var classes_taken = [];

        for (let i = 0; i < degrees.length; i++) {
            const img = images[i];
            const short = shorthands[i];
            const title = titles[i];
            const degree = degrees[i];
            const context = times_and_places[i];
            const description = descriptions[i].map(descriptor => <p key={"school-descriptor-"+short+descriptor.substr(0,3)}>{descriptor}</p>);

            cards.push(
                <div className="card" key={short}>
                    <img className="school-img" src={img} alt={short} />
                    <div className="container">
                        <h2>{title}</h2>
                        <h3>{degree}</h3>
                        <h4>{context}</h4>
                        <div className="school-description">{description}</div>
                    </div>
                </div>
            )
        };

        classes.forEach(class_taken => {
            classes_taken.push(
                <li key={class_taken}>{class_taken}</li>
            );
        })

        return (
            <section id="education" >
                <h1>Brain buildings:</h1>
                <div className="schools">
                    {cards}
                </div>
                <div className="class-listing">
                    <h2>
                        Classes taken (university):
                </h2>
                    <ul>
                        {classes_taken}
                    </ul>
                </div>
            </section>
        );
    }
}

export default Education;