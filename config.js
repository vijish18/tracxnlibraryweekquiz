// Published participant form. Responses are stored by Google Forms in its linked private Sheet.
// answerFields and detailFields map this page's inputs to the Google Form's entry ids. On submit,
// the page posts them straight to the form, so participants never see the Google Form itself.
window.QUIZ_CONFIG = Object.freeze({
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScyDRD9x8-DO3EZpuhTmcJ0GvFgaBj5EmoxzjETlyfRW5yhRg/viewform",
  detailFields: Object.freeze({
    name: "entry.292649329",
    email: "entry.112996021",
    department: "entry.1672463290"
  }),
  answerFields: Object.freeze({
    1: "entry.1661502225",
    2: "entry.1037880773",
    3: "entry.815696003",
    4: "entry.649119376",
    5: "entry.1352652988",
    6: "entry.1188073210",
    7: "entry.632262017",
    8: "entry.865530791",
    9: "entry.1871275964",
    10: "entry.164966894"
  })
});
