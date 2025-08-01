
const currentUrl = window.location.href;
const siteUrl = "https://mlabussiere.github.io"; 
let updatedUrl = currentUrl.replace("https://mlabussiere.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr-fr".length > 0) {
  updatedUrl = updatedUrl.replace("/fr-fr", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-à-propos",
    title: "À propos",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/fr-fr/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/projects/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/cv/";
          },
        },{id: "nav-enseignements",
          title: "Enseignements",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/blog/";
          },
        },{id: "post-will-working-at-mcdonald-39-s-develop-your-skills-career-project",
        
          title: 'Will working at McDonald&#39;s “develop your skills”? - Career Project <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Blog post discussing the notion of low-skilled or unskilled jobs in the fast-food industry.",
        section: "articles",
        handler: () => {
          
            window.open("https://careerproject.eu/2024/03/will-working-at-mcdonalds-develop-your-skills/", "_blank");
          
        },
      },{id: "post-is-there-a-pilot-on-board-technology-and-the-labour-market-career-project",
        
          title: 'Is there a pilot on board? Technology and the labour market - Career... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Blog post about the effect of automation on the content of jobs.",
        section: "articles",
        handler: () => {
          
            window.open("https://careerproject.eu/2022/09/is-there-a-pilot-on-board-technology-and-the-labour-market/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/fr-fr/books/fr-fr/the_godfather/";
            },},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "actualités",},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "actualités",handler: () => {
              window.location.href = "/fr-fr/news/fr-fr/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "actualités",},{id: "projects-citoyenneté-et-trajectoires-scolaires-des-enfants-d-39-immigrés",
          title: 'Citoyenneté et trajectoires scolaires des enfants d&amp;#39;immigrés',
          description: "",
          section: "projets",handler: () => {
              window.location.href = "/fr-fr/projects/fr-fr/1_project/";
            },},{id: "projects-l-39-évolution-des-compétences-professionnelles",
          title: 'L&amp;#39;évolution des compétences professionnelles',
          description: "",
          section: "projets",handler: () => {
              window.location.href = "/fr-fr/projects/fr-fr/2_project/";
            },},{id: "projects-les-compétences-d-39-ia-au-travail",
          title: 'Les compétences d&amp;#39;IA au travail',
          description: "",
          section: "projets",handler: () => {
              window.location.href = "/fr-fr/projects/fr-fr/3_project/";
            },},{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%6D.%6C%61%62%75%73%73%69%65%72%65@%75%76%61.%6E%6C", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4115-7883", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3yoTbEUAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://github.com/mlabussiere", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.linkedin.com/in/marie-labussiere-", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://bsky.app/profile/labussieremarie.bsky.social", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
