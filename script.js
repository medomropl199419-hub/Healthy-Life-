const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "ar";

// Change Language
languageBtn.addEventListener("click", function () {

    const elements = document.querySelectorAll("[data-ar]");

    if (currentLanguage === "ar") {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        document.body.dir = "ltr";

        elements.forEach(function (element) {
            element.textContent = element.dataset.en;
        });

        languageBtn.textContent = "العربية";

    } else {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        document.body.dir = "rtl";

        elements.forEach(function (element) {
            element.textContent = element.dataset.ar;
        });

        languageBtn.textContent = "English";
    }
});

// BMI Calculator
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    const weight = Number(document.getElementById("weight").value);

    const height = Number(document.getElementById("height").value);

    const result = document.getElementById("result");

    if (
        !Number.isFinite(weight) ||
        !Number.isFinite(height) ||
        weight <= 0 ||
        height <= 0 ||
        weight > 500 ||
        height < 50 ||
        height > 250
    ) {
        result.textContent =
            currentLanguage === "ar"
            ? "من فضلك أدخل وزنًا وطولًا صحيحين."
            : "Please enter valid weight and height.";

        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    let category = "";

    if (bmi < 18.5) {
        category = currentLanguage === "ar"
            ? "أقل من نطاق الوزن المرجعي"
            : "Below the reference range";
    } else if (bmi < 25) {
        category = currentLanguage === "ar"
            ? "ضمن نطاق الوزن المرجعي"
            : "Within the reference range";
    } else if (bmi < 30) {
        category = currentLanguage === "ar"
            ? "أعلى من نطاق الوزن المرجعي"
            : "Above the reference range";
    } else {
        category = currentLanguage === "ar"
            ? "ضمن نطاق السمنة وفق تصنيف BMI"
            : "Within the obesity BMI category";
    }

    result.textContent =
        (currentLanguage === "ar" ? "مؤشر BMI: " : "BMI: ") +
        bmi.toFixed(1) + " - " + category;

});
