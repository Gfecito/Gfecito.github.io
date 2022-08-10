import React from "react";

interface Props {
    titles: string[],
    descriptions: string[],
    images: string[],
}

class Experience extends React.PureComponent<Props>{

    // Remove the data-aos if not using AOS on App root.
    render() {
        const { images, titles, descriptions } = this.props;
        var experiences = [];
        for (let i = 0; i < titles.length; i++) {
            experiences.push(
                <div className="job" key={titles[i]}> 
                    <img src={images[i]} alt="jobImage1" />
                    <div className="job_description">
                        <h3>{titles[i]}</h3>
                        <p>{descriptions[i]}</p>
                    </div>
                </div>
            );
        };

        return (
            <section id="experience">
                <h1>public void Experience job(Time time){'{'}</h1>
                <div id="jobs">
                    {experiences}
                </div>
                <h1>{"}"}</h1>
            </section>
        );
    }
}

export default Experience;