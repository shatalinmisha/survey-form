
document.getElementById("rating").addEventListener("input", function() {
    document.getElementById("rating-value").textContent = this.value;
});

document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let gender = document.querySelector("input[name='gender']:checked");
    let rating = document.getElementById("rating").value;
    let interests = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
        .map(el => el.value);
    let comments = document.getElementById("comments").value.trim();

    // Валидация
    document.getElementById("name-error").classList.toggle("hidden", name !== "");
    document.getElementById("email-error").classList.toggle("hidden", email.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i));

    if (!name || !email.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)) {
        return;
    }
    
    // Вывод данных
    let resultHTML = `
        <h3 class='text-lg font-bold'>Результаты:</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Пол:</strong> ${gender ? gender.value : "Не указан"}</p>
        <p><strong>Оценка сервиса:</strong> ${rating}</p>
        <p><strong>Интересы:</strong> ${interests.length > 0 ? interests.join(", ") : "Не выбрано"}</p>
        <p><strong>Комментарии:</strong> ${comments || "Нет"}</p>
    `;
    
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultHTML;
    resultDiv.classList.remove("hidden");
});