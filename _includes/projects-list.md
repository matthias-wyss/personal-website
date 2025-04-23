<ul class="projects-list">
  {% assign projects = site.projects | sort: 'rank' | reverse %}
  {% for project in projects limit: 3 %}
    <li class="project-item">
      <h2 class="project-title">
        <a href="{{ project.url }}">{{ project.title }}</a>
      </h2>
      {% if project.location %}
        <p class="project-location"><strong>📍</strong> {{ project.location }}</p>
      {% endif %}
      {% if project.prize %}
        <p class="project-prize"><strong>🏆</strong> {{ project.prize }}</p>
      {% endif %}
      {% if project.description %}
        <p class="project-description">{{ project.description }}</p>
      {% endif %}
      {% if project.repo %}
        <p class="project-repo"><a href="{{ project.repo }}" target="_blank">GitHub Repository</a></p>
      {% endif %}
      {% if project.demo %}
        <p class="project-demo"><a href="{{ project.demo }}" target="_blank">Demo</a></p>
      {% endif %}
      {% if project.report %}
        <p class="project-report"><a href="{{ project.report }}" target="_blank">Report</a></p>
      {% endif %}
      {% if project.link %}
        <p class="project-link"><a href="{{ project.link }}" target="_blank">Link</a></p>
      {% endif %}
    </li>
    <hr class="project-separator">
  {% endfor %}
</ul>

👉 See all my projects on the [Projects](/projects) page.

<style>
  .projects-list {
    list-style: none;
    padding: 0;
    margin-top: 30px;
  }

  .project-item {
    margin-bottom: 10px;
  }

  .project-title {
    font-size: 1.25em;
    margin: 0 0 5px 0;
  }

  .project-title a {
    color: var(--text-color, #2c3e50);
    text-decoration: none;
  }

  .project-title a:hover {
    text-decoration: underline;
  }

  .project-year,
  .project-description,
  .project-location,
  .project-prize,
  .project-repo,
  .project-report,
  .project-link,
  .project-demo {
    font-size: 0.95em;
    color: #555;
    margin: 3px 0;
  }

  .project-repo a,
  .project-demo a {
    color: #007acc;
    text-decoration: none;
  }

  .project-repo a:hover,
  .project-demo a:hover {
    text-decoration: underline;
  }

  .project-separator {
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
  }

  .view-all-projects {
    font-size: 1em;
    margin-top: 30px;
    text-align: center;
  }

  .view-all-projects a {
    color: #007acc;
    text-decoration: none;
  }

  .view-all-projects a:hover {
    text-decoration: underline;
  }
</style>
