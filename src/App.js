import './App.css';
import React from 'react';

import content from "./content.json"

// Components
//import Navbar from "./Components/Navbar.tsx"
//import Header from "./Components/Header.tsx"
import Education from "./Components/HomeSections/Education.tsx"
import Experience from "./Components/HomeSections/Experience.tsx"
import Introduction from "./Components/HomeSections/Introduction.tsx"
import Tabs from "./Components/Tabs.tsx"
import Awards from './Components/HomeSections/Awards.tsx';


function App() {
  /* ------ Content ------- */
  // Nav
  /* = content.nav;
  const sections = nav.sections;
  const languages = nav.languages;
  const icon = nav.icon;*/

  // Intro
  const intro = content.introduction;
  const intro_hooks = intro.one_liners;
  const intro_text = intro.paragraphs;
  const books = intro.book_covers;

  // Schools
  const school = content.school;
  const school_images = school.images;
  const school_titles = school.titles;
  const school_descriptions = school.descriptions;
  const degrees = school.degrees;
  const time_n_places = school.details;
  const shorthands = school.abreviations;
  const classes = school.classes;

  // Experience
  const work = content.work;
  const work_titles = work.titles;
  const work_images = work.images;
  const work_descriptions = work.descriptions;

  // Projects
  const projects = content.projects;
  const projects_titles = projects.titles;
  const projects_descriptions = projects.descriptions;
  const projects_images = projects.images;

  // Interests
  const interests = content.interests;
  const interests_titles = interests.titles;
  const interests_descriptions = interests.descriptions;
  const interests_images = interests.images;

  // Awards
  const awards = content.awards;
  const award_titles = awards.titles;
  const award_descriptions = awards.descriptions;
  const award_dates = awards.dates;
  const award_trophee = awards.trophee;

  /* ------ Form ------- */
  return (
    <div className="App">
      <main>
        <Introduction one_liners={intro_hooks} expansions={intro_text} books={books} />
        <Education images={school_images} shorthands={shorthands} titles={school_titles}
          degrees={degrees} times_and_places={time_n_places} descriptions={school_descriptions} 
          classes={classes} />
        <Experience titles={work_titles} images={work_images} descriptions={work_descriptions} />
        <Tabs big_title={"let Projects ="}  titles={projects_titles} descriptions={projects_descriptions}
          illustrations={projects_images} prefix={"projects"} />
      <Tabs big_title={"in Interests"} titles={interests_titles} descriptions={interests_descriptions}
          illustrations={interests_images} prefix={"interests"} />
        <Awards titles={award_titles} dates={award_dates} descriptions={award_descriptions} trophee={award_trophee}/>
      </main>
    </div>
  );
}

export default App;