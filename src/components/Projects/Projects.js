import React from 'react';

import projects from '../../helpers/projects';
import ProjectItem from './ProjectItem';

import ScrollableAnchor from 'react-scrollable-anchor';
import { projectsRoute } from '../../helpers/routes';

import { Parallax } from 'react-parallax';
import projectsImage from '../../assets/img/projects.jpg';

import styles from './Projects.module.css';

export default function Projects() {
    

    return (
        <Parallax
        bgImage={projectsImage}
        bgImageAlt="world map"
        strength={500}
        >
            <ScrollableAnchor id={projectsRoute}>
                <section className={styles.Projects}>
                    <ul className={styles.list}>
                        {projects.map(({ image, title, description, webSiteLink, codeLink }) => <ProjectItem key={title} image={image} title={title} description={description} webSiteLink={webSiteLink} codeLink={codeLink} />)}
                    </ul>
                </section>
            </ScrollableAnchor>
        </Parallax>
    )
}