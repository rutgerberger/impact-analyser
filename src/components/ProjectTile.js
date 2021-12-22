import React from 'react'

const ProjectTile = ({ name, id, mainContributor, totalHours, contributors }) => {
    return (
      <div>
        <div className="left-tile">
          <ul>
          <li>
          Name:
          </li>
          <li>
          ID:
          </li>
          <li>
          Main Contributor:
          </li>
          <li>
          Expected Hours of Work:
          </li>
          <li>
          No. of contributors:
          </li>
          </ul>
        </div>
        <div className="project-tile">
          <ul>
          <li className="project-tile-title">
          {name}
          </li>
          <li>
          {id}
          </li>
          <li>
          {mainContributor}
          </li>
          <li>
          {totalHours}
          </li>
          <li>
          {contributors}
          </li>
          </ul>
        </div>
      </div>
    )
  }

export default ProjectTile