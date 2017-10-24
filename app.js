var app = new Vue({
  el: '#app',
  data: {
    firstName: "Tamara",
    lastName: "Bouhl",
    description: "Je suis étudiante en journalisme à l'EDJ de Sciences Po.",
    photo: "https://cdn-images-1.medium.com/fit/c/200/200/1*UlVgQJXMWO18Vu0Fgkg2Xw.png",
    twitter: "@TamaraBouhl",
    github: "TamaraBouhl",
    mail: "tamara.bouhl@sciencespo.fr",
    experiences: [{
      dateBegin: "août 2017",
      dateEnd: false,
      name: "Le Républicain Lorrain",
      title: "Stagiaire",
      logo: 'https://yt3.ggpht.com/-g_e80F0T9fs/AAAAAAAAAAI/AAAAAAAAAAA/1kPUdVbmj5U/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
      description: false
    }, {
      dateBegin: "décembre 2016",
      dateEnd: false,
      name: "ELLE Magazine",
      title: "Stagiaire",
      logo: 'http://www.elle.com/sites/elle/assets/images/apple-touch-icon.png',
      description: false
    }, {
      dateBegin: "juillet",
      dateEnd: "août 2016",
      name: "Le Républicain Lorrain",
      title: "Stagiaire",
      logo: 'https://yt3.ggpht.com/-g_e80F0T9fs/AAAAAAAAAAI/AAAAAAAAAAA/1kPUdVbmj5U/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
      description: false
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "2018",
      name: "Master Journalisme",
      university: "EDJ Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Paris"
    }],
    languages: ["Anglais", "Allemand", "Espagnol", "Coréen"],
    skills: ["Suite Adobe", "InDesign", "HTML débutant"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})