import React from 'react';

import projects from '../../helpers/projects';
import ProjectItem from './ProjectItem';

import ScrollableAnchor from 'react-scrollable-anchor';
import { projectsRoute } from '../../helpers/routes';

import { Parallax } from 'react-parallax';
import projectsImageMobile from '../../assets/img/projects@0,5x.jpg';
import projectsImageTablet from '../../assets/img/projects@0,75x.jpg';
import projectsImageDesktop from '../../assets/img/projects.jpg';

import { useWindowSize, chooseWallpaperSize } from '../../helpers/window-size';

import styles from './Projects.module.css';

export default function Projects() {
    const [ width ] = useWindowSize();
    const bgWallpaper = chooseWallpaperSize(width, projectsImageMobile, projectsImageTablet, projectsImageDesktop)

    return (
        <Parallax
        bgImage={bgWallpaper}
        bgImageAlt="world map"
        strength={500}
        className={styles.projects__parallax}
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