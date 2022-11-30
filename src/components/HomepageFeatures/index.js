import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [{
  title: 'Unlicense',
  Svg: require('@site/static/img/unlicense.svg').default,
  description: (
    <>
      C++Docs was meant to be free from all copyright. Cut, copy, and paste to your heart's content.
    </>
  ),
},
{
  title: 'Powered by Markdown',
  Svg: require('@site/static/img/markdown.svg').default,
  description: (
    <>
	  Markdown is a future proof open standard used by GitHub, Obsidian, and Reddit.<br>
	  Editing and contributing is a piece of cake, and you can uses the source code where you want, not just in Docusaurus.
    </>
  ),
},
{
  title: 'Built with Docusaurus',
  Svg: require('@site/static/img/logo.svg').default,
  description: (
    <>
      C++Docs is built on markdown, and served to you with Docusaurus.
    </>
  ),
},
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
