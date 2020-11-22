import React from 'react';
import { Transition } from 'react-spring/renderprops';
import { bannerRoute } from '../../helpers/routes';
import Navigation from '../Navigation/Navigation';

import styles from './Title.module.css';

export default function Title ({scroll}) {
  return (
      <div className={scroll ? styles.TitleSectionScroll : styles.TitleSection}>
        {scroll ? (
              <>
                <Transition
                  items={["Portfolio"]}
                  key={"logo"}
                  trail={400}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                >
                  {item => props => <a href={`#${bannerRoute}`} className={styles.logo__link}><h1 style={props} className={styles.Logo}>{item}</h1></a>}
                </Transition>
                <Transition
                  items={[""]}
                  key={"menuBtn"}
                  trail={400}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                >
                  {item => props => <div style={props}> <Navigation /> </div>}
                </Transition>
              </>
            ) : (
              <>
                <Transition
                  items={["Viktor Batyhin"]}
                  key={"title"}
                  trail={500}
                  from={{ transform: 'translate3d(0, 50px, 0)', opacity: 0 }}
                  enter={{ transform: 'translate3d(0, 0px, 0)', opacity: 1 }}
                >
                  {item => props => <h1 style={props} className={styles.Title}>{item}</h1>}
                </Transition>
                <Transition
                  items={["Front-end Developer"]}
                  key={"subTitle"}
                  trail={800}
                  from={{ transform: 'translate3d(0, 50px, 0)', opacity: 0 }}
                  enter={{ transform: 'translate3d(0, 0px, 0)', opacity: 1 }}
                >
                  {item => props => <p style={props} className={styles.subTitle}>{item}</p>}
                </Transition>
              </>
            )}
      </div>
  );
};
