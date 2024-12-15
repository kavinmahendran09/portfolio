import React from 'react';

const Projects: React.FC = () => {
  const projectData = [
    {
      title: 'Acehive',
      repo: 'acehive',
      username: 'kavinmahendran09',
    },
    {
      title: 'Achieve Admin',
      repo: 'achieve-admin',
      username: 'kavinmahendran09',
    },
    {
      title: 'Weather Predictor',
      repo: 'weather-predictor',
      username: 'kavinmahendran09',
    },
    {
      title: 'See More',
      repo: 'kavinmahendran09',
      username: 'kavinmahendran09',
    },
  ];

  return (
    <section style={{ padding: '50px 20px', color: '#ffffff' }}>
      <div className="container">
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#ffffff',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Projects Showcase
        </h2>

        {/* Displaying 2 iframes per row */}
        <div className="row justify-content-center">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="col-md-6 mb-4 d-flex justify-content-center"
              style={{
                padding: '15px',
              }}
            >
              {/* Directly embedding the GitHub Stats Card iframe */}
              <iframe
                src={`https://gitmystat.vercel.app/repo?theme=&username=${project.username}&repo=${project.repo}`}
                width="100%"
                height="200"
                style={{
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
