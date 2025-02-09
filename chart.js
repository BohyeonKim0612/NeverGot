// 차트를 생성할 캔버스 요소 가져오기
const ctx = document.getElementById('wastePieChart').getContext('2d');

// 데이터 설정
const data = {
  labels: [
    '생활계 폐기물',
    '사업장비배출시설계 폐기물',
    '사업장배출시설계 폐기물',
    '건설 폐기물',
    '지정 폐기물',
    '의료 폐기물'
  ],
  datasets: [{
    label: '쓰레기 분류 비중',
    data: [9, 3, 47, 37, 3, 0], // 비율 데이터
    backgroundColor: [
      '#ff6b6b', // 생활계 폐기물
      '#feca57', // 사업장비배출시설계 폐기물
      '#1dd1a1', // 사업장배출시설계 폐기물
      '#54a0ff', // 건설 폐기물
      '#5f27cd', // 지정 폐기물
      '#c8d6e5'  // 의료 폐기물
    ],
    hoverBackgroundColor: [
      '#ff5252',
      '#ff9f43',
      '#10ac84',
      '#2e86de',
      '#341f97',
      '#8395a7'
    ],
    borderWidth: 1,
    borderColor: '#fff'
  }]
};

// 옵션 설정
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // 범례 위치
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          // 비율 표시
          const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
          const percentage = (context.raw / total * 100).toFixed(1);
          return `${context.label}: ${percentage}%`;
        }
      }
    }
  }
};

// 차트 생성
const wastePieChart = new Chart(ctx, {
  type: 'pie', // 차트 유형
  data: data,
  options: options
});
