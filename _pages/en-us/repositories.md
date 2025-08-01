---
page_id: repositories
layout: page
permalink: /repositories/
title: Repositories
description: 
nav: true
nav_order: 4
---

## Harvard Dataverse

The replication code for my PhD empirical articles can be found on my [Harvard Dataverse profile](https://dataverse.harvard.edu/dataverse/mlabussiere).


{% if site.data.repositories.github_users %}

## GitHub 

All replication code for subsequent work can be found on my [GitHub profile](https://github.com/mlabussiere).

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>


{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

### GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
