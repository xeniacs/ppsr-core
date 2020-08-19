import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Project</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Describes the purpose for the research, who is coordinating it, and other contextual information about the project
      </>
    ),
  },
  {
    title: <>Data Set</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Describes how observations are collected, how that data may be used, and other information on the data as a whole.
      </>
    ),
  },
  {
    title: <>Observation<i className="fas fa-map-marker"></i></>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Describes the struture of indivual observations including: location, date, observer, and attributes specific to the research.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Read the standard
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="padding-vert--lg">
        PPSR-Core is a set of global, transdisciplinary data and metadata standards describing for use in &nbsp;
        <strong>P</strong>ublic <strong>P</strong>articipation in <strong>S</strong>cientific <strong>R</strong>esearch <strong>(PPSR)</strong> projects.  
        These standards are united, supported, and underlined by a common framework illustrating how information is structured within the citizen science domain.
          </div>
        </div>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="container">
          <div className="padding-vert--lg">
          <h2><Link to={useBaseUrl('docs/about')}>About</Link></h2>
        PPSR-Core is maintained by the Citizen Science Assocation <Link to="https://www.citizenscience.org/">citizenscience.org</Link> working 
        group for <Link to="https://www.citizenscience.org/get-involved/working-groups/data-and-metadata-working-group/">Data & Metadata</Link>.
        Our international organization represents over 2k diffrent citizen science projects with over 1M volunteers. We welcome a diverse group of indivuals & orgnaizations! To help contribute to our standard, <Link to={useBaseUrl('docs/contribute')}>please read this guide.</Link></div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
