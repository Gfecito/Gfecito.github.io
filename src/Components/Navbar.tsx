import React from 'react';


export interface Props {
    sections: string[],
}

class Navbar extends React.PureComponent<Props>{

    // Since I'll have less than 10 sections, I'll just cover 1 digit cases.
    toRoman(number: number): string {
        let roman_numeral: string = "";

        // Special cases.
        if (number >= 10) return "You have too many sections.";
        if (number === 4) return "IV";

        // General case
        if (number >= 5) { number -= 5; roman_numeral += "V"; }
        for (var i = 0; i < number; i++) {
            roman_numeral += "I";
        }
        return roman_numeral;
    }

    render() {
        const { sections } = this.props;
        var nav_elements = [];
        var element_count = 1;

        sections.forEach(section => {
            nav_elements.push(
                <a className="nav_element" href={"index.html#" + section}>{this.toRoman(element_count)}</a>
            );
            element_count++;
        });

        return (
            <nav id="nav">
                {nav_elements}
            </nav>
        )
    }
}

export default Navbar;