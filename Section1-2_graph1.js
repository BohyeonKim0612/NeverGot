function toggleDetails(index) {
    let detailsList = document.querySelectorAll(".details");
    let barSections = document.querySelectorAll(".bar-section");

    detailsList.forEach((detail, i) => {
        if (i === index) {
            if (detail.classList.contains("active")) {
                detail.classList.remove("active");
                barSections[i].classList.remove("expanded");
            } else {
                // 모든 상세 정보 닫기
                detailsList.forEach((d, j) => {
                    d.classList.remove("active");
                    d.style.backgroundColor = ""; // 모든 배경색 초기화
                    barSections[j].classList.remove("expanded");
                });

                let bgColor = window.getComputedStyle(barSections[i]).backgroundColor;
                detail.classList.add("active");
                detail.style.backgroundColor = bgColor; // 클릭한 막대의 색상 적용
                barSections[i].classList.add("expanded");
            }
        }
    });
}
