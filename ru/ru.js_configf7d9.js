bm_jquery.extend(true, bm.namespace("config"), {swipeNav : {"isActive": true},  queryCookieName: "bm_query_cookie" ,carConfigurator : {"appConfig": {"usePushState": true}}, dealerLocator : {
  "usePushState": true,
  "defaultImage": "https://www.bentleymotors.com/content/dam/bentley/Master/POM/BM_logo_haptic-sim_4c_pos_300dpi%20150%20x%2075%20for%20dealer%20locator.jpg",
  "filterOptions": [
    {
    "id": "service",
    "imagePath": "/content/dam/bentley/Master/POM/dealer%20locator/Bentley%20Service%20SERVICE1%201%20HERO%20415%20x%20145.jpg",
    "initial": true,
    "exclusive": false
    },
    {
    "id": "sales",
    "imagePath": "/content/dam/bentley/Master/POM/dealer%20locator/CW1%20House%20415%20x%20145%20dealer%20image%20sales.jpg",
    "initial": true,
    "exclusive": false
    },
    {
    "id": "pre-owned",
    "imagePath": "/content/dam/bentley/Master/POM/dealer%20locator/BDA0013715%20415%20x%20145.jpg",
    "initial": true,
    "exclusive": false
    }
  ],
  "searchNearest": 3,
  "searchThreshold": 100,
  "gridSize": 10,
  "staticMap": {"icons": {
    "pin": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin.png",
    "pinOrigin": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin_a.png",
    "pinDestination": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin_z.png"
    }},
  "inlineMap": {"icons": {
    "pin": {
      "url": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/pin_black.png",
      "width": 16,
      "height": 29
      },
    "pinUnselected": {
      "url": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/pin_gray.png",
      "width": 16,
      "height": 29
      },
    "pinCluster": {
      "url": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/pin_black.png",
      "width": 16,
      "height": 29
      },
    "pinClusterUnselected": {
      "url": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/pin_gray.png",
      "width": 16,
      "height": 29
      },
    "pinOrigin": {
      "url": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin_a.png",
      "width": 26,
      "height": 44
      },
    "pinDestination": {
      "url": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin_z.png",
      "width": 26,
      "height": 44
      }
    }},
  "suggestions": {
    "total": 8,
    "maxDealers": 4
    },
  "mapServiceConfig": {
    "google": {
      "staticMap": {"url": "//maps.googleapis.com/maps/api/staticmap?"},
      "inlineMap": {"url": "//maps.googleapis.com/maps/api/js?libraries=geometry,places&v=3.39&key=AIzaSyApFNmBILF7qkTClwqpKjKgs4cfwKhGZ5w&language=ru"}
      },
    "baidu": {
      "country": "china",
      "countryFilter": [
        "China",
        "Macau SAR",
        "Hong Kong"
      ],
      "gridSize": 20,
      "staticMap": {
        "url": "//api.map.baidu.com/staticimage?",
        "icons": {
          "pin": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin.png",
          "pinOrigin": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin_a.png",
          "pinDestination": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_pin_z.png"
          }
        },
      "inlineMap": {"url": "//api.map.baidu.com/api?v=2.0"}
      }
    },
  "maxZoom": 5
  }, contactLocator : {"marker": {
  "url": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/pin_black.png",
  "width": 16,
  "height": 29
  }}, anchorCta : {
  "maxPageDisplays": 0,
  "minPageVisits": 0,
  "videoDisplayDelay": 0
  }, modelComparison : {
  "imageEmptySelection": {
    "s": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/modelcomp_sel_empty_s.jpg",
    "m": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/modelcomp_sel_empty_m.jpg"
    },
  "defaultModelsLeft": {
    "s": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/modelcomp_default_left_s.jpg",
    "m": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/modelcomp_default_left_m.jpg"
    },
  "defaultModelsRight": {
    "s": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/modelcomp_sel_empty_s.jpg",
    "m": "https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/modelcomp_sel_empty_m.jpg"
    }
  }, tracking : {
  "gallery": "Gallery Views",
  "share": "Social Media"
  }, consentManagement : {"enabled": false}, shareEnabled: false});bm_jquery.extend(bm.namespace("i18n"), {formValidation : {"mailError": "Please enter a valid email address."}, visualRangePreview : {
  "preTitle": "Your selection",
  "edit": "Edit"
  }, colorbox : {
  "next": "Next",
  "previous": "Previous",
  "close": "Close"
  }, gallery : {
  "open": "Просмотр всей галереи",
  "close": "Закрыть галерею"
  }, modelComparison : {
  "change": "Change model",
  "view": "View full spec",
  "configure": "Configure",
  "emptySelection": "Compare models by selecting from the choice below ",
  "emptySelectorList": "No more vehicles to display in this category "
  }, contactLocator : {
  "territorySelect": {"label": "Select territory"},
  "officeLocation": {"headline": "Office Location"}
  }, dealerLocator : {
  "unitName": "миль",
  "unitConversion": 0.62137,
  "back": "Назад",
  "title": {
    "global": "Поиск дилера",
    "china": "China Dealer Locator"
    },
  "viewOnMaps": {
    "google": "Посмотреть в Google Maps",
    "baidu": "View in Baidu Maps"
    },
  "result": {
    "storeMap": "Карта",
    "openingHours": "Режим работы",
    "viewDetails": "Подробная информация",
    "requestContact": "Отправить сообщение",
    "getDirections": "Построить маршрут",
    "viewDealerWebsite": "Перейти на сайт дилера",
    "storeClosed": "Закрыт",
    "byAppointment": "По предварительной записи",
    "empty": "Дилеры не найдены",
    "chooseLocation": "Выбрать местоположение",
    "preowned": "Автомобили с пробегом"
    },
  "searchBar": {
    "label": "Поиск поблизости",
    "currentLocation": "Текущее местоположение",
    "searchPositionState": "Поиск..."
    },
  "resultInfo": {
    "label": "Результаты поиска",
    "detailText": {
      "empty": "Дилеры не найдены '{term}'",
      "one": "Один дилер поблизости '{term}'",
      "multi": "{count}Дилеры поблизости '{term}'"
      }
    },
  "filterOptions": {
    "service": "Сервисные услуги",
    "sales": "Продажа новых автомобилей",
    "pre-owned": "Автомобили с пробегом"
    },
  "searchOptions": {
    "sales": "Продажа новых автомобилей",
    "service": "Сервисные услуги",
    "pre-owned": "Автомобили с пробегом"
    },
  "breadcrumb": {
    "result": "Результаты поиска",
    "details": "Подробная информация",
    "directions": "Направления",
    "dealerResult": "Найден '{dealerName}'"
    },
  "departmentClosed": "Закрыт",
  "error": {
    "fetchDealer": " Ошибка при загрузке данных. Пожалуйста, проверьте подключение к сети Интернет ",
    "dealerNotFound": "Дилер не найден",
    "departmentNotFound": "Дилер не найден",
    "geolocation": {
      "permissionDenied": " Пожалуйста, разрешите использование функции геолокации ",
      "positionUnavailable": " Ваше местоположение не определено. Проверьте активирован ли модуль GPS ",
      "timeout": " При определении вашей геолокации произошел сбой. Пожалуйста, попробуйте еще раз "
      },
    "geocoder.google": {
      "zeroResults": "Результаты поиска не найдены",
      "unknown": "Ошибка поиска элемента"
      },
    "geocoder.baidu": " No Result found for the search term. It is only possible to search for Chinese locations in Chinese language ",
    "googleDirectonsService": {
      "zeroResults": " Не удалось найти маршрут ",
      "unknown": " Запрос не может быть обработан из-за ошибки сервера "
      },
    "unknown": "Неизвестная ошибка",
    "invalidUrl": "Указан недействительный URL адрес"
    }
  }, dealerSelect : {
  "moreDetails": "More Details",
  "selectDealer": "Select this dealer",
  "selectDealerError": "Please select a dealer from the list below",
  "skipSuggestionsError": "Please use one of the suggestions and select a dealer with the Select button",
  "editDealer": "Edit this dealer",
  "showMore": "Show more",
  "emptyResult": "No dealers found for '{term}'",
  "singleResult": "{count} dealer found for '{term}'",
  "multiResult": "{count} dealers found for '{term}'",
  "preferredDealer": "Preferred Dealer",
  "openingHours": "Opening hours",
  "closed": "Closed",
  "requestContact": "Request contact",
  "viewWebsite": "View dealer website"
  }, unsupportedBrowser : {
  "carConfigurator": {
    "block": {
      "title": "Unsupported Browser",
      "description": "The site you are visiting can only be viewed using a modern browser. Please upgrade your browser to increase safety and your browsing experience."
      },
    "warning": {
      "title": "Unsupported Browser",
      "description": "The site you are visiting might not work correctly with your browser. We recommend you to upgrade your browser for the best viewing experience.",
      "buttonLabel": "Visit anyway"
      }
    },
  "bentleyMotors": {
    "block": {
      "title": "Unsupported Browser",
      "description": "The site you are visiting can only be viewed using a modern browser. Please upgrade your browser to increase safety and your browsing experience."
      },
    "warning": {
      "title": "Unsupported Browser",
      "description": "The site you are visiting might not work correctly with your browser. We recommend you to upgrade your browser for the best viewing experience.",
      "buttonLabel": "Visit anyway "
      }
    }
  }, consentManagement : {"overlay": {
  "description": "You have chosen to not allow a cookie that is required for this component to be displayed. Please enable 3rd Party Cookies in your cookie settings, and then reload your browser page.",
  "btn": "Open Settings",
  "error": "An Error occured while checking your cookie settings in order to verify that you allowed to display this component."
  }}});