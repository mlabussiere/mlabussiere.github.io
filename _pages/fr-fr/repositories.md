---
page_id: repositories
layout: page
permalink: /repositories/
title: Code
description: 
nav: true
nav_order: 4
---

## Harvard Dataverse

Le code utilisé pour les articles issus de mon doctorat est disponible sur mon [profil Harvard Dataverse](https://dataverse.harvard.edu/dataverse/mlabussiere).


{% if site.data.repositories.github_users %}

## GitHub 

Pour tous les articles ultérieurs, le code est disponible sur mon [profil GitHub](https://github.com/mlabussiere).

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

