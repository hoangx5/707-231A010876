document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;

    const msg = document.getElementById("formMsg");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!emailRegex.test(email)) {
        msg.textContent = "Email không hợp lệ!";
        msg.style.color = "red";
        return;
    }

    if (!passRegex.test(password)) {
        msg.textContent = "Mật khẩu >=8 ký tự, có hoa, thường, số!";
        msg.style.color = "red";
        return;
    }

    if (!agree) {
        msg.textContent = "Phải đồng ý điều khoản!";
        msg.style.color = "red";
        return;
    }

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));

    msg.textContent = "Đăng ký thành công!";
    msg.style.color = "green";
});