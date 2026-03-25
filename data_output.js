const PRODUCTS = [
  {
    "article": "Деталь МДФ 10мм ПВХ кожа белая",
    "name": "Деталь МДФ 10мм ПВХ кожа белая",
    "stock": 0,
    "cost_price": 1030,
    "spec_opt": null,
    "opt_dyn": 3400,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "Деталь МДФ 16 мм ПВХ кожа белая",
    "name": "Деталь МДФ 16 мм ПВХ кожа белая",
    "stock": 0,
    "cost_price": 1000,
    "spec_opt": null,
    "opt_dyn": 3300,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DBZ1027",
    "name": "Зеркало Ростовое в раме 1800х800, ЛДСП, цвет черный",
    "stock": 0,
    "cost_price": 6600,
    "spec_opt": null,
    "opt_dyn": 15180,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "P01",
    "name": "Подиум для групповых занятий \"ПИРАМИДА\" 1535х1540х1320",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 59900,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DW1015",
    "name": "Полка 368_260, ЛДСП, цвет белый",
    "stock": 0,
    "cost_price": 80,
    "spec_opt": null,
    "opt_dyn": 300,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DW1014",
    "name": "Полка 568_260, ЛДСП, цвет белый",
    "stock": 0,
    "cost_price": 100,
    "spec_opt": null,
    "opt_dyn": 370,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DW1016",
    "name": "Полка 768_260, ЛДСП, цвет белый",
    "stock": 0,
    "cost_price": 125,
    "spec_opt": null,
    "opt_dyn": 465,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DWMWS1012",
    "name": "Стол 2000_1300_800 серия Гранд Волна, /Ящик Волна СОФТ, цвет белый (на заказ)",
    "stock": 0,
    "cost_price": 4560,
    "spec_opt": null,
    "opt_dyn": 10490,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DW02603",
    "name": "Столешница ЛДСП от Комода Гранд-Волна на дерев. опорах, 1200_370_765,",
    "stock": 0,
    "cost_price": 130,
    "spec_opt": null,
    "opt_dyn": 485,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DW1006",
    "name": "Туалетный столик С 2.1 800_950_400 (высокий), 6  ящиков, ЛДСП, цвет белый (на заказ)",
    "stock": 0,
    "cost_price": 2150,
    "spec_opt": null,
    "opt_dyn": 5375,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "Тумба лотос 277 левая",
    "name": "Тумба для ванной лотос 277 левая",
    "stock": 0,
    "cost_price": 1850,
    "spec_opt": 5770,
    "opt_dyn": 4995,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "Тумба лотос 277 правая",
    "name": "Тумба для ванной лотос 277 правая",
    "stock": 0,
    "cost_price": 1850,
    "spec_opt": 5770,
    "opt_dyn": 4995,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DW1082",
    "name": "Тумба на колесиках, 3 ящика, замок на ящике, цвет белый",
    "stock": 0,
    "cost_price": 1500,
    "spec_opt": null,
    "opt_dyn": 4350,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DB881",
    "name": "Тумба подкатная, 3 ящика,с замоком черная шагрень",
    "stock": 0,
    "cost_price": 1690,
    "spec_opt": 4600,
    "opt_dyn": 4905,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DW1043",
    "name": "Шкаф 1-створчатый с полкой и штангой, 2000_500_400, ЛДСП, цвет белый (на заказ)",
    "stock": 0,
    "cost_price": 2200,
    "spec_opt": 7325,
    "opt_dyn": 5500,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DSMКS1113",
    "name": "Шкаф DOMA распашной 3-створчатый,2050_120_500, корпус Сатин, фасад Рейн Кашемир Софт.",
    "stock": 0,
    "cost_price": 5495,
    "spec_opt": 13000,
    "opt_dyn": 12640,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DO1056",
    "name": "Шкаф для документов габарит 793×414×1824 Орех гварнери",
    "stock": 0,
    "cost_price": 2370,
    "spec_opt": 5800,
    "opt_dyn": 5925,
    "top_category": "Контракт",
    "sub_category": "Контракт"
  },
  {
    "article": "DWZ969",
    "name": "Стол 1 ящик ( БЕЗ ручек) ЛДСП 600х400х750, зеркало в раме 600х750, цвет белый_02813(Беляев)",
    "stock": 12,
    "cost_price": 2300,
    "spec_opt": 4600,
    "opt_dyn": 5750,
    "top_category": "Контракт",
    "sub_category": "Беляев"
  },
  {
    "article": "DWMSZ1112",
    "name": "Стол 600_400_750, 1 ящик, ручка золото, СОФТ Волна, зеркало в раме 600х750, цвет белый(Беляев)",
    "stock": 0,
    "cost_price": 2420,
    "spec_opt": 6000,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Беляев"
  },
  {
    "article": "DWMSZ1046",
    "name": "Туалетный столик 800_400_750,белый ЛДСП/ПВХ софт,опора металл золото конус,кол.Беляев, фасад Вельвет",
    "stock": 0,
    "cost_price": 1560,
    "spec_opt": 4525,
    "opt_dyn": 4525,
    "top_category": "Контракт",
    "sub_category": "Беляев"
  },
  {
    "article": "DWMSB1047",
    "name": "Туалетный столик 800_400_750,белый ЛДСП/ПВХ софт,опора металл черный конус,кол. Беляев,фасад Вельвет",
    "stock": 10,
    "cost_price": 1380,
    "spec_opt": 4280,
    "opt_dyn": 4280,
    "top_category": "Контракт",
    "sub_category": "Беляев"
  },
  {
    "article": "СМФ02301Б1345",
    "name": "Обувница SOFT 900_1099_287 МДФ Белый, опоры дерев.",
    "stock": 0,
    "cost_price": 4570,
    "spec_opt": null,
    "opt_dyn": 10515,
    "top_category": "Контракт",
    "sub_category": "ИП Симаков"
  },
  {
    "article": "СМФ02301ШБ1366",
    "name": "Обувница SOFT 900_1099_287 МДФ Секвойя, Фасад МДФ Белый  Софт, опоры дерев.",
    "stock": 0,
    "cost_price": 4590,
    "spec_opt": null,
    "opt_dyn": 10560,
    "top_category": "Контракт",
    "sub_category": "ИП Симаков"
  },
  {
    "article": "СМФ02901Д1367",
    "name": "Туалетный стол Лагом 900_807_360, 1 ящ., ЛДСП Дуб Корбридж, опоры дерево_005OZ-01",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 5355,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Мебель Ренессанс"
  },
  {
    "article": "school_120_ven",
    "name": "Стол письменный School _(белый венге)",
    "stock": 0,
    "cost_price": 1700,
    "spec_opt": 3750,
    "opt_dyn": 4930,
    "top_category": "Контракт",
    "sub_category": "Мебельный мастер"
  },
  {
    "article": "school_120_son_ven",
    "name": "Стол письменный School _(сонома венге)",
    "stock": 0,
    "cost_price": 1810,
    "spec_opt": 3950,
    "opt_dyn": 4890,
    "top_category": "Контракт",
    "sub_category": "Мебельный мастер"
  },
  {
    "article": "school_120_bel",
    "name": "Стол письменный School _Белый",
    "stock": 0,
    "cost_price": 1520,
    "spec_opt": 3205,
    "opt_dyn": 4410,
    "top_category": "Контракт",
    "sub_category": "Мебельный мастер"
  },
  {
    "article": "school_120_bel_son",
    "name": "Стол письменный School Сонома_Белый",
    "stock": 0,
    "cost_price": 1560,
    "spec_opt": 3205,
    "opt_dyn": 4525,
    "top_category": "Контракт",
    "sub_category": "Мебельный мастер"
  },
  {
    "article": "СМФ01901Б1341",
    "name": "Стол письменный с надстройкой school_130_60_bel ЛДСП Белый / ПВХ Белый Софт",
    "stock": 0,
    "cost_price": 2530,
    "spec_opt": 5750,
    "opt_dyn": 5820,
    "top_category": "Контракт",
    "sub_category": "Мебельный мастер"
  },
  {
    "article": "DWMWG1125",
    "name": "Стеллаж UMBA, 1650_300_320, МДФ Белый Глянец/ЛДСП белый, Фасад Вельвет",
    "stock": 0,
    "cost_price": 1570,
    "spec_opt": 4085,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "МЕТОД СТИЛЯ"
  },
  {
    "article": "DWMWG1124",
    "name": "Тумба UMBA под раковину подвесная 2-створчатая,564_600_384,корпус_ЛДСПбел.,фасад Вельвет ГЛЯНЕЦ бел.",
    "stock": 0,
    "cost_price": 1360,
    "spec_opt": 3540,
    "opt_dyn": 4350,
    "top_category": "Контракт",
    "sub_category": "МЕТОД СТИЛЯ"
  },
  {
    "article": "DWMWGS1123",
    "name": "Тумба UMBA под раковину подвесная с 1 ящиком,564_340_384,корпус_ЛДСП белый,Фасад Вельвет ГЛЯНЕЦ бел.",
    "stock": 0,
    "cost_price": 1080,
    "spec_opt": 2800,
    "opt_dyn": 3720,
    "top_category": "Контракт",
    "sub_category": "МЕТОД СТИЛЯ"
  },
  {
    "article": "DWMWG1122",
    "name": "Тумба UMBA под раковину подвесная с 2 ящ 564_600_384.корпус_ЛДСП белый,фасады Вельвет Глянец бел.",
    "stock": 0,
    "cost_price": 1620,
    "spec_opt": 4215,
    "opt_dyn": 5400,
    "top_category": "Контракт",
    "sub_category": "МЕТОД СТИЛЯ"
  },
  {
    "article": "Z1340",
    "name": "Зеркало 1150_360",
    "stock": 0,
    "cost_price": 370,
    "spec_opt": null,
    "opt_dyn": 1370,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "Z1339",
    "name": "Зеркало 1150_910",
    "stock": 0,
    "cost_price": 920,
    "spec_opt": null,
    "opt_dyn": 3040,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "WZ1254",
    "name": "Зеркало безрамное 800х800, цвет черный",
    "stock": 0,
    "cost_price": 1970,
    "spec_opt": null,
    "opt_dyn": 5320,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DVMK1197",
    "name": "Комод 1200_360_766, 8 ящ., Фасад ВЕЛЬВЕТ МДФ Кашемир, ЛДСП цвет Дуб Вотан",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 10470,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DWMWS1029",
    "name": "Комод 1200_400_800, ЛДСП, фасады МДФ, серия Гранд Волна, 6 ящ., цвет белый (на заказ)",
    "stock": 0,
    "cost_price": 3520,
    "spec_opt": null,
    "opt_dyn": 8100,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DVMK1195",
    "name": "Полка_Шкаф 100х100х30,Лдсп Вотан Фасад вельвет Кашемир",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 5000,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DMD1107",
    "name": "Стеллаж 1835х450,Лдсп молочный дуб.",
    "stock": 0,
    "cost_price": 2180,
    "spec_opt": 5600,
    "opt_dyn": 5450,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DWZ1042",
    "name": "Стол 1000_400_800 со стеклянной столешницей, 2 ящика, ЛДСП, с зеркалом в раме 1000_1000_63, ЛДСП, цв",
    "stock": 0,
    "cost_price": 4330,
    "spec_opt": 12120,
    "opt_dyn": 9960,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DO1057",
    "name": "Стол габариты 1350*746*750 лдсп 16мм Орех гварнери Кромка 1мм, столешница 1мм",
    "stock": 0,
    "cost_price": 1320,
    "spec_opt": 3000,
    "opt_dyn": 4095,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DW1026",
    "name": "Стол Гримм 800_800, ЛДСП, Цвет Белый, Без Ящика,( на заказ)",
    "stock": 0,
    "cost_price": 950,
    "spec_opt": null,
    "opt_dyn": 3135,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DW7205",
    "name": "Столешница 1500_550  ЛДСП Белое",
    "stock": 0,
    "cost_price": 685,
    "spec_opt": null,
    "opt_dyn": 2400,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "IVR-7526",
    "name": "ТВ тумба ИВАР",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 21400,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "MKDWZR1136",
    "name": "Туалетный столик 1000х400х1000 на металлических опорах, 1 ящик, ЛДСП Дуб Вотан с рамным зеркалом 800",
    "stock": 0,
    "cost_price": 4100,
    "spec_opt": 10140,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DSZ1028",
    "name": "Туалетный столик 1800_1200_600, 2 ящ. с зеркалом в раме 1200_ 800, ЛДСП Сонома, опоры металл Ral 702",
    "stock": 0,
    "cost_price": 10200,
    "spec_opt": null,
    "opt_dyn": 23460,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DVZ1104",
    "name": "Туалетный столик(серийны)с.1 80_80_40, 1 ящик, ЛДСП, цвет Венге, зеркало безрамное, Венге (на заказ)",
    "stock": 0,
    "cost_price": 3900,
    "spec_opt": null,
    "opt_dyn": 8970,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DWMWGZ1132",
    "name": "Туалетный столик, 80х80х40, 1 ящ., ЛДСП Белый Снежный /МДФ пленка глянец, с  рамным зеркалом 80х80 (",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 9050,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DWDW6679",
    "name": "Туалетный столик, белый, 1000_1000_400, 2 ящ, фурнитура хром",
    "stock": 0,
    "cost_price": 1450,
    "spec_opt": null,
    "opt_dyn": 4205,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DBDB1253",
    "name": "Туалетный столик, черный, 800_1000_400, 1 ящ, на метал. каркасе, фурн. бел.",
    "stock": 0,
    "cost_price": 1170,
    "spec_opt": null,
    "opt_dyn": 3630,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DMD1108",
    "name": "тумба 2000х450.ЛДСП Молочный дуб",
    "stock": 0,
    "cost_price": 4250,
    "spec_opt": 12500,
    "opt_dyn": 9775,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "LVR-7525",
    "name": "Тумба под телевизор Ливерпуль 1640*610*410 Серая",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 12600,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DWDMWS150725",
    "name": "Тумба прикроватная \"Гранд Волна\", тумбочка напольная с ящиком для хранения, 45х35х55 см",
    "stock": 0,
    "cost_price": 690,
    "spec_opt": 3300,
    "opt_dyn": 2415,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "XDF2878",
    "name": "ХДФ фрезеровка, по документации заказчика.",
    "stock": 0,
    "cost_price": 110,
    "spec_opt": null,
    "opt_dyn": 410,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DWMWS1013",
    "name": "Шкаф 1300_1300 серия Гранд- Волна 1300_1300 / Фасады Волна СОФТ, цвет белый (на заказ)",
    "stock": 0,
    "cost_price": 4500,
    "spec_opt": null,
    "opt_dyn": 10350,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DVMK1196",
    "name": "Шкаф 2052_800_500, фасад ВЕЛЬВЕТ МДФ Кашемир, ЛДСП цвет Дуб Вотан",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 14290,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DWMWS1030",
    "name": "Шкаф 2500_600_2400, ЛДСП, фасады МДФ, серия Гранд Волна,ВЕРХНИИ. НИЖНИИ прямые цвет белый (на заказ)",
    "stock": 0,
    "cost_price": 13680,
    "spec_opt": null,
    "opt_dyn": 31465,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DSMКS6731",
    "name": "Шкаф DOMA распашной 2-створчатый,корпус Сатин, фасад Рейн Кашемир Софт.",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 10550,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DMD1109",
    "name": "Шкаф для документов,1835х445.ЛДСП молочный дуб",
    "stock": 0,
    "cost_price": 5150,
    "spec_opt": 12500,
    "opt_dyn": 11845,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "DMD1106",
    "name": "Шкаф под одежду и бумагу 1835х445.ЛДСП Молочный дуб",
    "stock": 0,
    "cost_price": 6880,
    "spec_opt": 12500,
    "opt_dyn": 15825,
    "top_category": "Контракт",
    "sub_category": "на заказ"
  },
  {
    "article": "MNZ7202",
    "name": "Стол разборный с нержавейки,  635_1802_550, 2  зеркала",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 25000,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "ОВО"
  },
  {
    "article": "СМФ00402Б1274",
    "name": "Комод LUGANO 3 ящ. 628_762_342 ЛДСП Белый/ ПВХ Белый Снег, фурнитура золото",
    "stock": 0,
    "cost_price": 2200,
    "spec_opt": 4310,
    "opt_dyn": 5500,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00402Б1275",
    "name": "Комод LUGANO 3 ящ. 628_762_342 ЛДСП Белый/ ПВХ Белый Снег, фурнитура черная",
    "stock": 0,
    "cost_price": 2140,
    "spec_opt": 4310,
    "opt_dyn": 5350,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00401Г1273",
    "name": "Прикроватная тумба ANDRE 2 ящ. 460_500_349 ЛДСП Антрацит / ПВХ Графит Софт, фурнитура черн.",
    "stock": 0,
    "cost_price": 1600,
    "spec_opt": 3185,
    "opt_dyn": 4640,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00401К1271",
    "name": "Прикроватная тумба ANDRE 2 ящ. 460_500_349 ЛДСП Кашемир / ПВХ Кашемир Софт, фурнитура золото",
    "stock": 0,
    "cost_price": 1690,
    "spec_opt": 3470,
    "opt_dyn": 4905,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00401К1272",
    "name": "Прикроватная тумба ANDRE 2 ящ. 460_500_349 ЛДСП Кашемир / ПВХ Кашемир Софт, фурнитура черн.",
    "stock": 0,
    "cost_price": 1620,
    "spec_opt": 3330,
    "opt_dyn": 4700,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00403Б1276",
    "name": "Тумба под ТВ LUGANO 2 ств. 1122_448_404 ЛДСП Белый/ ПВХ Белый Снег, фурнитура золото",
    "stock": 0,
    "cost_price": 2000,
    "spec_opt": 4170,
    "opt_dyn": 5400,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00403Б1277",
    "name": "Тумба под ТВ LUGANO 2 ств. 1122_448_404 ЛДСП Белый/ ПВХ Белый Снег, фурнитура черная",
    "stock": 0,
    "cost_price": 1950,
    "spec_opt": 4170,
    "opt_dyn": 5265,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00403К1278",
    "name": "Тумба под ТВ LUGANO 2 ств. 1122_448_404 ЛДСП Кашемир / ПВХ Кашемир, фурнитура золото",
    "stock": 0,
    "cost_price": 2120,
    "spec_opt": 4170,
    "opt_dyn": 5300,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "СМФ00403К1279",
    "name": "Тумба под ТВ LUGANO 2 ств. 1122_448_404 ЛДСП Кашемир / ПВХ Кашемир, фурнитура черная",
    "stock": 0,
    "cost_price": 2080,
    "spec_opt": 4170,
    "opt_dyn": 5620,
    "top_category": "Контракт",
    "sub_category": "Ридберг"
  },
  {
    "article": "SG.837.WH",
    "name": "Комплект фасадов низких 397х751х16 (2шт.) Сигма",
    "stock": 0,
    "cost_price": 1100,
    "spec_opt": null,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Сигма"
  },
  {
    "article": "SG.836.OL",
    "name": "Комплект фасадов средних 397х1126х16 (2шт.)Сигма",
    "stock": 0,
    "cost_price": 1300,
    "spec_opt": null,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Сигма"
  },
  {
    "article": "SG.651.OL",
    "name": "Комплект фасадов тумбы моб. 3-х ящ. с замком Сигма",
    "stock": 0,
    "cost_price": 600,
    "spec_opt": null,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Сигма"
  },
  {
    "article": "SG.611.OL",
    "name": "Кор. тумбы мобильной 3-х ящик. с замком 404*462*609 Сигма",
    "stock": 0,
    "cost_price": 1800,
    "spec_opt": null,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Сигма"
  },
  {
    "article": "SG.801.WH",
    "name": "Корпус стеллажа высокого_802х400х1953 Сигма",
    "stock": 0,
    "cost_price": 2400,
    "spec_opt": null,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Сигма"
  },
  {
    "article": "SG.405.OL",
    "name": "Стол рабочий 1400*700*750 Сигма",
    "stock": 0,
    "cost_price": 1900,
    "spec_opt": null,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Сигма"
  },
  {
    "article": "SG.105.WH",
    "name": "Столешница 1400*700*25 Сигма",
    "stock": 0,
    "cost_price": 900,
    "spec_opt": null,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Сигма"
  },
  {
    "article": "DWMS1023",
    "name": "Комод  722_360_766,  кол-ция Теслова, Фасад  Вельвет МДФ СОФТ,  цвет белый",
    "stock": 0,
    "cost_price": 2060,
    "spec_opt": 5940,
    "opt_dyn": 5565,
    "top_category": "Контракт",
    "sub_category": "Теслова"
  },
  {
    "article": "DVMS1100",
    "name": "Комод 1200мм, 6ящ, опора прямая, ручка золото, кол-ция Теслова, фасад Вельвет СЕКВОЯ, цвет Дуб Вотан",
    "stock": 0,
    "cost_price": 3750,
    "spec_opt": 9500,
    "opt_dyn": 8625,
    "top_category": "Контракт",
    "sub_category": "Теслова"
  },
  {
    "article": "DVMS1022",
    "name": "Комод 722_360_867,опора металл золото,прямая,кол-ция Теслова,Фасад Вельвет МДФ СЕКВОЯ  цвет Дуб Вота",
    "stock": 0,
    "cost_price": 2670,
    "spec_opt": null,
    "opt_dyn": 6145,
    "top_category": "Контракт",
    "sub_category": "Теслова"
  },
  {
    "article": "DVMS1110",
    "name": "Консоль 722_360_115, кол-ция Теслова, Фасад  Вельвет МДФ СЕКВОЯ,  цвет Дуб Вотан",
    "stock": 0,
    "cost_price": 770,
    "spec_opt": 2025,
    "opt_dyn": 2695,
    "top_category": "Контракт",
    "sub_category": "Теслова"
  },
  {
    "article": "DVMS1101",
    "name": "Тв тумба 1440мм Теслова опора золото Дуб Вотан,фасад Вельвет СЕКВОЯ",
    "stock": 0,
    "cost_price": 2370,
    "spec_opt": 7500,
    "opt_dyn": 5925,
    "top_category": "Контракт",
    "sub_category": "Теслова"
  },
  {
    "article": "DWMS1024",
    "name": "Туалетный столик 1000_610_840, белый ЛДСП/ПВХ софт, опора металл золото квадрат, кол-ция Теслова, фа",
    "stock": 0,
    "cost_price": 2300,
    "spec_opt": 8000,
    "opt_dyn": null,
    "top_category": "Контракт",
    "sub_category": "Теслова"
  },
  {
    "article": "DWMS1025",
    "name": "Туалетный столик 1000_610_840, белый ЛДСП/ПВХ софт, опора металл черный квадрат, кол-ция Теслова, фа",
    "stock": 0,
    "cost_price": 2340,
    "spec_opt": 8000,
    "opt_dyn": 5850,
    "top_category": "Контракт",
    "sub_category": "Теслова"
  },
  {
    "article": "СМФ02803Ц1363",
    "name": "Стеллаж ФРЕЗЕР 1150_500/400_161, ЛДСП Венге",
    "stock": 0,
    "cost_price": 500,
    "spec_opt": 1455,
    "opt_dyn": 1850,
    "top_category": "Контракт",
    "sub_category": "Фрезер"
  },
  {
    "article": "СМФ02803В1361",
    "name": "Стеллаж ФРЕЗЕР 1150_500/400_161, ЛДСП Дуб Вотан",
    "stock": 0,
    "cost_price": 450,
    "spec_opt": 1250,
    "opt_dyn": 1665,
    "top_category": "Контракт",
    "sub_category": "Фрезер"
  },
  {
    "article": "СМФ02803С1362",
    "name": "Стеллаж ФРЕЗЕР 1150_500/400_161, ЛДСП Сонома",
    "stock": 0,
    "cost_price": 440,
    "spec_opt": 1360,
    "opt_dyn": 1630,
    "top_category": "Контракт",
    "sub_category": "Фрезер"
  },
  {
    "article": "СМФ02801БВ1349",
    "name": "Стол письменный с дверью ФРЕЗЕР 1250_740_600 ЛДСП Белый/ Дуб Вотан, фурнит. хром мат.",
    "stock": 0,
    "cost_price": 1650,
    "spec_opt": 3855,
    "opt_dyn": 4785,
    "top_category": "Контракт",
    "sub_category": "Фрезер"
  },
  {
    "article": "СМФ02801БС1359",
    "name": "Стол письменный с дверью ФРЕЗЕР 1250_740_600 ЛДСП Белый/ Сонома, фурнит. хром мат.",
    "stock": 0,
    "cost_price": 1620,
    "spec_opt": 3940,
    "opt_dyn": 4700,
    "top_category": "Контракт",
    "sub_category": "Фрезер"
  },
  {
    "article": "СМФ02802БВ1350",
    "name": "Стол письменный с дверью ФРЕЗЕР 1400_1124_600 ЛДСП Белый/ Дуб Вотан, фурнит. хром мат.",
    "stock": 0,
    "cost_price": 1900,
    "spec_opt": 4695,
    "opt_dyn": 5130,
    "top_category": "Контракт",
    "sub_category": "Фрезер"
  },
  {
    "article": "СМФ02802БС1360",
    "name": "Стол письменный с дверью ФРЕЗЕР 1400_1124_600 ЛДСП Белый/ Сонома, фурнит. хром мат.",
    "stock": 0,
    "cost_price": 1870,
    "spec_opt": 4745,
    "opt_dyn": 5050,
    "top_category": "Контракт",
    "sub_category": "Фрезер"
  },
  {
    "article": "DWMWG1280",
    "name": "Пенал \"Round\" подвес. 350_1700_339, 2 дв. МДФ Белый глянец/ЛДСП Белый",
    "stock": 18,
    "cost_price": 2540,
    "spec_opt": null,
    "opt_dyn": 6350,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DVMGS1281",
    "name": "Пенал \"Round\" подвес. 350_1700_339, 2 дв. МДФ Графит софт/ Дерево",
    "stock": 115,
    "cost_price": 2610,
    "spec_opt": null,
    "opt_dyn": 6525,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "СМФ00904Б1264",
    "name": "Пенал Contline Волна 2 двери 300_1714_300 ЛДСП Белый / ПВХ Белый Софт",
    "stock": 3,
    "cost_price": 1720,
    "spec_opt": null,
    "opt_dyn": 4645,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DWMWS02371",
    "name": "Прикроватная тумба (480) 1ф Юдичев Вельвет, Опора МДФ, цвет белый_02473",
    "stock": 0,
    "cost_price": 940,
    "spec_opt": null,
    "opt_dyn": 3105,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DWMWS02369",
    "name": "Прикроватная тумба (480) 1ф Юдичев Волна, Опора МДФ, цвет белый_02455",
    "stock": 1,
    "cost_price": 940,
    "spec_opt": 2165,
    "opt_dyn": 3105,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "BS396",
    "name": "Стол обеденный Bosco 1200(1550) * 800 (880) Белый",
    "stock": 0,
    "cost_price": 4570,
    "spec_opt": 15500,
    "opt_dyn": 10515,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "JKSN02386",
    "name": "Стол обеденный Jackson 1300*780 Крафт",
    "stock": 36,
    "cost_price": 2395,
    "spec_opt": 7300,
    "opt_dyn": null,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "LINK-1100*700 W",
    "name": "Стол обеденный Link 1100*700 Белый",
    "stock": 2,
    "cost_price": 5910,
    "spec_opt": 8500,
    "opt_dyn": 13595,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "СМФ00901Б1268",
    "name": "Тумба Contline Волна 1 ящ. 664_438_451 ЛДСП Белый, без столешн., фасад Белый Софт, фурн. золот.",
    "stock": 29,
    "cost_price": 1370,
    "spec_opt": null,
    "opt_dyn": 4250,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "СМФ00903Б1269",
    "name": "Тумба Contline Волна 2 ств. 664_550_451 ЛДСП Белый, без столешн., фасад Белый Софт, фурн. золот.",
    "stock": 30,
    "cost_price": 1580,
    "spec_opt": null,
    "opt_dyn": 4585,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "СМФ00902Б1298",
    "name": "Тумба Contline Волна 2 ящ. 664_550_451 ЛДСП Белый, без столешн., фасад Белый Софт, фурн. золот.",
    "stock": 0,
    "cost_price": 1790,
    "spec_opt": null,
    "opt_dyn": 4835,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "СМФ00902Б1270",
    "name": "Тумба Contline Волна 2 ящ. 664_550_451 ЛДСП Белый, без столешн., фасад Белый Софт, фурн. черн.",
    "stock": 2,
    "cost_price": 1780,
    "spec_opt": null,
    "opt_dyn": 4810,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "СМФ00906Б1266",
    "name": "Тумба Contline Волна 2 ящ. 668_566_455 ЛДСП Белый, столеш. МДФ Белый, фасад Белый Софт, фурн. золот.",
    "stock": 2,
    "cost_price": 2130,
    "spec_opt": null,
    "opt_dyn": 5325,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "СМФ00906Б1344",
    "name": "Тумба Contline Волна 2 ящ. 668_566_455 ЛДСП Белый, столеш. МДФ Белый, фасад Белый Софт, фурн. черн.",
    "stock": 48,
    "cost_price": 2110,
    "spec_opt": null,
    "opt_dyn": 5275,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DWMWG1262",
    "name": "Тумба под раковину \"Round\" подвес.,600_516_500,  2 ящ, МДФ белый глянец/ЛДСП Белый",
    "stock": 0,
    "cost_price": 2220,
    "spec_opt": null,
    "opt_dyn": 5550,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DVMWG985",
    "name": "Тумба под раковину \"Round\" подвес.,600_516_500,  2 ящ, МДФ белый глянец/ЛДСП Дуб Вотан",
    "stock": 123,
    "cost_price": 2300,
    "spec_opt": null,
    "opt_dyn": 5750,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "MSMD933",
    "name": "Тумба под раковину \"Round\" подвес.,600_516_500, 2ящ , МДФ,графит софт/ Дерево_02744",
    "stock": 291,
    "cost_price": 2310,
    "spec_opt": null,
    "opt_dyn": 5800,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DWMWG1263",
    "name": "Тумба под раковину \"Round\" подвес.,750_516_500, 2 ящ, МДФ белый глянец/ЛДСП Белый",
    "stock": 126,
    "cost_price": 2410,
    "spec_opt": null,
    "opt_dyn": 6100,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DVMWG984",
    "name": "Тумба под раковину \"Round\" подвес.,750_516_500, 2 ящ, МДФ белый глянец/ЛДСП Дуб Вотан",
    "stock": 312,
    "cost_price": 2500,
    "spec_opt": null,
    "opt_dyn": 6250,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "MSMD935",
    "name": "Тумба под раковину \"Round\" подвес.,750_516_500, 2ящ , МДФ,графит софт/дерево_02809",
    "stock": 578,
    "cost_price": 2520,
    "spec_opt": null,
    "opt_dyn": 6300,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DWMWS821",
    "name": "Тумба под ТВ Юдичев Зум (Подвесная). 1440*350*400, цвет белый_02506",
    "stock": 4,
    "cost_price": 1940,
    "spec_opt": 4460,
    "opt_dyn": 5240,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "DWMWS02380",
    "name": "Тумба под ТВ Юдичев Зум 1440_350_400, Опора МДФ, цвет белый_02482",
    "stock": 6,
    "cost_price": 2475,
    "spec_opt": null,
    "opt_dyn": 6190,
    "top_category": "Маркеты",
    "sub_category": "БИНЛО"
  },
  {
    "article": "кт5",
    "name": "01500 Тележка косметологическая №1, с 3-мя полками",
    "stock": 0,
    "cost_price": 520,
    "spec_opt": 1500,
    "opt_dyn": null,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "Веш112_Белый",
    "name": "Вешалка с зеркалом Белый-02116",
    "stock": 0,
    "cost_price": 805,
    "spec_opt": 2100,
    "opt_dyn": 2820,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "Консоль75см.ЛДСПбелая",
    "name": "Консоль из ЛДСП  75 см. Цвет белый",
    "stock": 0,
    "cost_price": 845,
    "spec_opt": null,
    "opt_dyn": 2960,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "MWG2399",
    "name": "Корпус 1 секционный, МДФ, пленка глянец, цвет белый_01228",
    "stock": 0,
    "cost_price": 630,
    "spec_opt": null,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "КП80",
    "name": "Подвесная консоль из ЛДСП 800х300 мм._01967",
    "stock": 0,
    "cost_price": 620,
    "spec_opt": 1860,
    "opt_dyn": 2170,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ1ящМДФФас.Обычный",
    "name": "Подвесная прикроватная тумба 400х350 мм. 1 ящик. Глянец Фасад \"Обычный\"",
    "stock": 0,
    "cost_price": 595,
    "spec_opt": null,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "КП60",
    "name": "Подвесная тумба ЛДСП для МП. 600х300 мм, цвет белый",
    "stock": 0,
    "cost_price": 560,
    "spec_opt": null,
    "opt_dyn": 2075,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "Полочка_бел",
    "name": "Полочка с зеркалом. Вся белая, ЛДСП_02202",
    "stock": 1,
    "cost_price": 510,
    "spec_opt": 2170,
    "opt_dyn": 1890,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "МДФ-Свырезом",
    "name": "Прикроватная тумба на ножках 1 ящик МДФ с фасадом \"Вырез\", пленка глянец, цвет белый_02531",
    "stock": 0,
    "cost_price": 1000,
    "spec_opt": null,
    "opt_dyn": 3300,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "МДФ-Лондон",
    "name": "Прикроватная тумба на ножках 1 ящик МДФ с фасадом \"Лондон\", пленка глянец, цвет белый_02532",
    "stock": 0,
    "cost_price": 1000,
    "spec_opt": null,
    "opt_dyn": 3300,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "01537_2ящ.ЛДСПвсебелое",
    "name": "Прикроватная тумба на ножках 2 ящика ЛДСП \"Всё Белое\"_02565",
    "stock": 0,
    "cost_price": 1090,
    "spec_opt": null,
    "opt_dyn": 3600,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "2ящика.МДФ-Лондон",
    "name": "Прикроватная тумба на ножках 2 ящика МДФ с фасадом \"Лондон\", пленка глянец, цвет белый_02543",
    "stock": 0,
    "cost_price": 1250,
    "spec_opt": null,
    "opt_dyn": 3875,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "3ящика.МДФ-Обычный",
    "name": "Прикроватная тумба на ножках 3 ящика МДФ с фасадом \"Обычная\", пленка глянец, цвет белый_02559",
    "stock": 0,
    "cost_price": 1435,
    "spec_opt": null,
    "opt_dyn": 4165,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "кс1",
    "name": "Тележка косметологическая №12, с 3-мя полками и бортами широкими, ЛДСП, цвет белый_01536",
    "stock": 0,
    "cost_price": 630,
    "spec_opt": 1500,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "Веш112-Бежевый",
    "name": "Вешалка с зеркалом Дуб Сонома-02115",
    "stock": 0,
    "cost_price": 920,
    "spec_opt": 2290,
    "opt_dyn": 3040,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "Комод3ящВолнаМатовый",
    "name": "Комод  Волна 780х360х800, 3 ящика, пленка Софт матовый, цвет белый",
    "stock": 45,
    "cost_price": 2640,
    "spec_opt": null,
    "opt_dyn": 6075,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "Комод3ящВолнаГлянец",
    "name": "Комод МДФ 3ящ фасад Волна, пленка глянец, цвет белый_02420",
    "stock": 30,
    "cost_price": 2600,
    "spec_opt": null,
    "opt_dyn": 5980,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "DC2382",
    "name": "Корпус 2 секционный с 2 мя ящиками, ЛДСП, цвет дуб сонома_01397",
    "stock": 29,
    "cost_price": 840,
    "spec_opt": null,
    "opt_dyn": 2940,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "DB2381",
    "name": "Корпус 2 секционный с 2-мя ящ., ЛДСП, цвет бетон пайн_01427",
    "stock": 22,
    "cost_price": 820,
    "spec_opt": null,
    "opt_dyn": 2870,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К100Барселона",
    "name": "Подвесная консоль 100 см. С фасадами. Глянец Фасад \"Барселона\", цвет белый_02540",
    "stock": 52,
    "cost_price": 1480,
    "spec_opt": 3300,
    "opt_dyn": 4295,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К100ВолнаГлянец",
    "name": "Подвесная консоль 100 см. С фасадами. Глянец Фасад \"Волна\", цвет белый_02541",
    "stock": 228,
    "cost_price": 1490,
    "spec_opt": null,
    "opt_dyn": 4325,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "K100Лондон",
    "name": "Подвесная консоль 100 см. С фасадами. Глянец Фасад \"Лондон\", цвет белый_02539",
    "stock": 1,
    "cost_price": 1170,
    "spec_opt": null,
    "opt_dyn": 3630,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К100ВолнаМатовый",
    "name": "Подвесная консоль 100 см. СОФТ \"Волна\", ручка золото, цвет белый_02528",
    "stock": 330,
    "cost_price": 1520,
    "spec_opt": null,
    "opt_dyn": 4410,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К80Лондон",
    "name": "Подвесная консоль 80 см. С фасадами \"Лондон\", пленка глянец, цвет белый_864",
    "stock": 3,
    "cost_price": 1060,
    "spec_opt": null,
    "opt_dyn": 3500,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К80Обычный",
    "name": "Подвесная консоль 80 см. С фасадами \"Обычный\", пленка глянец, цвет белый_865",
    "stock": 0,
    "cost_price": 1050,
    "spec_opt": null,
    "opt_dyn": 3465,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К80Барселона",
    "name": "Подвесная консоль 80 см. С фасадами Барселона, пленка глянец, цвет белый_02529",
    "stock": 35,
    "cost_price": 1280,
    "spec_opt": null,
    "opt_dyn": 3970,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К80ВолнаГлянец",
    "name": "Подвесная консоль 80 см. С фасадами Волна, пленка глянец, цвет белый_02530",
    "stock": 96,
    "cost_price": 1280,
    "spec_opt": 3100,
    "opt_dyn": 3970,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "К80ВолнаМатовый",
    "name": "Подвесная консоль 80 см. СОФТ \"Волна\", ручка золото, цвет белый_02527",
    "stock": 329,
    "cost_price": 1310,
    "spec_opt": null,
    "opt_dyn": 4065,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "K100Свырезом",
    "name": "Подвесная консоль МДФ 100 см. Фасад с \"Вырезом\", пленка глянец, цвет белый_835",
    "stock": 1,
    "cost_price": 1180,
    "spec_opt": null,
    "opt_dyn": 3660,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ1ящМДФФас.Барселона",
    "name": "Подвесная прикроватная тумба 400х350 мм. 1 ящик. Глянец Фасад \"Барселона\"_02569",
    "stock": 33,
    "cost_price": 700,
    "spec_opt": null,
    "opt_dyn": 2450,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ1ящМДФФас.ВолнаГлянец",
    "name": "Подвесная прикроватная тумба 400х350 мм. 1 ящик. Глянец Фасад \"Волна\"_02570",
    "stock": 106,
    "cost_price": 700,
    "spec_opt": null,
    "opt_dyn": 2450,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ1ящМДФФас.Лондон",
    "name": "Подвесная прикроватная тумба 400х350 мм. 1 ящик. Глянец Фасад \"Лондон\"_860",
    "stock": 1,
    "cost_price": 595,
    "spec_opt": null,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ2ящМДФФас.Барселона",
    "name": "Подвесная прикроватная тумба 400х350 мм. 2 ящика Глянец. Фасад \"Барселона\", цвет белый_02547",
    "stock": 31,
    "cost_price": 980,
    "spec_opt": null,
    "opt_dyn": 3235,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ2ящМДФФас.ВолнаГлянец",
    "name": "Подвесная прикроватная тумба 400х350 мм. 2 ящика Глянец. Фасад \"Волна\", цвет белый_02536",
    "stock": 133,
    "cost_price": 990,
    "spec_opt": 2800,
    "opt_dyn": 3270,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ2ящМДФФас.Лондон",
    "name": "Подвесная прикроватная тумба 400х350 мм. 2 ящика Глянец. Фасад \"Лондон\", цвет белый_02535",
    "stock": 6,
    "cost_price": 985,
    "spec_opt": null,
    "opt_dyn": 3255,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ1ящМДФФас.Вырез",
    "name": "Подвесная тумба 1 ящик МДФ - Фасад \"Вырез\", 400х350 мм, пленка глянец, цвет белый_859",
    "stock": 0,
    "cost_price": 595,
    "spec_opt": null,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ1ящМатовыйВолна",
    "name": "Подвесная тумба 1 ящик СОФТ \"Волна\"  ручка золото, цвет белый_02525",
    "stock": 273,
    "cost_price": 710,
    "spec_opt": null,
    "opt_dyn": 2485,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "ПТ2ящМатовыйВолна",
    "name": "Подвесная тумба 2 ящика СОФТ \"Волна\"  ручка золото, цвет белый_02526",
    "stock": 314,
    "cost_price": 950,
    "spec_opt": null,
    "opt_dyn": 3135,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "Полочка_соном_белый",
    "name": "Полочка с зеркалом, ЛДСП,цвет бело-сонома_02203",
    "stock": 0,
    "cost_price": 530,
    "spec_opt": 1600,
    "opt_dyn": 1965,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "1ящМДФВолнаМатовый",
    "name": "Прикроватная тумба 1 секция МДФ с фасадом СОФТ \"Волна\", на ножках пленка МАТОВАЯ, цвет белый_877",
    "stock": 50,
    "cost_price": 1150,
    "spec_opt": null,
    "opt_dyn": 3565,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "2ящ.МДФВолнаМатовый",
    "name": "Прикроватная тумба 2 секция МДФ на дер. опорах, \"Волна\" пленка матовая СОФТ, цвет белый_02512",
    "stock": 309,
    "cost_price": 1400,
    "spec_opt": null,
    "opt_dyn": 4340,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "DBDW1301",
    "name": "Прикроватная тумба ЛДСП 1 ящика. Цвет Бетон Пайн , фасад ЛДСП белый",
    "stock": 58,
    "cost_price": 1070,
    "spec_opt": null,
    "opt_dyn": 3535,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "МДФ-Барселона",
    "name": "Прикроватная тумба на ножках 1 ящик МДФ с фасадом \"Барселона\", пленка глянец, цвет белый_826",
    "stock": 50,
    "cost_price": 1130,
    "spec_opt": null,
    "opt_dyn": 3505,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "МДФ-Волна",
    "name": "Прикроватная тумба на ножках 1 ящик МДФ с фасадом \"Волна\", пленка глянец, цвет белый_02549",
    "stock": 48,
    "cost_price": 1140,
    "spec_opt": null,
    "opt_dyn": 3535,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "МДФ-Обычный",
    "name": "Прикроватная тумба на ножках 1 ящик МДФ с фасадом \"Обычный\", пленка глянец, цвет белый_02558",
    "stock": 1,
    "cost_price": 995,
    "spec_opt": null,
    "opt_dyn": 3285,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "2ящика.МДФ-Барселона",
    "name": "Прикроватная тумба на ножках 2 ящика МДФ с фасадом \"Барселона\", пленка глянец, цвет белый_02542",
    "stock": 29,
    "cost_price": 1360,
    "spec_opt": null,
    "opt_dyn": 4220,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "2ящика.МДФ-ВолнаГлянец",
    "name": "Прикроватная тумба на ножках 2 ящика МДФ с фасадом \"Волна\", пленка глянец, цвет белый_02548",
    "stock": 86,
    "cost_price": 1370,
    "spec_opt": 3245,
    "opt_dyn": 4250,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "2ящика.МДФ-Свырезом",
    "name": "Прикроватная тумба на ножках 2 ящика МДФ с фасадом \"Вырез\", пленка глянец, цвет белый_02544",
    "stock": 0,
    "cost_price": 1240,
    "spec_opt": null,
    "opt_dyn": 3845,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "2ящика.МДФ-Обычный",
    "name": "Прикроватная тумба на ножках 2 ящика МДФ с фасадом \"Обычный\", пленка глянец, цвет белый_02545",
    "stock": 0,
    "cost_price": 1240,
    "spec_opt": null,
    "opt_dyn": 3845,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "3ящика.МДФ-Барселона",
    "name": "Прикроватная тумба на ножках 3 ящика МДФ с фасадом \"Барселона\", пленка глянец, цвет белый_02563",
    "stock": 23,
    "cost_price": 1590,
    "spec_opt": null,
    "opt_dyn": 4615,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "3ящика.МДФ-ВолнаГлянец",
    "name": "Прикроватная тумба на ножках 3 ящика МДФ с фасадом \"Волна\", пленка глянец, цвет белый_02561",
    "stock": 151,
    "cost_price": 1600,
    "spec_opt": null,
    "opt_dyn": 4640,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "3ящика.МДФ-Свырезом.",
    "name": "Прикроватная тумба на ножках 3 ящика МДФ с фасадом \"Вырез\", пленка глянец, цвет белый_02560",
    "stock": 1,
    "cost_price": 1435,
    "spec_opt": null,
    "opt_dyn": 4165,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "3ящ.МДФВолнаМатовый",
    "name": "Прикроватная тумба на ножках 3 ящика МДФ СОФТ с фасадом \"Волна\", пленка МАТОВАЯ, цвет белый_02620",
    "stock": 95,
    "cost_price": 1650,
    "spec_opt": null,
    "opt_dyn": 4785,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "3ящика.МДФ-Лондон",
    "name": "Прикроватная тумба на ножках 3 ящика, корпус МДФ, глянец, Фасад узор \"Лондон\", цвет белый_02562",
    "stock": 1,
    "cost_price": 1500,
    "spec_opt": null,
    "opt_dyn": 4350,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "1ящ.лдсп.всебелое",
    "name": "Прикроватная тумба на ножках ЛДСП 1 ящик. Цвет \"Всё Белое\"",
    "stock": 0,
    "cost_price": 900,
    "spec_opt": null,
    "opt_dyn": 2970,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "104553секЛДСПвсебелый",
    "name": "Прикроватная тумба на ножках ЛДСП 3 ящика. Цвет \"Всё Белое\"_02566",
    "stock": 2,
    "cost_price": 1200,
    "spec_opt": null,
    "opt_dyn": 3720,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "кт8кт8",
    "name": "Тележка косметологическая №8, с консольной тумбой",
    "stock": 17,
    "cost_price": 1320,
    "spec_opt": null,
    "opt_dyn": 4095,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02101Б9685",
    "name": "Тумба Алекс с 1 ящиком 509_540_380 Бетон",
    "stock": 0,
    "cost_price": 1070,
    "spec_opt": null,
    "opt_dyn": 3535,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02101С9681",
    "name": "Тумба Алекс с 1 ящиком 509_540_380 Сосна Сантарини",
    "stock": 0,
    "cost_price": 630,
    "spec_opt": null,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02102Б9687",
    "name": "Тумба Алекс с 2 ящиками 509_537_380 Бетон",
    "stock": 0,
    "cost_price": 1240,
    "spec_opt": null,
    "opt_dyn": 3845,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02102П9689",
    "name": "Тумба Алекс с 2 ящиками 509_537_380 Пальмира",
    "stock": 0,
    "cost_price": 1150,
    "spec_opt": null,
    "opt_dyn": 3565,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02103Б9690",
    "name": "Тумба Алекс с 3 ящиками 509_535_380 Бетон",
    "stock": 0,
    "cost_price": 1400,
    "spec_opt": null,
    "opt_dyn": 4340,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02501Г1346",
    "name": "Тумба под ТВ Гранд Волна 1920_506_369, ЛДСП Антрацит / МДФ Графит, опоры штырь золото",
    "stock": 0,
    "cost_price": 3500,
    "spec_opt": null,
    "opt_dyn": 8050,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02501Б1347",
    "name": "Тумба под ТВ Гранд Волна 1920_506_369, ЛДСП Белый / МДФ Белый Софт, опоры штырь золото",
    "stock": 0,
    "cost_price": 3300,
    "spec_opt": null,
    "opt_dyn": 7590,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ02501К1348",
    "name": "Тумба под ТВ Гранд Волна 1920_506_369, ЛДСП Кашемир / МДФ Кашемир, опоры штырь золото",
    "stock": 0,
    "cost_price": 3550,
    "spec_opt": null,
    "opt_dyn": 8165,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "СМФ03301В1369",
    "name": "Тумба под ТВ Лофт Вельвет 1920_506_369, ЛДСП Дуб Вотан / МДФ Графит, опоры штырь черный",
    "stock": 0,
    "cost_price": 3050,
    "spec_opt": null,
    "opt_dyn": 7015,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "DSDW1300",
    "name": "Тумба прикроватная 1 ящик санторини, фасад лдсп Белый",
    "stock": 59,
    "cost_price": 630,
    "spec_opt": null,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "DSDW1302",
    "name": "Тумба прикроватная 2 ящика сонома,Фасад ЛДСП белый",
    "stock": 39,
    "cost_price": 1960,
    "spec_opt": null,
    "opt_dyn": 5295,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "зер_ван_белый_лдсп_Зеркало",
    "name": "Шкаф в ванну с 2 зеркальными дверками, ЛДСП, цвет белый_02425",
    "stock": 263,
    "cost_price": 1060,
    "spec_opt": 2760,
    "opt_dyn": 3500,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "зер_ван_белый_лдсп",
    "name": "Шкаф в ванну с зеркалом, ВСЕ ЛДСП, цвет белый_02166",
    "stock": 480,
    "cost_price": 820,
    "spec_opt": 2535,
    "opt_dyn": 2870,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "зер_ван_белый_лдсп_мдф",
    "name": "Шкаф в ванну с МДФ дверкой \"Волна\"_02424",
    "stock": 145,
    "cost_price": 1020,
    "spec_opt": 2940,
    "opt_dyn": 3370,
    "top_category": "Маркеты",
    "sub_category": "Удалённые"
  },
  {
    "article": "DVMGS892",
    "name": "Комод  720_360_766,  кол-ция Лофт 3D, Фасад  Вельвет МДФ Графит Софт,  Дуб Вотан_02650",
    "stock": 52,
    "cost_price": 2220,
    "spec_opt": null,
    "opt_dyn": 5550,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS851",
    "name": "Комод  720_360_766,  кол-ция Лофт 3D, Фасад  Вельвет МДФ СОФТ,  цвет белый_02552",
    "stock": 100,
    "cost_price": 2060,
    "spec_opt": null,
    "opt_dyn": 5565,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1203",
    "name": "Комод \"Лофт Вельвет\" 1200_766_360, 8 ящ, ЛДСП Кашемир, МДФ Кашемир, фурнитура черн.",
    "stock": 0,
    "cost_price": 4060,
    "spec_opt": null,
    "opt_dyn": 9340,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS1214",
    "name": "Комод \"Лофт Вельвет\", белый, 1000_800_360, 3 ящ, 1 дв, опоры конус черные",
    "stock": 1,
    "cost_price": 2570,
    "spec_opt": null,
    "opt_dyn": 5915,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMWS1216",
    "name": "Комод \"Лофт Вельвет\", дуб вотан/белый, 1000_800_360, 3 ящ, 1 дв, опоры конус черные",
    "stock": 0,
    "cost_price": 2720,
    "spec_opt": null,
    "opt_dyn": 6260,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS1215",
    "name": "Комод \"Лофт Вельвет\", дуб вотан/графит, 1000_800_360, 3 ящ, 1 дв, опоры конус черные",
    "stock": 0,
    "cost_price": 2740,
    "spec_opt": null,
    "opt_dyn": 6305,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1202",
    "name": "Комод \"Лофт Вельвет\", кашемир, 1200_800_360, 6 ящ, опора мет,фурнитура черн.",
    "stock": 0,
    "cost_price": 3490,
    "spec_opt": null,
    "opt_dyn": 8030,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS893",
    "name": "Комод 1200_360_766, 8 ящ кол-ция Лофт 3D,  Фасад ВЕЛЬВЕТ МДФ Графит Софт, цвет Дуб Вотан_02651",
    "stock": 0,
    "cost_price": 3920,
    "spec_opt": null,
    "opt_dyn": 9020,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS871",
    "name": "Комод 1200_360_766, кол-ция Лофт 3D, 8 ящ, Фасад ВЕЛЬВЕТ МДФ СОФТ, цвет белый_02604",
    "stock": 248,
    "cost_price": 3650,
    "spec_opt": null,
    "opt_dyn": 8395,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS991",
    "name": "Комод 1200_360_800, 6ящ., опора мет. черн., МДФ Графит, ЛДСП Дуб Вотан , Лофт Вельвет",
    "stock": 389,
    "cost_price": 3580,
    "spec_opt": null,
    "opt_dyn": 8235,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DW02328",
    "name": "Комод 720_360_766, кол-ция Лофт, ЛДСП, цвет белый_02328",
    "stock": 0,
    "cost_price": 1780,
    "spec_opt": null,
    "opt_dyn": 4810,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DGMGS1353",
    "name": "Комод Лофт 1200_800_360, 6ящ., ЛДСП Антрацит / фасады МДФ ВЕЛЬВЕТ Графит, опора мет. конус черн.",
    "stock": 0,
    "cost_price": 3560,
    "spec_opt": null,
    "opt_dyn": 8190,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS932",
    "name": "Комод Лофт 3D 1200_360_800, 6ящ., опора мет. черн., кол-ция, Фасад ВЕЛЬВЕТ МДФ СОФТ,цвет белый_02746",
    "stock": 61,
    "cost_price": 3350,
    "spec_opt": null,
    "opt_dyn": 7705,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1198",
    "name": "Консоль \"Лофт Вельвет\", кашемир, 1000_216_360, 2 ящ, фурнитура черн.",
    "stock": 0,
    "cost_price": 840,
    "spec_opt": null,
    "opt_dyn": 2940,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS914",
    "name": "Консоль подвесная 2 ящ., 1000_360_216, кол-ция Лофт 3D, фасад ВЕЛЬВЕТ МДФ Графит Софт, цвет Дуб Вота",
    "stock": 21,
    "cost_price": 830,
    "spec_opt": null,
    "opt_dyn": 2905,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS904",
    "name": "Консоль подвесная 2 ящ., 1000_360_216, кол-ция Лофт 3D, фасад ВЕЛЬВЕТ МДФ СОФТ, цвет белый_02694",
    "stock": 58,
    "cost_price": 760,
    "spec_opt": null,
    "opt_dyn": 2660,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS891",
    "name": "Консоль подвесная 800_360_216, кол-ция Лофт 3D, фасад ВЕЛЬВЕТ МДФ Графит Софт, цвет Дуб Вотан_02649",
    "stock": 0,
    "cost_price": 910,
    "spec_opt": 2865,
    "opt_dyn": 3005,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS849",
    "name": "Консоль подвесная 800_360_216, кол-ция Лофт 3D, фасад ВЕЛЬВЕТ МДФ СОФТ, цвет белый_02550",
    "stock": 56,
    "cost_price": 830,
    "spec_opt": null,
    "opt_dyn": 2905,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DW02319",
    "name": "Консоль подвесная 800_360_216, кол-ция Лофт,  ЛДСП, цвет белый_02319",
    "stock": 3,
    "cost_price": 750,
    "spec_opt": 2265,
    "opt_dyn": 2625,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS1070",
    "name": "Прикроватная тумба 500_360_486, 2 ящ., опора конус черн,  фасад ВЕЛЬВЕТ МДФ Графит Софт, цвет Дуб Во",
    "stock": 59,
    "cost_price": 1160,
    "spec_opt": null,
    "opt_dyn": 3600,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DGMGS1358",
    "name": "Прикроватная тумба Лофт 500_486_360, 2 ящ, ЛДСП Антрацит/ фасад МДФ ВЕЛЬВЕТ Графит, опора конус черн",
    "stock": 0,
    "cost_price": 1150,
    "spec_opt": null,
    "opt_dyn": 3565,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1201",
    "name": "Прикроватная тумба Лофт Вельвет, 500_486_360, 2 ящ, ЛДСП Кашемир, МДФ Кашемир, опора конус,фурн.черн",
    "stock": 0,
    "cost_price": 1200,
    "spec_opt": null,
    "opt_dyn": 3720,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS907",
    "name": "Прикроватная тумба подвесная 500_360_176,1 ящ.Лофт,фасад ВЕЛЬВЕТ МДФ Графит Софт, Дуб Вотан_02653",
    "stock": 3,
    "cost_price": 630,
    "spec_opt": 2070,
    "opt_dyn": 2205,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS890",
    "name": "Прикроватная тумба подвесная 500_360_336,2 ящ.,фасад ВЕЛЬВЕТ МДФ Графит Софт,цвет Дуб Вотан_02648",
    "stock": 101,
    "cost_price": 960,
    "spec_opt": null,
    "opt_dyn": 3170,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DGMGS1357",
    "name": "Прикроватная тумба подвесная Лофт 500_336_360,2 ящ, ЛДСП Антрацит/ фасад МДФ ВЕЛЬВЕТ Графит,фур.черн",
    "stock": 100,
    "cost_price": 970,
    "spec_opt": null,
    "opt_dyn": 3205,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1200",
    "name": "Прикроватная тумба подвесная Лофт Вельвет, 500_336_360, 2 ящ, ЛДСП Кашемир,МДФ Кашемир, фурнит.черн",
    "stock": 0,
    "cost_price": 990,
    "spec_opt": null,
    "opt_dyn": 3270,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS850",
    "name": "Прикроватная тумба подвесная, 2 ящ.  500_360_336, серия Вельвет, кол-ция Лофт 3D, цвет белый_02551",
    "stock": 78,
    "cost_price": 890,
    "spec_opt": null,
    "opt_dyn": 2940,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS905",
    "name": "Прикроватная тумба подвесная,1 ящ., 500_360_176,кол. Лофт 3D,фасад ВЕЛЬВЕТ МДФ СОФТ,цвет бел_02703",
    "stock": 0,
    "cost_price": 580,
    "spec_opt": 1740,
    "opt_dyn": 2150,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS1037",
    "name": "Прикроватная тумба, 2 ящ. 500_360_486, опора мет. черн., МДФ СОФТ, ЛДСП Белый , Лофт Вельвет_1037",
    "stock": 50,
    "cost_price": 1090,
    "spec_opt": null,
    "opt_dyn": 3600,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1209",
    "name": "Стол письм. Лофт Вельвет 1100_750_550, 4 ящ,ЛДСП Кашемир/МДФ Кашемир,опора мет. конус черн,фурн.черн",
    "stock": 0,
    "cost_price": 2940,
    "spec_opt": null,
    "opt_dyn": 6765,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1210",
    "name": "Стол письм. Лофт Вельвет 1100_750_550,4 ящ,ЛДСП Кашемир/МДФ Кашемир,опора мет.квадрат черн,фурн.черн",
    "stock": 0,
    "cost_price": 3130,
    "spec_opt": null,
    "opt_dyn": 7200,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "SPDG1001",
    "name": "Стол письменный, 4ящ, 110_55_75,  Дуб Вотан/ПВХ графит софт, опора конус чёрн, Лофт Вельвет",
    "stock": 0,
    "cost_price": 3280,
    "spec_opt": null,
    "opt_dyn": 7545,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "SPWM995",
    "name": "Стол письменный, 4ящ, 110_55_75,  ЛДСП Белый/ПВХ софт, опора металл конус чёрн, Лофт Вельвет",
    "stock": 0,
    "cost_price": 2820,
    "spec_opt": null,
    "opt_dyn": 6490,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "SPWM992",
    "name": "Стол письменный, 4ящ, 110_55_75,  ЛДСП Белый/ПВХ софт, опора металл чёрн квадрат Лофт Вельвет",
    "stock": 0,
    "cost_price": 3320,
    "spec_opt": null,
    "opt_dyn": 7640,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "SPDS1039",
    "name": "Стол письменный, 4ящ, 110_55_75,  ЛДСП Темно-Серый/ПВХ графит софт, опора конус чёрн, Лофт Вельвет",
    "stock": 0,
    "cost_price": 3340,
    "spec_opt": null,
    "opt_dyn": 7685,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "SPDS1040",
    "name": "Стол письменный, 4ящ, 110_55_75,  ЛДСП Темно-Серый/ПВХ графит софт, опора чёрный квадрат, Лофт Вельв",
    "stock": 0,
    "cost_price": 3530,
    "spec_opt": 8000,
    "opt_dyn": 8120,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "SPDGM994",
    "name": "Стол письменный, 4ящ, 110_55_75, Дуб Вотан/ПВХ графит софт, опора металл чёрн квадрат Лофт Вельвет",
    "stock": 67,
    "cost_price": 3470,
    "spec_opt": null,
    "opt_dyn": 7985,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS880",
    "name": "Туалетный столик с.2,  800_800_400, 5ящ, серия Вельвет,  кол-ция Лофт 3D, цвет белый_02628",
    "stock": 226,
    "cost_price": 1930,
    "spec_opt": null,
    "opt_dyn": 5630,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS1255",
    "name": "Туалетный столик с.2, 800_800_400, 5ящ, Лофт Вельвет, Дуб Вотан / Графит, фурнит. черн.",
    "stock": 99,
    "cost_price": 2090,
    "spec_opt": null,
    "opt_dyn": 6060,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1291",
    "name": "Туалетный столик с.2, 800_800_400, 5ящ, серия Вельвет, кол-ция Лофт 3D, Кашемир, фурн. черн.",
    "stock": 71,
    "cost_price": 2180,
    "spec_opt": null,
    "opt_dyn": 6325,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS902",
    "name": "Туалетный столик с.3,  1200_800_400, 9 ящ, серия Вельвет,  кол-ция Лофт 3D, цвет белый_02643",
    "stock": 76,
    "cost_price": 3230,
    "spec_opt": null,
    "opt_dyn": 8150,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DGMGS1354",
    "name": "Тумба \"Лофт Вельвет\" 1200_800_360, 3 ящ, 2 дв, ЛДСП Антрацит / МДФ ВЕЛЬВЕТ Графит, опоры конус черн.",
    "stock": 0,
    "cost_price": 3100,
    "spec_opt": null,
    "opt_dyn": 7130,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS1219",
    "name": "Тумба \"Лофт Вельвет\", белый, 1200_800_360, 3 ящ, 2 дв, опоры конус черные",
    "stock": 64,
    "cost_price": 2990,
    "spec_opt": null,
    "opt_dyn": 6880,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMWS1221",
    "name": "Тумба \"Лофт Вельвет\", дуб вотан/ белый, 1200_800_360, 3 ящ, 2 дв, опоры конус черные",
    "stock": 4,
    "cost_price": 3170,
    "spec_opt": null,
    "opt_dyn": 7295,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS1220",
    "name": "Тумба \"Лофт Вельвет\", дуб вотан/ графит, 1200_800_360, 3 ящ, 2 дв, опоры конус черные",
    "stock": 11,
    "cost_price": 3190,
    "spec_opt": null,
    "opt_dyn": 7340,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS854",
    "name": "Тумба под ТВ 1150_360_450, серия Волна, кол-ция Паттерн, цвет белый_02556",
    "stock": 3,
    "cost_price": 1870,
    "spec_opt": null,
    "opt_dyn": 5050,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS1208",
    "name": "Шкаф \"Лофт Вельвет\", белый, 1200_2050_500, 3-створ, фурнитур. черн.",
    "stock": 0,
    "cost_price": 6920,
    "spec_opt": null,
    "opt_dyn": 15920,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS1207",
    "name": "Шкаф \"Лофт Вельвет\", белый, 800_2050_500, 2-створ, фурнитур. черн.",
    "stock": 0,
    "cost_price": 5180,
    "spec_opt": null,
    "opt_dyn": 11915,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1206",
    "name": "Шкаф \"Лофт Вельвет\", кашемир, 1200_2050_500, 3-створ, фурнитур. черн.",
    "stock": 0,
    "cost_price": 7390,
    "spec_opt": null,
    "opt_dyn": 17000,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1204",
    "name": "Шкаф \"Лофт Вельвет\", кашемир, 800_2050_500, 2-створ, 2 ящ, фурнитура черн.",
    "stock": 0,
    "cost_price": 5730,
    "spec_opt": null,
    "opt_dyn": 13180,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DKMKS1205",
    "name": "Шкаф \"Лофт Вельвет\", кашемир, 800_2050_500, 2-створ, фурнитур. черн.",
    "stock": 0,
    "cost_price": 5600,
    "spec_opt": null,
    "opt_dyn": 12880,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMGS894",
    "name": "Шкаф 2052_800_500, кол-ция Лофт 3D, фасад ВЕЛЬВЕТ МДФ Софт / фасад Графит, цвет Дуб Вотан_02652",
    "stock": 75,
    "cost_price": 5510,
    "spec_opt": null,
    "opt_dyn": 12675,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWMWS852",
    "name": "Шкаф 2052_800_500, серия Вельвет СОФТ/ящик ЛДСП, кол-ция 3Д , цвет белый_02553",
    "stock": 76,
    "cost_price": 5280,
    "spec_opt": null,
    "opt_dyn": 12145,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DWS2F02435",
    "name": "Шкаф 2052_802_522, кол-ция Лофт,  цвет белый_02435",
    "stock": 0,
    "cost_price": 5120,
    "spec_opt": null,
    "opt_dyn": 11780,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DGMGS1356",
    "name": "Шкаф Лофт 2052_1201_500, 3-створ., ЛДСП Антрацит / фасад МДФ ВЕЛЬВЕТ Графит, фурнитура черн.",
    "stock": 100,
    "cost_price": 7150,
    "spec_opt": null,
    "opt_dyn": 16445,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DGMGS1355",
    "name": "Шкаф Лофт 2052_800_500, 2 ящ 2 дв, ЛДСП Антрацит/ фасад МДФ ВЕЛЬВЕТ/фасад ящ. МДФ Графит, фурн. черн",
    "stock": 0,
    "cost_price": 5510,
    "spec_opt": null,
    "opt_dyn": 12675,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVMG1169",
    "name": "Шкаф Лофт Вельвет 2-створчатый, 2050_800_500, Графит/Вотан",
    "stock": 1,
    "cost_price": 5420,
    "spec_opt": null,
    "opt_dyn": 12470,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "DVFG1168",
    "name": "Шкаф Лофт Вельвет 3-створчатый, 2052_1201_500, Графит/Вотан",
    "stock": 55,
    "cost_price": 7190,
    "spec_opt": null,
    "opt_dyn": 16540,
    "top_category": "Маркеты",
    "sub_category": "Драуг"
  },
  {
    "article": "WZ2227",
    "name": "Зеркало безрамное 1200х800, цвет белый_00729",
    "stock": 0,
    "cost_price": 2360,
    "spec_opt": null,
    "opt_dyn": 5900,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "WZ2225",
    "name": "Зеркало безрамное 800х800, цвет белый_00789",
    "stock": 0,
    "cost_price": 1960,
    "spec_opt": null,
    "opt_dyn": 5295,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "ZR1127",
    "name": "Зеркало в раме  800_800_48 ОПТИ, ЛДСП, цвет белый",
    "stock": 38,
    "cost_price": 2040,
    "spec_opt": null,
    "opt_dyn": 5510,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWZ1837",
    "name": "Зеркало в раме 1200х800, ЛДСП (розетка и выключатель спереди), цвет белый_01477",
    "stock": 21,
    "cost_price": 2520,
    "spec_opt": null,
    "opt_dyn": 5800,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWZ1830",
    "name": "Зеркало светодиодное 1200х800, цвет белый (С сенсорной кнопкой)_01445",
    "stock": 17,
    "cost_price": 2860,
    "spec_opt": null,
    "opt_dyn": 6580,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWZ1828",
    "name": "Зеркало светодиодное 800*800, цвет белый  (с сенсорной кнопкой)_01431",
    "stock": 0,
    "cost_price": 2500,
    "spec_opt": null,
    "opt_dyn": 6250,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1212",
    "name": "Комод \"Гранд Волна\", белый, 1000_760_372, 3 ящ, 1 дв, опоры прямые золото",
    "stock": 0,
    "cost_price": 2710,
    "spec_opt": null,
    "opt_dyn": 6235,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DKMKS1213",
    "name": "Комод \"Гранд Волна\", кашемир, 1000_760_372, 3 ящ, 1 дв, опоры прямые золото",
    "stock": 0,
    "cost_price": 3000,
    "spec_opt": null,
    "opt_dyn": 6900,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS931",
    "name": "Комод Гранд-Волна 607_370_1190, 5ящ.,мет. опора золото,МДФ, Софт, цвет белый_02745",
    "stock": 0,
    "cost_price": 2690,
    "spec_opt": null,
    "opt_dyn": 6190,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWDS870",
    "name": "Комод Гранд-Волна на дерев. опорах, 1200_370_765, МДФ,6 ящ. Софт, цвет белый_02603",
    "stock": 283,
    "cost_price": 3190,
    "spec_opt": null,
    "opt_dyn": 7340,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DGMGS1292",
    "name": "Комод Гранд-Волна, 1200_370_765, 6ящ, ЛДСП Антрацит / ПВХ Графит, опора золото прямая",
    "stock": 75,
    "cost_price": 3710,
    "spec_opt": null,
    "opt_dyn": 8535,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1137",
    "name": "Комод Гранд-Волна, 4 ящ, МДФ, Софт, цвет белый.720_820_372 опоры золото _1137",
    "stock": 78,
    "cost_price": 2400,
    "spec_opt": null,
    "opt_dyn": 6000,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1139",
    "name": "Комод Гранд-Волна, 4ящ , МДФ, Сатин, цвет Кашемир, опоры золото _1139",
    "stock": 0,
    "cost_price": 2500,
    "spec_opt": null,
    "opt_dyn": 6250,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS02362",
    "name": "Комод Гранд-Волна, 720_370_750, МДФ, Софт, цвет белый_02451",
    "stock": 0,
    "cost_price": 1880,
    "spec_opt": null,
    "opt_dyn": 5080,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1089",
    "name": "Комод Сатин 607_370_1190, 5ящ, опора золото",
    "stock": 0,
    "cost_price": 2620,
    "spec_opt": null,
    "opt_dyn": 6030,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1368",
    "name": "Комод Сатин 720_370_750, 4 ящ, ЛДСП Кашемир, фасады Волна МДФ Кашемир, фурнит. золото_1368",
    "stock": 48,
    "cost_price": 2000,
    "spec_opt": null,
    "opt_dyn": 5400,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1088",
    "name": "Комод Сатин, 1200_370_765, 6ящ, опора золото прямая",
    "stock": 134,
    "cost_price": 3800,
    "spec_opt": null,
    "opt_dyn": 8740,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "2KDWMWS1097",
    "name": "компл.Шкаф Гранд распашной, 2-створчатый, белый софт.",
    "stock": 0,
    "cost_price": 9400,
    "spec_opt": null,
    "opt_dyn": 21620,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "2KDSMKS1133",
    "name": "компл.Шкаф Сатин  распашной, 2-створчатый, МДФ Кашемир",
    "stock": 0,
    "cost_price": 10800,
    "spec_opt": null,
    "opt_dyn": 24840,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS903",
    "name": "Консоль Гранд-Волна подвесная, 2 ящ, 1000_370_200. МДФ, Софт, цвет белый_02695",
    "stock": 103,
    "cost_price": 1170,
    "spec_opt": null,
    "opt_dyn": 3630,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS02365",
    "name": "Консоль Гранд-Волна, 800_370_200, МДФ, Софт, цвет белый_02452",
    "stock": 134,
    "cost_price": 830,
    "spec_opt": 2270,
    "opt_dyn": 2905,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1090",
    "name": "Консоль Сатин Софт 1000_370_200, 2 ящ,  МДФ Кашемир",
    "stock": 63,
    "cost_price": 1320,
    "spec_opt": null,
    "opt_dyn": 4095,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1091",
    "name": "Консоль Сатин, 800_370_200, 1 ящ.",
    "stock": 81,
    "cost_price": 930,
    "spec_opt": null,
    "opt_dyn": 3070,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWPMWS02439",
    "name": "Прикроватная тумба Гранд-Волна (подвесная), 1 ящ, 450_370_200, МДФ (Софт), цвет белый_02439",
    "stock": 0,
    "cost_price": 530,
    "spec_opt": null,
    "opt_dyn": 1965,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWPMWS906",
    "name": "Прикроватная тумба Гранд-Волна (подвесная), 2 ящ, 450_370_398, МДФ (Софт), цвет белый_02702",
    "stock": 97,
    "cost_price": 930,
    "spec_opt": null,
    "opt_dyn": 3070,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS929",
    "name": "Прикроватная тумба Гранд-Волна на метал. ножках,зол, 2 ящ, 450_370_398, МДФ (Софт), цвет белый_02735",
    "stock": 93,
    "cost_price": 1260,
    "spec_opt": null,
    "opt_dyn": 3910,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWDMWS02438",
    "name": "Прикроватная Тумба Гранд-Волна с нишей на дер опорах, 1 ящ, 450_370_550(396), МДФ (Софт), цвет белый",
    "stock": 42,
    "cost_price": 1040,
    "spec_opt": null,
    "opt_dyn": 3435,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS02360",
    "name": "Прикроватная Тумба Гранд-Волна,2ящ, 450_370_480, МДФ , Софт, цвет белый_02457",
    "stock": 0,
    "cost_price": 920,
    "spec_opt": null,
    "opt_dyn": 3040,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DW02315",
    "name": "Прикроватная тумба подвесная 500_360_336, кол-ция Лофт, ЛДСП, цвет белый_02315",
    "stock": 3,
    "cost_price": 800,
    "spec_opt": 2520,
    "opt_dyn": 2800,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1093",
    "name": "Прикроватная тумба Сатин (подвес.) 2 ящ, 450_370_398, ЛДСП Кашемир, МДФ Волна Кашемир, фурнит. золот",
    "stock": 98,
    "cost_price": 1060,
    "spec_opt": null,
    "opt_dyn": 3500,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS11121",
    "name": "Прикроватная тумба Сатин 2 ящ, 450_370_398, ЛДСП Кашемир, МДФ Волна Кашемир, опоры конус золото",
    "stock": 100,
    "cost_price": 1390,
    "spec_opt": null,
    "opt_dyn": 4310,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1092",
    "name": "Прикроватная тумба Сатин, 1 ящ, 450_370_200, подвесная",
    "stock": 0,
    "cost_price": 640,
    "spec_opt": null,
    "opt_dyn": 2240,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "SPKS1096",
    "name": "Стол письменный Сатин Волна, 4ящ, 110_55_75, ЛДСП Кашемир / МДФ Кашемир, опора конус золото",
    "stock": 0,
    "cost_price": 3030,
    "spec_opt": null,
    "opt_dyn": 6970,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "SPWM1000",
    "name": "Стол письменный, 4ящ, 110_55_75, ЛДСП Белый/ПВХ софт, опора золото квадрат Гранд  Волна",
    "stock": 0,
    "cost_price": 3410,
    "spec_opt": null,
    "opt_dyn": 7845,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "SPWM1036",
    "name": "Стол письменный, 4ящ, 110_55_75, ЛДСП Белый/ПВХ софт, опора конус золото, Гранд Волна",
    "stock": 148,
    "cost_price": 3220,
    "spec_opt": 11000,
    "opt_dyn": 8695,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS896",
    "name": "Туалетный столик с.1,  600_800_400, 1 ящ, Гранд-Волна, МДФ, Софт, цвет белый_02645",
    "stock": 10,
    "cost_price": 970,
    "spec_opt": null,
    "opt_dyn": 3205,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS897",
    "name": "Туалетный столик с.1,  800_800_400, 1 ящ, Гранд-Волна, МДФ, Софт, цвет белый_02646",
    "stock": 0,
    "cost_price": 850,
    "spec_opt": 2970,
    "opt_dyn": 2975,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS879",
    "name": "Туалетный столик с.2,  800_800_400, 5 ящ, Гранд-Волна, МДФ, Софт, цвет белый_02627",
    "stock": 334,
    "cost_price": 1940,
    "spec_opt": null,
    "opt_dyn": 5630,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DKMKS1290",
    "name": "Туалетный столик с.2, 800_800_400, 5ящ, Гранд-Волна, ЛДСП Антрацит / ПВХ Графит, фурнит. золото",
    "stock": 181,
    "cost_price": 2160,
    "spec_opt": null,
    "opt_dyn": 6265,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DKMKS1256",
    "name": "Туалетный столик с.2, 800_800_400, 5ящ, Гранд-Волна, Сатин кашемир, фурнит. золото.",
    "stock": 154,
    "cost_price": 2200,
    "spec_opt": null,
    "opt_dyn": 6330,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS898",
    "name": "Туалетный столик с.3,  1200_800_400, 9 ящ, Гранд-Волна, МДФ, Софт, цвет белый_02647",
    "stock": 45,
    "cost_price": 3260,
    "spec_opt": null,
    "opt_dyn": 8150,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1217",
    "name": "Тумба \"Гранд Волна\", белый, 1200_760_372, 3 ящ, 2 дв, опоры прямые золото",
    "stock": 91,
    "cost_price": 3140,
    "spec_opt": null,
    "opt_dyn": 7225,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DKMKS1218",
    "name": "Тумба \"Гранд Волна\", кашемир, 1200_760_372, 3 ящ, 2 дв, опоры прямые золото",
    "stock": 76,
    "cost_price": 3480,
    "spec_opt": null,
    "opt_dyn": 8005,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWDMWS819",
    "name": "Тумба под ТВ Гранд-Волна с нишей на дер опорах,  1148_370_535 МДФ (Софт), цвет белый_02505",
    "stock": 57,
    "cost_price": 2040,
    "spec_opt": null,
    "opt_dyn": 5510,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1094",
    "name": "Тумба под ТВ Сатин Софт,  1148_370_535, опора золото,  МДФ Кашемир",
    "stock": 89,
    "cost_price": 2370,
    "spec_opt": null,
    "opt_dyn": 5925,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS971",
    "name": "Тумба под ТВ Юдичев Волна (Подвесная) 1922_350_400,  цвет белый",
    "stock": 1,
    "cost_price": 2800,
    "spec_opt": null,
    "opt_dyn": 6440,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS823",
    "name": "Тумба под ТВ Юдичев Волна (Подвесная). 1440_350_400, цвет белый_02508",
    "stock": 52,
    "cost_price": 1980,
    "spec_opt": null,
    "opt_dyn": 5350,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1114",
    "name": "Тумба под ТВ Юдичев Волна . 1440_350_550, цвет белый, опоры золото",
    "stock": 36,
    "cost_price": 2480,
    "spec_opt": null,
    "opt_dyn": 6200,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1115",
    "name": "Тумба под ТВ Юдичев Волна 1920_350_500,  цвет белый, опоры золото",
    "stock": 1,
    "cost_price": 3290,
    "spec_opt": null,
    "opt_dyn": 7570,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1095",
    "name": "Шкаф 2052_800_500, Сатин Гранд- Волна / Ящик Волна СОФТ, цвет Кашемир",
    "stock": 70,
    "cost_price": 5750,
    "spec_opt": null,
    "opt_dyn": 13225,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS876",
    "name": "Шкаф 2052_800_500, серия Гранд- Волна / Ящик Волна СОФТ, цвет белый_02617",
    "stock": 182,
    "cost_price": 5260,
    "spec_opt": null,
    "opt_dyn": 12100,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1097",
    "name": "Шкаф Гранд распашной 2-створчатый,2050_800_500, белый, фурнитура золото",
    "stock": 81,
    "cost_price": 5250,
    "spec_opt": null,
    "opt_dyn": 12075,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMS1111",
    "name": "Шкаф Гранд распашной 3-створчатый, 2050_1200_500, белый, фурнитура золото",
    "stock": 77,
    "cost_price": 7010,
    "spec_opt": null,
    "opt_dyn": 16125,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DWMWS1133",
    "name": "Шкаф Сатин 2-створчатый, 2050_800_500, кашемир",
    "stock": 1,
    "cost_price": 5660,
    "spec_opt": null,
    "opt_dyn": 13020,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "DSMKS1134",
    "name": "Шкаф Сатин 3-створчатый, 2052_1201_500, кашемир",
    "stock": 93,
    "cost_price": 7480,
    "spec_opt": null,
    "opt_dyn": 17205,
    "top_category": "Маркеты",
    "sub_category": "ИП Елена"
  },
  {
    "article": "WZ2224",
    "name": "Зеркало безрамное 600х800, цвет белый_00794",
    "stock": 9,
    "cost_price": 1445,
    "spec_opt": null,
    "opt_dyn": 4195,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Безрамное"
  },
  {
    "article": "WZ2226",
    "name": "Зеркало безрамное, ширина 1000х800, цвет белый_00741",
    "stock": 0,
    "cost_price": 1920,
    "spec_opt": null,
    "opt_dyn": 5185,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Безрамное"
  },
  {
    "article": "WZS00798",
    "name": "Зеркало безрамное, ширина 1000х800, цвет Санторини_00798",
    "stock": 0,
    "cost_price": 1300,
    "spec_opt": null,
    "opt_dyn": 4030,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Безрамное"
  },
  {
    "article": "DVZ989",
    "name": "Зеркало в раме  1200_800, цвет Дуб Вотан (розетка выключатель спереди)",
    "stock": 0,
    "cost_price": 2650,
    "spec_opt": 9445,
    "opt_dyn": 6095,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "ZR1126",
    "name": "Зеркало в раме  600_800_48 ОПТИ, ЛДСП, цвет Белый",
    "stock": 34,
    "cost_price": 1670,
    "spec_opt": null,
    "opt_dyn": 4845,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DVZ2149",
    "name": "Зеркало в раме 1200х800, ЛДСП, цвет венге_00735",
    "stock": 5,
    "cost_price": 2450,
    "spec_opt": 4900,
    "opt_dyn": 6125,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DMZ2155",
    "name": "Зеркало в раме 1200х800, ЛДСП, цвет молочный дуб_00736",
    "stock": 53,
    "cost_price": 2450,
    "spec_opt": 5000,
    "opt_dyn": 6125,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DBZ2179",
    "name": "Зеркало в раме 1200х800, цвет Дуб Сонома_01056",
    "stock": 35,
    "cost_price": 2540,
    "spec_opt": 5000,
    "opt_dyn": 5845,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DPZ2722",
    "name": "Зеркало в раме 600х800 (розетка и выключатель спереди), ЛДСП, цвет пальмира_01492",
    "stock": 0,
    "cost_price": 1550,
    "spec_opt": null,
    "opt_dyn": 4495,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DWZ1833",
    "name": "Зеркало в раме 600х800, ЛДСП, цвет белый (розетка и выключатель спереди)_01454",
    "stock": 2,
    "cost_price": 1530,
    "spec_opt": null,
    "opt_dyn": 4440,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DSHZ2642",
    "name": "Зеркало в раме 800х1000, цвет Шампань_00994",
    "stock": 7,
    "cost_price": 1900,
    "spec_opt": 4000,
    "opt_dyn": 5130,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DWZ001",
    "name": "Зеркало в раме 800х1000,( ВЫСОКОЕ) цвет белый ЛДСП (розетка и выключатель спереди)",
    "stock": 0,
    "cost_price": 1800,
    "spec_opt": null,
    "opt_dyn": 4860,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DPZ2164",
    "name": "Зеркало в раме 800х800, ЛДСП пальмира  (розетка и выключатель спереди)_01874",
    "stock": 0,
    "cost_price": 1875,
    "spec_opt": null,
    "opt_dyn": 5065,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DWZ1834",
    "name": "Зеркало в раме 800х800, ЛДСП, цвет белый (розетка и выключатель спереди)_01444",
    "stock": 0,
    "cost_price": 1850,
    "spec_opt": null,
    "opt_dyn": 4995,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DVZ2706",
    "name": "Зеркало в раме 800х800, ЛДСП, цвет венге (розетка и выключатель спереди)_01461",
    "stock": 1,
    "cost_price": 1810,
    "spec_opt": 3700,
    "opt_dyn": 4890,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DSZ2176",
    "name": "Зеркало в раме 800х800, ЛДСП, цвет дуб сонома_01055",
    "stock": 0,
    "cost_price": 1860,
    "spec_opt": null,
    "opt_dyn": 5025,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DBZ2171",
    "name": "Зеркало в раме, ширина 1000х800, ЛДСП (Розетка и выключатель спереди), цвет бетон пайн_01888",
    "stock": 0,
    "cost_price": 2300,
    "spec_opt": null,
    "opt_dyn": 5750,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DWZ2711",
    "name": "Зеркало в раме, ширина 1000х800, ЛДСП, цвет белый (с розеткой и выключателем спереди)_01449",
    "stock": 10,
    "cost_price": 2215,
    "spec_opt": null,
    "opt_dyn": 5540,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DMZ2153",
    "name": "Зеркало в раме, ширина 1000х800, ЛДСП, цвет молочный дуб_01198",
    "stock": 0,
    "cost_price": 2150,
    "spec_opt": null,
    "opt_dyn": 5375,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DSZ2177",
    "name": "Зеркало в раме, ширина 1000х800, цвет Дуб Сонома _01156",
    "stock": 24,
    "cost_price": 2290,
    "spec_opt": 4600,
    "opt_dyn": 5725,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DWZ2773",
    "name": "Зеркало в раме, ширина 1050х800, ЛДСП, цвет белый (без розетки и выключателя)_02616",
    "stock": 0,
    "cost_price": 2210,
    "spec_opt": null,
    "opt_dyn": 5525,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "В раме"
  },
  {
    "article": "DWZ1885",
    "name": "Зеркало Ростовое 1716х662 ЛДСП, цвет белый_01528",
    "stock": 1,
    "cost_price": 2480,
    "spec_opt": null,
    "opt_dyn": 6200,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "DWZ1135",
    "name": "Зеркало Ростовое в раме 1750х800, ЛДСП, цвет белый на подставке с колесиками",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 10200,
    "opt_dyn": null,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "DWZ915",
    "name": "Зеркало Ростовое со стеллажом 1800_800, ЛДСП (под заказ), цвет белый_02685",
    "stock": 0,
    "cost_price": 4825,
    "spec_opt": 20160,
    "opt_dyn": 11100,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "ZS2449",
    "name": "Зеркало Светодиодное 1602х548 мм( с подставкой) _02135",
    "stock": 0,
    "cost_price": 3500,
    "spec_opt": null,
    "opt_dyn": 8050,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "DWZ1888",
    "name": "Подставка для Ростового зеркала 1716х662 с лампочками. ЛДСП, цвет белый_01529",
    "stock": 26,
    "cost_price": 350,
    "spec_opt": null,
    "opt_dyn": 1295,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "DWZ911",
    "name": "Ростовое зеркало  1800_800 со стеллажом, ЛДСП, цвет белый_02654",
    "stock": 0,
    "cost_price": 4755,
    "spec_opt": null,
    "opt_dyn": 10940,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "ZMDF536",
    "name": "Ростовое зеркало с лампочками 1600х600, МДФ глянец, МДФ,цвет Белый",
    "stock": 0,
    "cost_price": 3980,
    "spec_opt": null,
    "opt_dyn": 9155,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "DWPZ1886",
    "name": "Светодиодное ростовое зеркало 180х80 на подставке на пульте, цвет белый_00320",
    "stock": 0,
    "cost_price": 5815,
    "spec_opt": null,
    "opt_dyn": 13375,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "DWZ1890",
    "name": "Стеллаж с ящиками для ростового зеркала 1716х662, цвет белый_01532",
    "stock": 21,
    "cost_price": 2380,
    "spec_opt": null,
    "opt_dyn": 5950,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Ростовые зеркала"
  },
  {
    "article": "DWZ1832",
    "name": "Зеркало светодиодное 1000х800, цвет белый (с сенсорной кнопкой)_01443",
    "stock": 17,
    "cost_price": 2610,
    "spec_opt": null,
    "opt_dyn": 6005,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Светодиодное"
  },
  {
    "article": "DWZ1826",
    "name": "Зеркало светодиодное 600*800, цвет белый (С сенсорной кнопкой)_01432",
    "stock": 15,
    "cost_price": 2520,
    "spec_opt": null,
    "opt_dyn": 5800,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Светодиодное"
  },
  {
    "article": "DWZ1167",
    "name": "Зеркало Ростовое в раме 1800х800, ЛДСП, цвет белый на подставке с колесиками",
    "stock": 0,
    "cost_price": 3170,
    "spec_opt": null,
    "opt_dyn": 7295,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Светодиодное"
  },
  {
    "article": "MWG2556",
    "name": "(150мм) Накладной Фасад на тумбочку МДФ ВОЛНА глянец (детали),цвет белый_02303",
    "stock": 0,
    "cost_price": 120,
    "spec_opt": null,
    "opt_dyn": 445,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DW2542",
    "name": "Подставка прямоугольная  60х23, ЛДСП, цвет белый_00448",
    "stock": 6,
    "cost_price": 65,
    "spec_opt": null,
    "opt_dyn": 245,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DW2520",
    "name": "Подставка прямоугольная 100х23 , цвет белый_00425",
    "stock": 0,
    "cost_price": 150,
    "spec_opt": null,
    "opt_dyn": 555,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DW2837",
    "name": "Подставка прямоугольная 120х23, ЛДСП, цвет белый_00277",
    "stock": 8,
    "cost_price": 130,
    "spec_opt": null,
    "opt_dyn": 485,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DW2772",
    "name": "Подставка прямоугольная 80х23 , цвет белый_00022",
    "stock": 0,
    "cost_price": 95,
    "spec_opt": null,
    "opt_dyn": 355,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DW2521",
    "name": "Полка (под 400) + Жесткость для металлокаркаса 1200 мм, ЛДСП, цвет белый_00480",
    "stock": 16,
    "cost_price": 340,
    "spec_opt": null,
    "opt_dyn": 1260,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DW2231",
    "name": "Стеллаж 800 мм для серии Мини Мастер, ЛДСП, цвет белый_00788",
    "stock": 444,
    "cost_price": 300,
    "spec_opt": 1200,
    "opt_dyn": 1110,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DSDW1299",
    "name": "Тумба прикроватная 3 ящика санторини , Фасад ЛДСП белое",
    "stock": 25,
    "cost_price": 1200,
    "spec_opt": null,
    "opt_dyn": 3720,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Прочее"
  },
  {
    "article": "DB2065",
    "name": "(150 мм) Консоль универсальная ширина 1000х400 мм, ЛДСП, цвет бетон пайн_00635",
    "stock": 0,
    "cost_price": 1000,
    "spec_opt": null,
    "opt_dyn": 3300,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1804",
    "name": "(150 мм) Консоль универсальная ширина 1000х400, цвет белый_00637",
    "stock": 0,
    "cost_price": 760,
    "spec_opt": null,
    "opt_dyn": 2660,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DS2181",
    "name": "(150 мм) Консоль универсальная ширина 1200 мм , ЛДСП, цвет санторини_00638",
    "stock": 0,
    "cost_price": 1130,
    "spec_opt": null,
    "opt_dyn": 3505,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DP1959",
    "name": "(150 мм) Консоль универсальная ширина 600 мм, ЛДСП, цвет пальмира_01026",
    "stock": 0,
    "cost_price": 460,
    "spec_opt": null,
    "opt_dyn": 1705,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1803",
    "name": "(150 мм) Консоль универсальная ширина 800х400, цвет белый_00629",
    "stock": 0,
    "cost_price": 500,
    "spec_opt": null,
    "opt_dyn": 1850,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1879",
    "name": "(150 мм) Накладной фасад на консоль ширина 1000 мм (2 ящика, комплект), ЛДСП, цвет белый_00677",
    "stock": 0,
    "cost_price": 100,
    "spec_opt": null,
    "opt_dyn": 370,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DS2197",
    "name": "(150 мм) Накладной фасад на консоль ширина 1200 мм. (2 ящика), ЛДСП, цвет санторини_00685",
    "stock": 1,
    "cost_price": 150,
    "spec_opt": null,
    "opt_dyn": 555,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DB2069",
    "name": "(150 мм) Накладной фасад на консоль, ширина 1000 мм (2 ящика), ЛДСП, цвет бетон пайн_00678",
    "stock": 0,
    "cost_price": 130,
    "spec_opt": null,
    "opt_dyn": 485,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DS2214",
    "name": "(150 мм) Накладной фасад на тумбочку, ЛДСП (3 детали), цвет санторини_00751",
    "stock": 0,
    "cost_price": 170,
    "spec_opt": null,
    "opt_dyn": 630,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DP1983",
    "name": "(150 мм) Опора высота 800 мм универсальная, ЛДСП, цвет пальмира_00649",
    "stock": 0,
    "cost_price": 200,
    "spec_opt": null,
    "opt_dyn": 740,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DS2205",
    "name": "(150 мм) Опора высота 800 мм. универсальная, ЛДСП, цвет санторини_00648",
    "stock": 0,
    "cost_price": 230,
    "spec_opt": null,
    "opt_dyn": 855,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1810",
    "name": "(150 мм) Опора универсальная, высота 800 мм, ЛДСП, цвет белый_00646",
    "stock": 0,
    "cost_price": 160,
    "spec_opt": null,
    "opt_dyn": 595,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1814",
    "name": "(150 мм) Столешница под накладной фасад 1000х400",
    "stock": 0,
    "cost_price": 200,
    "spec_opt": null,
    "opt_dyn": 740,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DB2041",
    "name": "(150 мм) Столешница под накладной фасад 1000х400, ЛДСП, цвет бетон пайн_00654",
    "stock": 0,
    "cost_price": 250,
    "spec_opt": null,
    "opt_dyn": 925,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DS2195",
    "name": "(150 мм) Столешница под накладной фасад 1200х400, ЛДСП, цвет санторини_00661",
    "stock": 0,
    "cost_price": 350,
    "spec_opt": null,
    "opt_dyn": 1295,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DP1967",
    "name": "(150 мм) Столешница под накладной фасад 600х400, ЛДСП, цвет пальмира_01029",
    "stock": 0,
    "cost_price": 150,
    "spec_opt": null,
    "opt_dyn": 555,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DS2209",
    "name": "(150 мм) Универсальная тумба под высоту 800 мм (3 ящика), ЛДСП, цвет санторини_00746",
    "stock": 0,
    "cost_price": 1370,
    "spec_opt": null,
    "opt_dyn": 4250,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1813",
    "name": "(150 мм)Столешница под накладной фасад 800х400 ЛДСП, цвет белый_00665",
    "stock": 0,
    "cost_price": 170,
    "spec_opt": null,
    "opt_dyn": 630,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1806",
    "name": "(150 мм)Универсальная тумба под высоту 800 мм. (3 ящика), ЛДСП, цвет белый_00744",
    "stock": 89,
    "cost_price": 970,
    "spec_opt": null,
    "opt_dyn": 3205,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1878",
    "name": "(150) Накладной фасад на консоль ширина 800 мм. ЛДСП, цвет белый_00687",
    "stock": 0,
    "cost_price": 70,
    "spec_opt": null,
    "opt_dyn": 260,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1865",
    "name": "(150) Царга шириной 966 мм (под стол 1000мм, 2 опоры), ЛДСП, цвет белый_00699",
    "stock": 0,
    "cost_price": 120,
    "spec_opt": null,
    "opt_dyn": 445,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1867",
    "name": "(150мм) Царга шириной 482х200 (для стола шир. 800 мм.1 тумба), цвет белый_01117",
    "stock": 0,
    "cost_price": 100,
    "spec_opt": null,
    "opt_dyn": 370,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DS2216",
    "name": "(150мм) Царга шириной 882х200 (для стола шир.1200 мм. 1 тумбы), ЛДСП, цвет санторини_01267",
    "stock": 0,
    "cost_price": 190,
    "spec_opt": null,
    "opt_dyn": 705,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC01012",
    "name": "ВКЛАДНОЙ Фасад на консоль ширина 1000 мм (2 ящика, комплект). ЛДСП Дуб сонома_01012",
    "stock": 0,
    "cost_price": 100,
    "spec_opt": null,
    "opt_dyn": 370,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC2108",
    "name": "Вкладной фасад на тумбочку под высоту 800 мм (3 детали), ЛДСП, цвет дуб сонома_01014",
    "stock": 0,
    "cost_price": 140,
    "spec_opt": null,
    "opt_dyn": 520,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1808",
    "name": "Высокая тумба 5 ящиков для консоли, ЛДСП, цвет белый_01493",
    "stock": 32,
    "cost_price": 1500,
    "spec_opt": null,
    "opt_dyn": 4350,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW2440",
    "name": "Комод 600 3 ящ. накл под консоль, ЛДСП, цвет белый_01497",
    "stock": 27,
    "cost_price": 1370,
    "spec_opt": null,
    "opt_dyn": 4250,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC2078",
    "name": "Консоль универсальная ширина 1000 мм, ЛДСП, цвет дуб сонома_00996",
    "stock": 0,
    "cost_price": 930,
    "spec_opt": null,
    "opt_dyn": 3070,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DP01033",
    "name": "Накладной фасад на консоль ширина 600 мм. ЛДСП пальмира_01033",
    "stock": 0,
    "cost_price": 70,
    "spec_opt": null,
    "opt_dyn": 260,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1856",
    "name": "Накладной фасад на тумбочку (3 детали), ЛДСП, цвет белый_00748",
    "stock": 0,
    "cost_price": 120,
    "spec_opt": null,
    "opt_dyn": 445,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC2102",
    "name": "Опора высота 800 мм универсальная, ЛДСП, цвет дуб сонома_00998",
    "stock": 0,
    "cost_price": 200,
    "spec_opt": null,
    "opt_dyn": 740,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW1811",
    "name": "Опора универсальная, высота 1000 мм, ЛДСП, цвет белый_00645 (150 мм)",
    "stock": 0,
    "cost_price": 190,
    "spec_opt": null,
    "opt_dyn": 705,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW2692",
    "name": "Стеллаж 20 ящиков (ЛДСП белый)_00267( Напольный)",
    "stock": 0,
    "cost_price": 3000,
    "spec_opt": null,
    "opt_dyn": 6900,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC2235",
    "name": "Стеллаж 800 мм для серии Мини Мастер, ЛДСП, цвет дуб сонома_01170",
    "stock": 0,
    "cost_price": 400,
    "spec_opt": null,
    "opt_dyn": 1480,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "XDF2841",
    "name": "Стенка  ХДФ для Стеллаж 800 мм для серии Мини Мастер_02437",
    "stock": 17,
    "cost_price": 25,
    "spec_opt": null,
    "opt_dyn": 95,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "MWG1739",
    "name": "Столешница МДФ 800*400 гладкий, пленка глянец, цвет белый_00669",
    "stock": 0,
    "cost_price": 2900,
    "spec_opt": null,
    "opt_dyn": 6670,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC2086",
    "name": "Столешница под вкладной фасад 1000х380 мм, ЛДСП, цвет дуб сонома_01004",
    "stock": 0,
    "cost_price": 250,
    "spec_opt": null,
    "opt_dyn": 925,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC2104",
    "name": "Универсальная тумба под высоту 800 мм (3 ящика), ЛДСП, цвет дуб сонома_01006",
    "stock": 0,
    "cost_price": 1290,
    "spec_opt": null,
    "opt_dyn": 4000,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DW703",
    "name": "Царга 766*200 белый",
    "stock": 0,
    "cost_price": 274,
    "spec_opt": null,
    "opt_dyn": 1015,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DP1955",
    "name": "Царга шириной 566 мм.(под стол 600мм. 2 опоры),ЛДСП, цвет пальмира_00953",
    "stock": 0,
    "cost_price": 100,
    "spec_opt": null,
    "opt_dyn": 370,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DC2120",
    "name": "Царга шириной 682х200 (для стола шир. 1000 мм. 1 тумба), ЛДСП, цвет дуб сонома_01128",
    "stock": 0,
    "cost_price": 120,
    "spec_opt": null,
    "opt_dyn": 445,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "DB00483",
    "name": "Ящик  800х400 белый(Глубина400)_00483",
    "stock": 0,
    "cost_price": 550,
    "spec_opt": null,
    "opt_dyn": 2035,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "S2414",
    "name": "Ящик 120х40 цвет белый",
    "stock": 0,
    "cost_price": 270,
    "spec_opt": null,
    "opt_dyn": 1000,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Консольные детали стола"
  },
  {
    "article": "MB306",
    "name": "Опоры металлические 750х360 мм (под 400), цвет белый_00482",
    "stock": 9,
    "cost_price": 1250,
    "spec_opt": null,
    "opt_dyn": 3875,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Метеллокаркасы"
  },
  {
    "article": "MB305",
    "name": "Опоры металлические 750х360 мм (под 400), цвет черный_00481",
    "stock": 7,
    "cost_price": 1250,
    "spec_opt": null,
    "opt_dyn": 3875,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Метеллокаркасы"
  },
  {
    "article": "DW2543",
    "name": "полка жёсткости для мет.каркаса 800, ЛДСП, цвет белый_00478",
    "stock": 0,
    "cost_price": 230,
    "spec_opt": null,
    "opt_dyn": 855,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Метеллокаркасы"
  },
  {
    "article": "PW660",
    "name": "Пуф парма 2 Белый_00725",
    "stock": 0,
    "cost_price": 1850,
    "spec_opt": 2250,
    "opt_dyn": null,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Пуф"
  },
  {
    "article": "PB661",
    "name": "Пуф Парма 2 Черный_00937",
    "stock": 0,
    "cost_price": 1850,
    "spec_opt": 2300,
    "opt_dyn": 4995,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Пуф"
  },
  {
    "article": "PW662",
    "name": "Пуф Парма-1 белый экокожа_00080",
    "stock": 0,
    "cost_price": 1290,
    "spec_opt": 1290,
    "opt_dyn": null,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Пуф"
  },
  {
    "article": "PB709",
    "name": "Пуф черный_00081",
    "stock": 0,
    "cost_price": 1290,
    "spec_opt": 1600,
    "opt_dyn": null,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Пуф"
  },
  {
    "article": "S2415",
    "name": "00070 Стекло на столешницу 1200х320 для накладных фасадов 4мм_00070",
    "stock": 22,
    "cost_price": 400,
    "spec_opt": 1345,
    "opt_dyn": 1480,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Стекло на столешницу"
  },
  {
    "article": "S2414",
    "name": "00278 Стекло на столешницу 1000х320 для накладных фасадов 4мм_00278",
    "stock": 8,
    "cost_price": 320,
    "spec_opt": 1000,
    "opt_dyn": 1185,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Стекло на столешницу"
  },
  {
    "article": "S2412",
    "name": "Стекло на столешницу 600х320 для накладных фасадов 4мм_00412",
    "stock": 10,
    "cost_price": 165,
    "spec_opt": 500,
    "opt_dyn": 615,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Стекло на столешницу"
  },
  {
    "article": "S2413",
    "name": "Стекло на столешницу 800х320 для накладных фасадов 4мм_00069",
    "stock": 3,
    "cost_price": 255,
    "spec_opt": 880,
    "opt_dyn": 945,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Стекло на столешницу"
  },
  {
    "article": "DWZ1004",
    "name": "Стол 1200_800_700 со стеклянной столешницей,13 ящиков, ЛДСП,с зеркалом в раме 1200_800_55, ЛДСП,белы",
    "stock": 0,
    "cost_price": 10400,
    "spec_opt": null,
    "opt_dyn": 23920,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW986",
    "name": "Стол консольный c.1.1 (Высокий ширина 1050!) 1050_1000_400, 2 ящика, ЛДСП, цвет белый",
    "stock": 0,
    "cost_price": 1500,
    "spec_opt": null,
    "opt_dyn": 4350,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWZ1059",
    "name": "Стол с зеркалом ГримМини 800_400_1550, цвет белый ЛДСП ( на заказ)",
    "stock": 0,
    "cost_price": 1580,
    "spec_opt": null,
    "opt_dyn": 4585,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW2124",
    "name": "Стол со стеллажом 800 мм.  Мастер 110х95х40, пять ящиков, цвет белый_00284",
    "stock": 0,
    "cost_price": 2420,
    "spec_opt": null,
    "opt_dyn": 6050,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DVMK1194",
    "name": "Стол угловой 150х130х72(гл 60) ЛДСП Вотан, фасад Вельвет кашемир",
    "stock": 0,
    "cost_price": null,
    "spec_opt": 9000,
    "opt_dyn": null,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW930",
    "name": "Туалетный столик (высокий ) с.1, 80х100х40 1ящ., ЛДСП белый_02736",
    "stock": 0,
    "cost_price": 1270,
    "spec_opt": null,
    "opt_dyn": 3940,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWZ883",
    "name": "Туалетный столик 1000х1800мм, 1 ящик,  с зеркалом в раме 1000х993, ЛДСП,цвет белый_02636",
    "stock": 0,
    "cost_price": 3530,
    "spec_opt": null,
    "opt_dyn": 8120,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "MWG917",
    "name": "Туалетный столик 1200_800_600 со стеклянной столешницей, 13 ящиков, МДФ пленка глянец, с зеркалом в",
    "stock": 0,
    "cost_price": 12255,
    "spec_opt": null,
    "opt_dyn": 28190,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWM990",
    "name": "Туалетный столик 1200_974_400 на металических ножках с колесиками,2ящ. ЛДСП, Цвет Белай, опоры Белые",
    "stock": 0,
    "cost_price": 4000,
    "spec_opt": 12000,
    "opt_dyn": 9200,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWM981",
    "name": "Туалетный столик 1200_974_400 на металических ножках с колесиками,2ящ. ЛДСП, Цвет Белай,опоры черные",
    "stock": 0,
    "cost_price": 4000,
    "spec_opt": 12000,
    "opt_dyn": 9200,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWZ882",
    "name": "Туалетный столик 2500х1800 мм, 3 ящика, с зеркалом 1000*832, 6 лампочек, цвет белый_02637",
    "stock": 0,
    "cost_price": 8410,
    "spec_opt": null,
    "opt_dyn": 19345,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWM980",
    "name": "Туалетный столик 800_974_400 на металических ножках с колесиками,1ящик ЛДСП, Цвет Белай,опоры черный",
    "stock": 0,
    "cost_price": 3410,
    "spec_opt": 10230,
    "opt_dyn": 7845,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DSZ916",
    "name": "Туалетный столик 900_750_600 на металлических опорах с колесами,  1 ящик, ЛДСП Сонома , цвет каркаса",
    "stock": 0,
    "cost_price": 6635,
    "spec_opt": null,
    "opt_dyn": 15265,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "Гриммини",
    "name": "Туалетный столик с зеркалом Грим Мини, ЛДСП, цвет белый_02554",
    "stock": 0,
    "cost_price": 1605,
    "spec_opt": null,
    "opt_dyn": 4655,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW910",
    "name": "Туалетный столик с.1 80х80х40 один ящик, ЛДСП, цвет белый_02681",
    "stock": 25,
    "cost_price": 1060,
    "spec_opt": null,
    "opt_dyn": 3500,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW918",
    "name": "Туалетный столик с.1, 60х80х40 один ящик, ЛДСП, цвет белый_00281",
    "stock": 25,
    "cost_price": 890,
    "spec_opt": null,
    "opt_dyn": 3240,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWMWS895",
    "name": "Туалетный столик с.2,  1000_800_400, 5 ящ, Гранд-Волна, МДФ, Софт, цвет белый_02644",
    "stock": 152,
    "cost_price": 2070,
    "spec_opt": null,
    "opt_dyn": 6000,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DWMWS899",
    "name": "Туалетный столик с.2,  1000_800_400, 5ящ, серия Вельвет,  кол-ция Лофт 3D, цвет белый_02640",
    "stock": 0,
    "cost_price": 1890,
    "spec_opt": null,
    "opt_dyn": 5105,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW2122",
    "name": "Туалетный столик с.2, 100х80х40, пять ящиков, ЛДСП, цвет белый_00269",
    "stock": 60,
    "cost_price": 1850,
    "spec_opt": null,
    "opt_dyn": 4995,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW1821",
    "name": "Туалетный столик с.2, 80х80х40, пять ящиков, ЛДСП, цвет белый_00199",
    "stock": 95,
    "cost_price": 1700,
    "spec_opt": null,
    "opt_dyn": 4930,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DV2125",
    "name": "Туалетный столик с.2, 80х80х40, пять ящиков, ЛДСП, цвет венге_02448",
    "stock": 0,
    "cost_price": 2225,
    "spec_opt": null,
    "opt_dyn": 5565,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW2123",
    "name": "Туалетный столик с.3 120х80х40, девять ящиков, ЛДСП, цвет белый_00203",
    "stock": 23,
    "cost_price": 2820,
    "spec_opt": null,
    "opt_dyn": 6490,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "DW988",
    "name": "Туалетный столик с.3.1, 120_100_40мм ЛДСП Дуб Вотан",
    "stock": 0,
    "cost_price": 4600,
    "spec_opt": null,
    "opt_dyn": 10580,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Туалетные столы"
  },
  {
    "article": "2СЗеркало80враме+СтеллажМДФВолна",
    "name": "компл. МДФ Туалетный столик с.2 белый 1000, стеллаж зеркало в раме 800 МДФ ВОЛНА",
    "stock": 0,
    "cost_price": 4270,
    "spec_opt": null,
    "opt_dyn": 9825,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "1СЗеркало80Безрамное",
    "name": "компл. Туалетный столик с.1 белый 800,  зеркало безрамное 800",
    "stock": 0,
    "cost_price": 2700,
    "spec_opt": null,
    "opt_dyn": 6210,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "1СЗеркало80вРаме",
    "name": "компл. Туалетный столик с.1 белый 800,  зеркало в раме 800",
    "stock": 0,
    "cost_price": 2745,
    "spec_opt": null,
    "opt_dyn": 6315,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "1СЗеркало60Безрамное+Стеллаж",
    "name": "компл. Туалетный столик с.1 белый 800,  Стеллаж зеркало безрамное 600",
    "stock": 0,
    "cost_price": 2690,
    "spec_opt": null,
    "opt_dyn": 6190,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "1СЗеркало60вРаме+Стеллаж",
    "name": "компл. Туалетный столик с.1 белый 800,  Стеллаж зеркало в раме  600",
    "stock": 0,
    "cost_price": 2775,
    "spec_opt": null,
    "opt_dyn": 6385,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало100Безрамное",
    "name": "компл. Туалетный столик с.2 белый 1000,  зеркало безрамное 1000",
    "stock": 0,
    "cost_price": 3695,
    "spec_opt": null,
    "opt_dyn": 8500,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало100вРаме",
    "name": "компл. Туалетный столик с.2 белый 1000,  зеркало в раме 1000",
    "stock": 0,
    "cost_price": 3990,
    "spec_opt": null,
    "opt_dyn": 9180,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало80Безрамное+Стеллаж",
    "name": "компл. Туалетный столик с.2 белый 1000, стеллаж зеркало безрамное 800",
    "stock": 0,
    "cost_price": 3930,
    "spec_opt": null,
    "opt_dyn": 9040,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало80враме+Стеллаж",
    "name": "компл. Туалетный столик с.2 белый 1000, стеллаж зеркало в раме 800",
    "stock": 0,
    "cost_price": 3975,
    "spec_opt": null,
    "opt_dyn": 9145,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало60вРаме+2Стеллажа",
    "name": "компл. Туалетный столик с.2 белый 1000, стеллаж-2,зеркало в раме 600",
    "stock": 0,
    "cost_price": 4050,
    "spec_opt": null,
    "opt_dyn": 9315,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало80Безрамное",
    "name": "компл. Туалетный столик с.2 белый 800,  зеркало безрамное 800",
    "stock": 0,
    "cost_price": 3525,
    "spec_opt": null,
    "opt_dyn": 8110,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало80вРаме",
    "name": "компл. Туалетный столик с.2 белый 800,  зеркало в раме 800",
    "stock": 0,
    "cost_price": 3570,
    "spec_opt": null,
    "opt_dyn": 8215,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало60Безрамное+Стеллаж",
    "name": "компл. Туалетный столик с.2 белый 800, стеллаж зеркало безрамное 600",
    "stock": 0,
    "cost_price": 3515,
    "spec_opt": null,
    "opt_dyn": 8085,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "2СЗеркало60вРаме+Стеллаж",
    "name": "компл. Туалетный столик с.2 белый 800, стеллаж зеркало в раме 600",
    "stock": 0,
    "cost_price": 3600,
    "spec_opt": null,
    "opt_dyn": 8280,
    "top_category": "Мебель для салонов красоты",
    "sub_category": "Комплекты Туалетные столы"
  },
  {
    "article": "MWGZ697",
    "name": "Зеркало Cube 1170*770, МДФ, белый глянец_02450",
    "stock": 0,
    "cost_price": 1210,
    "spec_opt": null,
    "opt_dyn": 3755,
    "top_category": "Неликвид",
    "sub_category": "Неликвид"
  },
  {
    "article": "MWGZ696",
    "name": "Зеркало Cube 1170*770, МДФ, пленка глянец, цвет черный_02453",
    "stock": 0,
    "cost_price": 1295,
    "spec_opt": null,
    "opt_dyn": 4015,
    "top_category": "Неликвид",
    "sub_category": "Неликвид"
  },
  {
    "article": "ZS927",
    "name": "Зеркало светодиодное O-образное  500_700_48 ОПТИ (выкл. сбоку), цвет белый_02710",
    "stock": 0,
    "cost_price": 1595,
    "spec_opt": null,
    "opt_dyn": 4630,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "ZS928",
    "name": "Зеркало светодиодное П-образное  1000_800_48 ОПТИ, сенсорный выкл, цвет белый_02708",
    "stock": 0,
    "cost_price": 2760,
    "spec_opt": null,
    "opt_dyn": 6350,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "DS926",
    "name": "Зеркало светодиодное П-образное  600_800_48 ОПТИ, сенсорный выкл, цвет белый_02707",
    "stock": 0,
    "cost_price": 2400,
    "spec_opt": null,
    "opt_dyn": 6000,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "ZS925",
    "name": "Зеркало светодиодное П-образное  800_800_48 ОПТИ, сенсорный выкл, цвет белый_02709",
    "stock": 0,
    "cost_price": 2440,
    "spec_opt": null,
    "opt_dyn": 6100,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "DWMWGZ982",
    "name": "Навесной шкафчик в ванную с зеркалом 600_800_160, ЛДСП белый/МДФ белый глянец",
    "stock": 0,
    "cost_price": 1350,
    "spec_opt": null,
    "opt_dyn": 4185,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "DVMGZ983",
    "name": "Навесной шкафчик в ванную с зеркалом 600_800_160, ЛДСП Дуб Вотан/МДФ графит софт",
    "stock": 0,
    "cost_price": 1450,
    "spec_opt": null,
    "opt_dyn": 4205,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "SPWM1033",
    "name": "Стол письменный  110_55_75, ЛДСП Белый,  опора черный квадрат",
    "stock": 0,
    "cost_price": 1690,
    "spec_opt": null,
    "opt_dyn": 4905,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "SPDM1034",
    "name": "Стол письменный  110_55_75, ЛДСП Дуб Вотан, опора черный квадрат",
    "stock": 0,
    "cost_price": 1690,
    "spec_opt": null,
    "opt_dyn": 4905,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "SPSM1035",
    "name": "Стол письменный  110_55_75, ЛДСП Темно-серый, опора черный квадрат",
    "stock": 0,
    "cost_price": 1700,
    "spec_opt": null,
    "opt_dyn": 4930,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "SPWM1032",
    "name": "Стол письменный 110_55_75,  ЛДСП Белый,  опора золото квадрат",
    "stock": 0,
    "cost_price": 1850,
    "spec_opt": null,
    "opt_dyn": 4995,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "SPWD993",
    "name": "Стол письменный 1100_750_550, ЛДСП Белый, 2ящ, опора дерево лак",
    "stock": 0,
    "cost_price": 1690,
    "spec_opt": null,
    "opt_dyn": 4905,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "DK1211",
    "name": "Стол письменный Лофт 1100_750_550, ЛДСП Кашемир, опоры мет. квадрат черн.",
    "stock": 0,
    "cost_price": 1250,
    "spec_opt": null,
    "opt_dyn": 3875,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00301Б1294",
    "name": "Шкаф в ванную UNI 600_750_200, 1 дв. с зеркалом, Белый",
    "stock": 0,
    "cost_price": 1030,
    "spec_opt": null,
    "opt_dyn": 3400,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00301Г1295",
    "name": "Шкаф в ванную UNI 600_750_200, 1 дв. с зеркалом, Графит",
    "stock": 0,
    "cost_price": 1130,
    "spec_opt": null,
    "opt_dyn": 3505,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00301В1296",
    "name": "Шкаф в ванную UNI 600_750_200, 1 дв. с зеркалом, Дуб Вотан",
    "stock": 0,
    "cost_price": 1090,
    "spec_opt": null,
    "opt_dyn": 3600,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00301К1297",
    "name": "Шкаф в ванную UNI 600_750_200, 1 дв. с зеркалом, Кашемир",
    "stock": 0,
    "cost_price": 1150,
    "spec_opt": null,
    "opt_dyn": 3565,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00302Б1335",
    "name": "Шкаф в ванную UNI 750_750_200, 1 дв. с зеркалом, Белый",
    "stock": 0,
    "cost_price": 1320,
    "spec_opt": null,
    "opt_dyn": 4095,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00302Г1336",
    "name": "Шкаф в ванную UNI 750_750_200, 1 дв. с зеркалом, Графит",
    "stock": 0,
    "cost_price": 1470,
    "spec_opt": null,
    "opt_dyn": 4265,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00302В1337",
    "name": "Шкаф в ванную UNI 750_750_200, 1 дв. с зеркалом, Дуб Вотан",
    "stock": 0,
    "cost_price": 1410,
    "spec_opt": null,
    "opt_dyn": 4090,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00302К1338",
    "name": "Шкаф в ванную UNI 750_750_200, 1 дв. с зеркалом, Кашемир",
    "stock": 0,
    "cost_price": 1490,
    "spec_opt": null,
    "opt_dyn": 4325,
    "top_category": "Разработки",
    "sub_category": "Разработки"
  },
  {
    "article": "СМФ00904Г1309",
    "name": "Пенал Contline Волна 2 двери 300_1714_300 ЛДСП Антрацит / ПВХ Графит",
    "stock": 0,
    "cost_price": 2040,
    "spec_opt": null,
    "opt_dyn": 5510,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00904К1308",
    "name": "Пенал Contline Волна 2 двери 300_1714_300 ЛДСП Кашемир / ПВХ Кашемир",
    "stock": 0,
    "cost_price": 1900,
    "spec_opt": null,
    "opt_dyn": 5130,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00901Г1310",
    "name": "Тумба Contline Волна 1 ящ. 664_438_451 ЛДСП Антрацит, без столешн., фасад Графит, фурн. черн.",
    "stock": 0,
    "cost_price": 1570,
    "spec_opt": null,
    "opt_dyn": 4555,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00901К1311",
    "name": "Тумба Contline Волна 1 ящ. 664_438_451 ЛДСП Кашемир, без столешн., фасад Кашемир, фурн. золот.",
    "stock": 0,
    "cost_price": 1500,
    "spec_opt": null,
    "opt_dyn": 4350,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00905ГШ1315",
    "name": "Тумба Contline Волна 1 ящ. 668_454_455 ЛДСП Антрацит, столеш. МДФ Секвойя, фасад Графит, фурн.черн.",
    "stock": 0,
    "cost_price": 1920,
    "spec_opt": null,
    "opt_dyn": 5185,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00905Б1265",
    "name": "Тумба Contline Волна 1 ящ. 668_454_455 ЛДСП Белый, столеш. МДФ Белый, фасад Белый Софт, фурн. золот.",
    "stock": 0,
    "cost_price": 1710,
    "spec_opt": null,
    "opt_dyn": 4620,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00905БШ1313",
    "name": "Тумба Contline Волна 1 ящ. 668_454_455 ЛДСП Белый, столеш. МДФ Секвойя, фасад Белый Софт, фурн.черн.",
    "stock": 0,
    "cost_price": 1720,
    "spec_opt": null,
    "opt_dyn": 4645,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00905К1312",
    "name": "Тумба Contline Волна 1 ящ. 668_454_455 ЛДСП Кашемир, столеш. МДФ Кашемир, фасад Кашемир, фурн. золот",
    "stock": 0,
    "cost_price": 1870,
    "spec_opt": null,
    "opt_dyn": 5050,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00905КШ1314",
    "name": "Тумба Contline Волна 1 ящ. 668_454_455 ЛДСП Кашемир, столеш. МДФ Секвойя, фасад Кашемир, фурн.черн.",
    "stock": 0,
    "cost_price": 1850,
    "spec_opt": null,
    "opt_dyn": 4995,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00903Г1323",
    "name": "Тумба Contline Волна 2 ств. 664_550_451 ЛДСП Антрацит, без столешн., фасад Графит, фурн. черн.",
    "stock": 0,
    "cost_price": 1820,
    "spec_opt": null,
    "opt_dyn": 4915,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00903К1322",
    "name": "Тумба Contline Волна 2 ств. 664_550_451 ЛДСП Кашемир, без столешн., фасад Кашемир, фурн. золот.",
    "stock": 0,
    "cost_price": 1720,
    "spec_opt": null,
    "opt_dyn": 4645,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00907ГШ1327",
    "name": "Тумба Contline Волна 2 ств. 668_566_455 ЛДСП Антрацит, столеш. МДФ Секвойя, фасад Графит, фурн.черн.",
    "stock": 0,
    "cost_price": 2170,
    "spec_opt": null,
    "opt_dyn": 5425,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00907Б1267",
    "name": "Тумба Contline Волна 2 ств. 668_566_455 ЛДСП Белый, столеш. МДФ Белый, фасад Белый Софт, фурн. золот",
    "stock": 0,
    "cost_price": 1920,
    "spec_opt": null,
    "opt_dyn": 5185,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00907БШ1325",
    "name": "Тумба Contline Волна 2 ств. 668_566_455 ЛДСП Белый, столеш. МДФ Секвойя, фасад Белый Софт, фурн.черн",
    "stock": 0,
    "cost_price": 1930,
    "spec_opt": null,
    "opt_dyn": 5215,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00907К1324",
    "name": "Тумба Contline Волна 2 ств. 668_566_455 ЛДСП Кашемир, столеш. МДФ Кашемир, фасад Кашемир, фурн.золот",
    "stock": 0,
    "cost_price": 2100,
    "spec_opt": null,
    "opt_dyn": 5670,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00907КШ1326",
    "name": "Тумба Contline Волна 2 ств. 668_566_455 ЛДСП Кашемир, столеш. МДФ Секвойя, фасад Кашемир, фурн.черн.",
    "stock": 0,
    "cost_price": 2070,
    "spec_opt": null,
    "opt_dyn": 5590,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00902Г1317",
    "name": "Тумба Contline Волна 2 ящ. 664_550_451 ЛДСП Антрацит, без столешн., фасад Графит, фурн. черн.",
    "stock": 0,
    "cost_price": 2060,
    "spec_opt": null,
    "opt_dyn": 5565,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00902К1316",
    "name": "Тумба Contline Волна 2 ящ. 664_550_451 ЛДСП Кашемир, без столешн., фасад Кашемир, фурн. золот.",
    "stock": 0,
    "cost_price": 1970,
    "spec_opt": null,
    "opt_dyn": 5320,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00906ГШ1321",
    "name": "Тумба Contline Волна 2 ящ. 668_566_455 ЛДСП Антрацит, столеш. МДФ Секвойя, фасад Графит, фурн.черн.",
    "stock": 0,
    "cost_price": 2420,
    "spec_opt": null,
    "opt_dyn": 6050,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00906БШ1319",
    "name": "Тумба Contline Волна 2 ящ. 668_566_455 ЛДСП Белый, столеш. МДФ Секвойя, фасад Белый Софт, фурн.черн.",
    "stock": 0,
    "cost_price": 2120,
    "spec_opt": null,
    "opt_dyn": 5300,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00906К1318",
    "name": "Тумба Contline Волна 2 ящ. 668_566_455 ЛДСП Кашемир, столеш. МДФ Кашемир, фасад Кашемир, фурн. золот",
    "stock": 0,
    "cost_price": 2340,
    "spec_opt": null,
    "opt_dyn": 5850,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00906КШ1320",
    "name": "Тумба Contline Волна 2 ящ. 668_566_455 ЛДСП Кашемир, столеш. МДФ Секвойя, фасад Кашемир, фурн.черн.",
    "stock": 0,
    "cost_price": 2320,
    "spec_opt": null,
    "opt_dyn": 5800,
    "top_category": "Разработки",
    "sub_category": "Contline"
  },
  {
    "article": "СМФ00601Б1282",
    "name": "Комод Loppa 3 ящика 1 дверь 998_834_356 ЛДСП Белый / МДФ Белый Софт, фурн.золото",
    "stock": 0,
    "cost_price": 3110,
    "spec_opt": null,
    "opt_dyn": 7155,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00601К1283",
    "name": "Комод Loppa 3 ящика 1 дверь 998_834_356 ЛДСП Кашемир / МДФ Кашемир, фурн.графит",
    "stock": 0,
    "cost_price": 3370,
    "spec_opt": null,
    "opt_dyn": 7755,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00602Б1284",
    "name": "Комод Loppa 3 ящика 2 дверь 1198_834_356 ЛДСП Белый / МДФ Белый Софт, фурн.золото",
    "stock": 0,
    "cost_price": 3630,
    "spec_opt": null,
    "opt_dyn": 8350,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00602К1285",
    "name": "Комод Loppa 3 ящика 2 дверь 1198_834_356 ЛДСП Кашемир / МДФ Кашемир, фурн.графит",
    "stock": 0,
    "cost_price": 3940,
    "spec_opt": null,
    "opt_dyn": 9065,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00603Б1286",
    "name": "Тумба Loppa 2 ящика 1 дверь 998_482_356 ЛДСП Белый / МДФ Белый Софт, фурн.золото",
    "stock": 0,
    "cost_price": 2210,
    "spec_opt": null,
    "opt_dyn": 5525,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00603К1287",
    "name": "Тумба Loppa 2 ящика 1 дверь 998_482_356 ЛДСП Кашемир / МДФ Кашемир, фурн.графит",
    "stock": 0,
    "cost_price": 2380,
    "spec_opt": null,
    "opt_dyn": 5950,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00604Б1288",
    "name": "Тумба Loppa 2 ящика 2 двери 1198_482_356 ЛДСП Белый / МДФ Белый Софт, фурн.золото",
    "stock": 0,
    "cost_price": 2510,
    "spec_opt": null,
    "opt_dyn": 5775,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00604К1289",
    "name": "Тумба Loppa 2 ящика 2 двери 1198_482_356 ЛДСП Кашемир / МДФ Кашемир, фурн.графит",
    "stock": 0,
    "cost_price": 2720,
    "spec_opt": null,
    "opt_dyn": 6260,
    "top_category": "Разработки",
    "sub_category": "Loppa"
  },
  {
    "article": "СМФ00801Д1303",
    "name": "Комод 3 ящика 2 двери Каселла 1200_782_403, ЛДСП Дуб Кармен, опоры бук",
    "stock": 0,
    "cost_price": 4280,
    "spec_opt": null,
    "opt_dyn": 9845,
    "top_category": "Разработки",
    "sub_category": "Каселла"
  },
  {
    "article": "СМФ00803Д1305",
    "name": "Комод 5 ящиков 2 двери Каселла 1200_782_403, ЛДСП Дуб Кармен, опоры бук",
    "stock": 0,
    "cost_price": 4790,
    "spec_opt": null,
    "opt_dyn": 11020,
    "top_category": "Разработки",
    "sub_category": "Каселла"
  },
  {
    "article": "СМФ00802Д1304",
    "name": "Комод 6 ящиков Каселла 1200_782_403, ЛДСП Дуб Кармен, опоры бук",
    "stock": 0,
    "cost_price": 4650,
    "spec_opt": null,
    "opt_dyn": 10695,
    "top_category": "Разработки",
    "sub_category": "Каселла"
  },
  {
    "article": "СМФ00805Д1307",
    "name": "Стол письменный Каселла 1200_754_600, ЛДСП Дуб Кармен, опоры бук",
    "stock": 0,
    "cost_price": 4020,
    "spec_opt": null,
    "opt_dyn": 9250,
    "top_category": "Разработки",
    "sub_category": "Каселла"
  },
  {
    "article": "СМФ00804Д1306",
    "name": "Тумба под ТВ 3 двери Каселла 1782_534_403, ЛДСП Дуб Кармен, опоры бук",
    "stock": 0,
    "cost_price": 3280,
    "spec_opt": null,
    "opt_dyn": 7545,
    "top_category": "Разработки",
    "sub_category": "Каселла"
  },
  {
    "article": "СМФ01304К1332",
    "name": "Комод Фенстер 4 ящика 4 двери 1602_798_350 Кашемир фурн.чёрный",
    "stock": 0,
    "cost_price": 4580,
    "spec_opt": null,
    "opt_dyn": 10535,
    "top_category": "Разработки",
    "sub_category": "Фенстер"
  },
  {
    "article": "СМФ01302К1330",
    "name": "Комод Фенстер 5 ящиков 2 двери 1202_798_350 Кашемир фурн.чёрный",
    "stock": 0,
    "cost_price": 3830,
    "spec_opt": null,
    "opt_dyn": 8810,
    "top_category": "Разработки",
    "sub_category": "Фенстер"
  },
  {
    "article": "СМФ01303К1331",
    "name": "Комод Фенстер 6 ящиков 1202_798_350 Кашемир фурн.чёрный",
    "stock": 0,
    "cost_price": 3640,
    "spec_opt": null,
    "opt_dyn": 8375,
    "top_category": "Разработки",
    "sub_category": "Фенстер"
  },
  {
    "article": "СМФ01306К1334",
    "name": "Стол туалетный Фенстер 1090_267_404 Кашемир фурн.чёрный",
    "stock": 0,
    "cost_price": 1460,
    "spec_opt": null,
    "opt_dyn": 4235,
    "top_category": "Разработки",
    "sub_category": "Фенстер"
  },
  {
    "article": "СМФ01305К1333",
    "name": "Тумба под ТВ Фенстер 3 двери 1602_512_350 Кашемир фурн.чёрный",
    "stock": 0,
    "cost_price": 2440,
    "spec_opt": null,
    "opt_dyn": 6100,
    "top_category": "Разработки",
    "sub_category": "Фенстер"
  }
];