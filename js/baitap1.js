const products = ["Laptop", "Điện thoại", "Tai nghe", "Bàn phím", "Chuột"];

const productList = document.getElementById("productList");

function renderProducts(list) {
    productList.innerHTML = "";
    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.textContent = p;
        productList.appendChild(div);
    });
}

renderProducts(products);

document.getElementById("search").addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    const filtered = products.filter(p =>
        p.toLowerCase().includes(keyword)
    );

    document.getElementById("error").textContent =
        filtered.length === 0 ? "Không tìm thấy sản phẩm!" : "";

    renderProducts(filtered);
});