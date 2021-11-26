const data = [
  {
    src: "Kim Mã",
    dst: "Nội Bài",
    road: "Kim Mã - Thụy Khuê - Cầu Nhật Tân - Võ Nguyên Giáp - Sân bay Nội bài",
    length: "32.5km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fkimma-noibai32.5.png?alt=media&token=f6fda665-534a-4eec-99ea-f6b0ed796b86",
  },

  {
    src: "Mỹ Đình",
    dst: "Nội Bài",
    road: "SVĐ Mỹ Đình - Cầu Thăng Long - Võ Văn Kiệt - SB Nội Bài",
    length: "27.05km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fmydinh-noibai27.05.png?alt=media&token=e044be58-3a98-49d8-96eb-e6a075671679",
  },

  {
    src: "Kim Mã",
    dst: "Yên Nghĩa",
    road: "Kim Mã - Láng Hạ - Ba La - BX Yên Nghĩa",
    length: "14.77km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fyennghia-kim14.77.png?alt=media&token=2495a067-fb04-43fd-9cee-90397c2d6431",
  },

  {
    src: "Gia Lâm",
    dst: "Nước Ngầm",
    road: "BX Gia Lâm - Long biên - Đại Cồ Việt - Đại học KTQD - BX Nước Ngầm",
    length: "14.5km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fgialam-nuocngam14.5.png?alt=media&token=d4676e24-26c7-4473-8c76-4764eb676606",
  },

  {
    src: "Gia Lâm",
    dst: "Giáp Bát",
    road: "Gia Lâm - Cầu Chương Dương - Long Biên - Công viên Thống Nhất - Giáp Bát",
    length: "13.9km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fgialam-giapbat13.9.png?alt=media&token=10bc8493-4471-474e-90e9-7b35c2298c19",
  },

  {
    src: "Mỹ Đình",
    dst: "Yên Nghĩa",
    road: "Mỹ đình - Tây Mỗ - Aeon mall Hà Đông - Tố Hữu - BX Yên Nghĩa",
    length: "18km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fmydinh-yennghia18.png?alt=media&token=7218832a-572c-4005-816d-8ca51037f99f",
  },

  {
    src: "Mỹ Đình",
    dst: "Nước Ngầm",
    road: "SVĐ Mỹ Đình - Trần Duy Hưng - Đường Láng - Giải Phóng - BX Nước Ngầm: ",
    length: "16.1km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fmydinh-nuocngam16.1.png?alt=media&token=5ed70e92-a148-44b1-8c56-139bcf4f54d1",
  },

  {
    src: "Gia Lâm",
    dst: "Nhổn",
    road: "Gia Lâm - Võ Nguyên Giáp - Cầu Nhật Tân - Đường Liên Mạc - Yên Nội - Nhổn",
    length: "25.0km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fgialam-nhon25.png?alt=media&token=831dbc46-b8c3-4254-ac2a-ec830c4ec1bd",
  },

  {
    src: "Hải Dương",
    dst: "Nước Ngầm",
    road: "BX Hải Dương - quốc lộ 5 - cầu Thanh Trì - Yên Sở - BX Nước Ngầm",
    length: "61.2km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fhaiduong-nuocngam61.2.png?alt=media&token=f0e073fd-59c7-4abc-83bd-f66453b6dc37",
  },

  {
    src: "Hải Dương",
    dst: "Yên Nghĩa",
    road: "BX Hải Dương - quốc lộ 5 - cầu Thanh Trì - Vành Đai 3 - Trần Phú (Hà Đông) - BX Yên Nghĩa",
    length: "80.2km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fhaiduong-yennghia80.2.png?alt=media&token=cf440290-a200-4c74-a762-6aa2d51fcb3c",
  },

  {
    src: "Hải Dương",
    dst: "Giáp Bát",
    road: "BX Hải Dương - quốc lộ 5 - cầu Thanh Trì - Yên Sở - BX Giáp Bát",
    length: "77.1km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fhaiduong-giapbat77.1.png?alt=media&token=0100f966-f8fe-411a-bc49-d245f9c2e830",
  },

  {
    src: "Hải Dương",
    dst: "Nội Bài",
    road: "Hãy chọn điểm đến là BX Giáp Bát, Yên Nghĩa hoặc Nước Ngầm rồi từ đó đi xe tuyến lên Nội Bài",
    length: "",
    img: "",
  },

  {
    src: "Hải Dương",
    dst: "Nhổn",
    road: "Hãy chọn điểm đến là BX Giáp Bát, Yên Nghĩa hoặc Nước Ngầm rồi từ đó đi xe tuyến lên Nhổn",
    length: "",
    img: "",
  },

  {
    src: "Hưng Yên",
    dst: "Nước Ngầm",
    road: "BX Hưng Yên - quốc lộ 5 - cầu Chương Dương - Vĩnh Tuy - Yên Sở - BX Nước Ngầm",
    length: "53.6km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fhungyen-nuocngam53.6.png?alt=media&token=17734590-8fa9-486d-aed8-80e636ea5332",
  },

  {
    src: "Hưng Yên",
    dst: "Yên Nghĩa",
    road: "BX Hưng Yên - quốc lộ 5 - cầu Chương Dương - Trường Chinh - Trần Phú (Hà Đông) - BX Yên Nghĩa",
    length: "65.7km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fhungyen-yennghia65.7.png?alt=media&token=ec5253b8-77f5-41f1-9c1a-e05306555dee",
  },

  {
    src: "Hưng Yên",
    dst: "Giáp Bát",
    road: "BX Hưng Yên - quốc lộ 5 - cầu Chương Dương - Vĩnh Tuy - Yên Sở - BX Giáp Bát",
    length: "54.1km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fhungyen-giapbat54.1.png?alt=media&token=b208943e-808f-4704-92f1-1cebfbc4f7c4",
  },

  {
    src: "Hưng Yên",
    dst: "Nội Bài",
    road: "Hãy chọn điểm đến là BX Giáp Bát, Yên Nghĩa hoặc Nước Ngầm rồi từ đó đi xe tuyến lên Nội Bài",
    length: "",
    img: "",
  },

  {
    src: "Hưng Yên",
    dst: "Nhổn",
    road: "Hãy chọn điểm đến là BX Giáp Bát, Yên Nghĩa hoặc Nước Ngầm rồi từ đó đi xe tuyến lên Nhổn",
    length: "",
    img: "",
  },

  {
    src: "Mỹ Đình",
    dst: "Nước Ngầm",
    road: "BX Mỹ Đình – Phạm Hùng – Nguyễn Trãi – KĐT Linh Đàm – Ngọc Hồi – BX Nước Ngầm",
    length: "14.1km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fmydinh-nuocngam14.1.png?alt=media&token=36841212-1b47-491f-a80a-a65659002972",
  },

  {
    src: "Gia Lâm",
    dst: "Nhổn",
    road: "Ga Gia Lâm – cầu Chương Dương – Đường Âu Cơ – Đường Liên Mạc – Nhổn",
    length: "22.6km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fgialam-nhon22.6.png?alt=media&token=4c7d9691-e1ae-4934-9b46-a25ac3887593",
  },

  {
    src: "Gia Lâm",
    dst: "Yên Nghĩa",
    road: "BX Gia Lâm – Trần Nhật Duật – Lê Duẩn -  Ô Chợ Dừa – Trần Phú (Hà Đông) – quốc lộ 6 – BX Yên Nghĩa",
    length: "21.8km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fgialam-yennghia21.8.png?alt=media&token=e89af79b-22f9-4473-a0f1-8042f2ec0b47",
  },

  {
    src: "Gia Lâm",
    dst: "Nội Bài",
    road: "Ga Gia Lâm - Trần Nhật Duật - Cầu Chương Dương – Quốc lộ 3 – Cổ Loa – Đông Anh – Quốc lộ 2 – Võ Nguyên Giáp - Sân bay Nội Bài",
    length: "",
    img: "",
  },

  {
    src: "Mỹ Đình",
    dst: "Giáp Bát",
    road: "SVĐ Mỹ Đình – Khuất Duy Tiến – Nguyên Trãi – Chùa Bộc – Phạm Ngọc Thạch – Giải Phóng – BX Giáp Bát",
    length: "14.6km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fmydinh-giapbat14.6.png?alt=media&token=03cee67c-10ef-4fad-b488-1d455e4a5621",
  },

  {
    src: "Sơn Tây",
    dst: "Yên Nghĩa",
    road: "Bến xe Sơn Tây - Quốc lộ 21A - Quốc lộ 21 - Hòa Lạc - Đại lộ Thăng Long - Đông La BX Yên Nghĩa",
    length: "46.1km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fsontay-yennghia46.2.png?alt=media&token=738b7d77-1549-4d72-8155-ff324efa723f",
  },

  {
    src: "Sơn Tây",
    dst: "Nhổn",
    road: "Bến xe Sơn Tây - Quôc lộ 32 - Cầu Diễn - Cầu Giấy - Nhổn",
    length: "27.4km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fsontay-nhon27.4.png?alt=media&token=4c02a5c4-a396-4d77-bacd-3b97f8bc87a0",
  },

  {
    src: "Sơn Tây",
    dst: "Nội Bài",
    road: "Bến xe Sơn Tây - Quốc lộ 32 - Đ. Tân Hội - Liên Mạc - cầu Thăng Long - Sân bay Nội Bài",
    length: "50.3km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fsontay-noibai50.3.png?alt=media&token=04948aca-94a2-4625-9b6d-57a119650ff8",
  },

  {
    src: "Sơn Tây",
    dst: "Giáp Bát",
    road: "Bến xe Sơn Tây - TT Phúc Thọ - Đường 419 - Đại lộ Thăng Long - Cầu Giấy - Trường Chinh - BX Giáp Bát",
    length: "47.2km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fsontay-giapbat47.2.png?alt=media&token=dd922693-8007-4f4a-b661-5e41841cdaf2",
  },

  {
    src: "Sơn Tây",
    dst: "Nước Ngầm",
    road: "Bến xe Sơn Tây - TT Phúc Thọ - Đường 419 - Đại lộ Thăng Long - Cầu Giấy - Trường Chinh - BX Nước Ngầm",
    length: "53.1km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fsontay-nuocngam53.1.png?alt=media&token=d5be55ab-7afc-406c-92fe-c6bc898251b6",
  },

  {
    src: "Kim Mã",
    dst: "Nhổn",
    road: "Kim Mã – Đào Tấn – Đường Bưởi – Cầu Giấy – HV Tài Chính - Nhổn",
    length: "",
    img: "",
  },

  {
    src: "Kim Mã",
    dst: "Giáp Bát",
    road: "Kim Mã – Nguyễn Thái Học – Đ. Lê Duẩn – Giải Phóng – BX Giáp Bát",
    length: "11.8km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fkimma-nhon11.8.png?alt=media&token=e1bccb4e-acbf-45f2-810b-f54f3699fd51",
  },

  {
    src: "Kim Mã",
    dst: "Nước Ngầm",
    road: "Kim Mã – Nguyễn Thái Học – Đ. Lê Duẩn – ĐH Kinh tế Quốc dân – BX Nước Ngầm",
    length: "9.5km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fkimma-nuocngam9.5.png?alt=media&token=9fe5f2ef-0c6b-426b-9625-858867bfb677",
  },

  {
    src: "Mỹ Đình",
    dst: "Nhổn",
    road: "Mỹ Đình – Phạm Hùng – Đ.Hồ Tùng Mậu – Cầu Diễn – Nhổn",
    length: "7.0km",
    img: "https://firebasestorage.googleapis.com/v0/b/netflix-92597.appspot.com/o/imageDSS%2Fmydinh-nhon7.0.png?alt=media&token=967c6614-688e-409c-9404-ea9d47779e16",
  },
];

let region = document.getElementById("region");
let source = document.getElementById("source");
let destination = document.getElementById("destination");
let regionValue, sourceValue, destinationValue, length, img;
let result = document.getElementById("result");

Array.from(source.children).forEach((element) => {
  console.log(element.innerText);
  element.hidden = true;
});

Array.from(destination.children).forEach((element) => {
  console.log(element.innerText);
  element.hidden = true;
});

region.addEventListener("change", () => {
  if (region.value === "Nội thành") {
    Array.from(source.children).forEach((element) => {
      element.hidden = true;
      if (element.classList.contains("urban")) {
        element.hidden = false;
      }
    });
  } else if (region.value === "Ngoại thành") {
    Array.from(source.children).forEach((element) => {
      element.hidden = true;
      if (element.classList.contains("suburban")) {
        element.hidden = false;
      }
    });
  } else {
    Array.from(source.children).forEach((element) => {
      element.hidden = true;
      if (element.classList.contains("other")) {
        element.hidden = false;
      }
    });
  }
});

source.addEventListener("change", () => {
  if (source.value !== "") {
    Array.from(destination.children).forEach((element) => {
      element.hidden = false;
    });
  }
});

let checkUrban = document.getElementById("check-urban");
let checkSuburban = document.getElementById("check-suburban");

checkSuburban.hidden = true;
checkUrban.hidden = true;

//TẦN SUẤT
let schoolAndHospital,
  traffic1,
  population,
  companyAndApartment,
  mall,
  market,
  station,
  traffic2,
  school,
  distance;

//tần suất nội thành
let schoolsAndHospitals = document.getElementsByName("sotruong");
let traffics1 = document.getElementsByName("giaothong");
let density = document.getElementsByName("matdo1");
let companiesAndApartments = document.getElementsByName("congty");
let mallsAndUrbanAreas = document.getElementsByName("tttm");
let markets = document.getElementsByName("cho");
let stations = document.getElementsByName("station");

//tần suất ngoại thành
let traffics2 = document.getElementsByName("matdo2");
let schools = document.getElementsByName("truonghoc");
let distanceToUrban = document.getElementsByName("cachnoithanh");

// function getValue(element1, element2) {
//   for (let i = 0; i < element1.length; ++i) {
//     if (element1[i].checked) {
//       element2 = element1[i].value;
//       console.log(element2);
//     }
//   }
// }

let search = document.getElementById("search");
let suggestion = document.getElementById("suggestion");

function submit() {
  regionValue = region.value;
  sourceValue = source.value;
  destinationValue = destination.value;
  if (regionValue === "Nội thành") {
    checkUrban.hidden = false;
  } else if (regionValue === "Ngoại thành") {
    checkSuburban.hidden = false;
  }
  console.log(regionValue, sourceValue, destinationValue);
  // search.hidden = true;

  // getValue(schoolsAndHospitals, schoolAndHospital);
  for (let i = 0; i < schoolsAndHospitals.length; ++i) {
    if (schoolsAndHospitals[i].checked) {
      schoolAndHospital = schoolsAndHospitals[i].value;
      // console.log(schoolAndHospital);
    }
  }

  // getValue(traffics1, traffic1);
  for (let i = 0; i < traffics1.length; ++i) {
    if (traffics1[i].checked) {
      traffic1 = traffics1[i].value;
    }
  }

  // getValue(density, population);
  for (let i = 0; i < density.length; ++i) {
    if (density[i].checked) {
      population = density[i].value;
    }
  }

  // getValue(companiesAndApartments, companyAndApartment);
  for (let i = 0; i < companiesAndApartments.length; ++i) {
    if (companiesAndApartments[i].checked) {
      companyAndApartment = companiesAndApartments[i].value;
    }
  }

  // getValue(mallsAndUrbanAreas, mall);
  for (let i = 0; i < mallsAndUrbanAreas.length; ++i) {
    if (mallsAndUrbanAreas[i].checked) {
      mall = mallsAndUrbanAreas[i].value;
    }
  }

  // getValue(markets, market);
  for (let i = 0; i < markets.length; ++i) {
    if (markets[i].checked) {
      market = markets[i].value;
    }
  }

  // getValue(stations, station);
  for (let i = 0; i < stations.length; ++i) {
    if (stations[i].checked) {
      station = stations[i].value;
    }
  }

  // getValue(traffics2, traffic2);
  for (let i = 0; i < traffics2.length; ++i) {
    if (traffics2[i].checked) {
      traffic2 = traffics2[i].value;
    }
  }

  // getValue(schools, school);
  for (let i = 0; i < schools.length; ++i) {
    if (schools[i].checked) {
      school = schools[i].value;
    }
  }

  // getValue(distanceToUrban, distance);
  for (let i = 0; i < distanceToUrban.length; ++i) {
    if (distanceToUrban[i].checked) {
      distance = distanceToUrban[i].value;
    }
  }

  let roadmap;
  data.forEach((element) => {
    if (element.src === sourceValue && element.dst === destinationValue) {
      roadmap = element.road;
      length = element.length;
      img = element.img;
    }
  });

  result.innerHTML = `<p class="print"><b>Khu Vực</b>: ${regionValue}</p>
  <p class="print"><b>Nơi Đi</b>: ${sourceValue}</p>
  <p class="print"><b>Nơi Đến</b>: ${destinationValue}</p>
  <p class="print"><b>Lộ Trình</b>: ${
    roadmap ? roadmap : "Không có dữ liệu"
  }</p><p class="print"><b>Quãng đường</b>: ${
    length ? length : "Không xác định"
  }</p><img class="image" src=${img || ""}>`;

  console.log(
    schoolAndHospital,
    traffic1,
    population,
    companyAndApartment,
    mall,
    market,
    station,
    traffic2,
    school,
    distance
  );

  suggestion.innerHTML = `<h3>MỘT SỐ ĐỀ XUẤT:</h3><p class="suggestion">${
    schoolAndHospital === "lonhon3" && companyAndApartment !== "nhieucongty"
      ? "Tần suất hoạt động: 10-15’/tuyến vào các thứ trong tuần (do hssv chỉ đi học trừ thứ 7 hoặc chủ nhật).<br> Tăng cường tuyến vào giờ cao điểm hssv đi học và mọi người đi khám bệnh vào buổi sáng (5h30-8h00 và 17h-19h).<br> Ngoài giờ cao điểm thì tần suất hoạt động lại trở về 20-25’/tuyến."
      : ""
  }</p> <p class="suggestion">${
    schoolAndHospital === "lonhon3" && companyAndApartment === "nhieucongty"
      ? "Tần suất hoạt động: 10-15’/tuyến vào các thứ trong tuần (do hssv chỉ đi học trừ thứ 7 hoặc chủ nhật).<br> Tăng cường tuyến vào giờ cao điểm hssv đi học, mọi người đi làm và mọi người đi khám bệnh vào buổi sáng (5h30-8h và 17h-19h).<br> Thêm xe đưa đón khách từ chung cư hoặc nơi làm việc đến điểm buýt. Ngoài giờ cao điểm thì tần suất hoạt động lại trở về 20 - 25’/tuyến."
      : ""
  }</p> <p class="suggestion">${
    traffic1 === "tacduong" && market !== "diquacho" //
      ? "Xây dựng nơi gửi xe gần điểm dừng. Tăng tuyến đông khách mỗi chiều khoảng 5-7 xe. <br>Đường rộng: Xây dựng làn đường dành riêng cho xe buýt. Đường hẹp: Mở rộng đường đi."
      : ""
  }</p> <p class="suggestion">${
    market === "diquacho" && traffic1 === "tacduong" //
      ? "Chú trọng tần suất vào tất cả các ngày trong tuần (vì ngày nào mọi người cũng có nhu cầu mua đồ ăn) vào giờ cao điểm mọi người đi làm (5h30-8h và 17h-19h).<br> Đường rộng: Xây dựng làn đường dành riêng cho xe buýt. Đường hẹp: Mở rộng đường đi. Xây dựng nơi gửi xe gần điểm dừng. Tăng tuyến đông khách mỗi chiều khoảng 5-7 xe."
      : ""
  }</p> <p class="suggestion">${
    population === "matdocao"
      ? "Tần suất hoạt động trung bình 10-15’/tuyến."
      : population === "matdothap"
      ? "Giảm tần suất 25’/tuyến. Hạn chế các tuyến ít khách trong giờ cao điểm.<br> Thay đổi lộ trình tuyến không có khách đi qua. Nhập 2 tuyến buýt làm một."
      : ""
  }</p><p class="suggestion">${
    companyAndApartment === "nhieucongty" && schoolAndHospital !== "lonhon3"
      ? "Tần suất hoạt động: 10-15’/tuyến vào các thứ trong tuần (vì mọi người chỉ đi làm vào các thứ cuối tuần được nghỉ),  tăng cường tuyến vào giờ cao điểm mọi người đi làm (5h30-8h và 17h-19h).<br> Thêm xe đưa đón khách từ chung cư hoặc nơi làm việc đến điểm buýt.<br> Xây dựng nơi gửi xe gần điểm buýt. Xây dựng điểm dừng gần công ty, chung cư.<br> Ngoài giờ cao điểm thì tần suất hoạt động lại trở về 20-25’/tuyến."
      : ""
  }</p><p class="suggestion">${
    mall === "diquatttm"
      ? "Tần suất hoạt động 10-15’/ tuyến vào cuối tuần thì cần tăng cường xe cả ngày vì đi qua trung tâm thương mại hoặc khu công viên, khu vui chơi (cuối tuần thì mọi người mới có thời gian đi chơi). Cuối tuần giờ hoạt động từ 5h00-22h30."
      : ""
  }</p> <p class="suggestion">${
    market === "diquacho" && traffic1 !== "tacduong" //
      ? "Tần suất hoạt động: 10-15’/tuyến vào tất cả các ngày trong tuần(vì ngày nào mọi người cũng có nhu cầu mua đồ ăn) vào giờ cao điểm mọi người đi làm (5h30-8h và 17h-19h). Vì chợ thường tập trung rất đông người hay xảy ra ùn tắc nên cần.<br> Đường rộng: Xây dựng làn đường dành riêng cho xe buýt. Đường hẹp: Mở rộng đường đi."
      : ""
  }</p><p class="suggestion">${
    station === "nearStation"
      ? "Giờ hoạt động từ 4h30-00h30 vì có chuyến bay đêm. Về đêm tần suất hoạt động giảm dần 20-25’/tuyến. Ban ngày tần suất hoạt động 10-15’/tuyến."
      : ""
  }</p>
  
  <p class="suggestion">${
    distance === "gannoithanh"
      ? "Cần xây dựng tuyến xe buýt đi vào khu vực nội thành. Tần suất 20-25’/tuyến."
      : ""
  }</p><p class="suggestion">${
    traffic2 === "matdocao"
      ? "Tần suất hoạt động cần tăng cường thêm tuyến vào cuối tuần vì sinh viên và người dân ngoại thành sẽ lên nội thành chơi vào cuối tuần vì lúc đó họ mới được nghỉ.<br> Vào cuối tuần tần suất 10-15’/tuyến. Trong những ngày thứ thì nên tăng cường vào buổi sáng 5h-7h30 vì người dân ngoại thành có thể vào trong nội thành để đi khám bệnh,..."
      : traffic2 === "matdothap"
      ? "Bỏ tuyến buýt nếu hầu như không có khách.<br> Giảm tần suất nếu có khách đều nhưng rất ít. Sửa đổi lộ trình để hỗ trợ các tuyến đông khách từ ngoại thành vào nội thành khác."
      : ""
  }</p><p class="suggestion">${
    school === "cotruonghoc"
      ? "Tần suất hoạt động 10-15’/ tuyến vào cuối tuần thì cần tăng cường xe cả ngày vì đi qua trung tâm thương mại hoặc khu công viên, khu vui chơi (cuối tuần thì hssv mới có thời gian đi chơi).<br> Các ngày thứ trong tuần tuần suất 20-25’/tuyến. Cuối tuần giờ hoạt động từ 5h30-22h00."
      : ""
  }</p>`;
}
