import React from "react";

interface Props {
    languages: string[],
    icon: string,
    nav: any,
}

class Header extends React.PureComponent<Props>{
    render() {
        const { icon, languages, nav } = this.props;
        var header_segments = [];
        languages.forEach(language => {
            header_segments.push(
                <a href="index.html">{language}</a>
            );
        });
        return (
            <header>
                <img src={icon} alt="planetEarth" />
                <span id="dropdown_header">Sections</span>
                <div id="dropdown_header_content">
                    {nav}
                </div>
                {header_segments}
            </header>
        );
    }
}

export default Header;