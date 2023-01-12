import React from 'react';

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project references
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {' '}
          React Front To Back udemy course
        </a>{' '}
        and was created by
        <strong>
          <a href="https://tepnology.com"> Tepnology LLC</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        LinkedIn Profile of our #1 Dev:
        <a
          className="text-white"
          href="https://www.linkedin.com/in/patrick-tep"
        >
          {' '}
          Patrick Tep
        </a>
      </p>
    </>
  );
}

export default About;
