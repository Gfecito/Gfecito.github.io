import React from "react";

interface Props {
    big_title: string,
    titles: string[],
    descriptions: string[][],
    illustrations: string[],
    prefix: string
}


// Put arrow on selected tab =)
class Tabs extends React.PureComponent<Props>{
    rendered_page_index = 0;

    openProject = (id: number) => {
        this.rendered_page_index = id;
        this.forceUpdate();
    }

    render() {
        const { big_title, titles, descriptions, illustrations, prefix } = this.props;
        const openProject = this.openProject.bind(this);
        let tabs = [];
        let pages = [];
        let rendered_page;

        // Dispatch abbreviation logic.
        const filter = (word: string) => { return (((word.charAt(0)) >= '0' && (word.charAt(0)) <= '9') || (word.length <= 5)); };
        const initialCapitalizer = (word: string) => { return (word.charAt(0).toUpperCase()) };
        const adaptPhraseAndJoin = (phrase: string, filter: (any) => boolean, newWord: (string) => string) => {
            return (phrase.split(" ").map(word =>
                (filter(word) ? word + " " : newWord(word))).join(""));
        };
        const firstThree = (word: string) => { return (initialCapitalizer(word) + word.substr(1, 2)) };

        // Make buttons with abbreviations
        for (let i = 0; i < titles.length; i++) {
            let words = titles[i].split(" ");
            let abbreviation;


            if (words.length == 1) abbreviation = words[0].substr(0, 14)
            if (words.length == 2) abbreviation = adaptPhraseAndJoin(titles[i], filter, firstThree)
            if (words.length > 2) abbreviation = adaptPhraseAndJoin(titles[i], filter, initialCapitalizer)
            tabs.push(
                <button className={prefix + "Tabs"} key={"tab-button-"+prefix+"-"+i} onClick={() => { openProject(i) }}>
                    {abbreviation}
                </button>
            );
        }


        for (let i = 0; i < titles.length; i++) {
            const key = prefix + titles + i;
            pages.push(
                <div id={key} key={key} className="tabContent">
                    <div className="tabDescriptor">
                        <h3>{titles[i]}</h3>
                        {descriptions[i].map(paragraph => <p key={"tab-descriptor-"+i+paragraph.substr(0,3)}>{paragraph}</p>)}
                    </div>
                    <div className="tabDisplay">
                        <img src={illustrations[i]} alt="Illustrative Image" />
                    </div>
                </div>
            );
        }

        rendered_page = pages[this.rendered_page_index];

        return (
            <section id={prefix}>
                <h1>{big_title}</h1>
                <div id={prefix + "Window"} className="tabs_and_content">
                    <div id={prefix + "Tabs"} className="tabs" style={{ gridTemplateRows: "repeat(" + titles.length + ",minmax(min-content,max-content))" }}>
                        {tabs}
                    </div>
                    <div id={prefix + "Content"} className="content">
                        {rendered_page}
                    </div>
                </div>
            </section>
        );
    }
}


export default Tabs