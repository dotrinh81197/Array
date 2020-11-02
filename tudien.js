let Vietnamese = [
    "Gió",
    "trời nắng",
    "Mưa",
    "Bão",
    "Mây",
    "Tuyết",
    " Cầu vồng",
];
let English = ["wind", "sunny", "rain", "storm", "cloud", "snow", "rainbow"];

function find_dictionary() {
    let search = document.getElementById("search");
    let result = document.getElementById("result");
    let Vietnamese = [
        "Gió",
        "trời nắng",
        "Mưa",
        "Bão",
        "Mây",
        "Tuyết",
        "Cầu vồng",
    ];
    let English = ["wind", "sunny", "rain", "storm", "cloud", "snow", "rainbow"];

    for (i = 0; i < Vietnamese.length; i++) {
        if (search.value === Vietnamese[i]) {
            result.innerHTML = English[i];
            return;
        } else {
            if (search.value == English[i]) {
                result.innerHTML = Vietnamese[i];
                return;
            } else result.innerHTML = "không có dữ liệu";
        }
    }
}