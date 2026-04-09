Page({
  data: {
    step: 0,
    lang: "en", // 👈 dil
    result: "",
    advice: "",
    selectedSymptoms: []
  },

  // 🌍 dil değiştir
  setEnglish() {
    this.setData({ lang: "en" });
  },

  setChinese() {
    this.setData({ lang: "cn" });
  },

  nextYes() {
    let step = this.data.step;
    let list = this.data.selectedSymptoms;

    if (step === 0) {
      list.push("Dry_eyes");
    } else if (step === 1) {
      list.push("Night_blindness");
    }

    this.setData({
      selectedSymptoms: list,
      step: step + 1
    });
  },

  nextNo() {
    this.setData({
      step: this.data.step + 1
    });
  },

  analyze() {
    const symptoms = this.data.selectedSymptoms;
    const lang = this.data.lang;

    let result = "";
    let advice = "";

    if (
      symptoms.includes("Dry_eyes") &&
      symptoms.includes("Night_blindness")
    ) {
      if (lang === "cn") {
        result = "🧠 根据你的症状，你可能有严重的维生素A缺乏。";
        advice = "🥕 建议多吃胡萝卜、鸡蛋和牛奶。";
      } else {
        result = "🧠 Strong Vitamin A deficiency";
        advice = "🥕 Eat carrots, eggs, milk";
      }
    } else if (symptoms.includes("Dry_eyes")) {
      if (lang === "cn") {
        result = "🧠 你可能缺乏维生素A。";
        advice = "🥕 建议多吃胡萝卜和乳制品。";
      } else {
        result = "🧠 Possible Vitamin A deficiency";
        advice = "🥕 Eat carrots, dairy";
      }
    } else if (symptoms.includes("Night_blindness")) {
      if (lang === "cn") {
        result = "🧠 你可能缺乏维生素B。";
        advice = "🍗 建议多吃肉类和谷物。";
      } else {
        result = "🧠 Possible Vitamin B deficiency";
        advice = "🍗 Eat meat, grains";
      }
    }

    this.setData({ result, advice });
  },

  resetAll() {
    this.setData({
      step: 0,
      result: "",
      advice: "",
      selectedSymptoms: []
    });
  }
});