bm_jquery.extend(true, bm.namespace("config"), {swipeNav : {"isActive": true},  queryCookieName: "bm_query_cookie" ,carConfigurator : {"appConfig": {"usePushState": true}}, dealerLocator : {
  "usePushState": true,
  "filterOptions": [],
  "searchNearest": 3,
  "searchThreshold": 20,
  "gridSize": 50,
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
    "maxDealers": 0
    },
  "mapServiceConfig": {
    "google": {
      "staticMap": {"url": "//maps.googleapis.com/maps/api/staticmap?"},
      "inlineMap": {"url": "//maps.googleapis.com/maps/api/js?libraries=geometry,places&v=3.39&language=zh"}
      },
    "baidu": {
      "country": "china",
      "countryFilter": [],
      "gridSize": 10,
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
  "maxZoom": 6
  }, youkuPlayer : {"client_id": "72a815f07454caea"}, contactLocator : {"marker": {
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
  "open": "查看全部图片",
  "close": "关闭图库"
  }, modelComparison : {
  "change": "Change model",
  "view": "View full spec",
  "configure": "Configure",
  "emptySelection": "Compare models by selecting from the choice below\n            ",
  "emptySelectorList": "No more vehicles to display in this category\n            "
  }, contactLocator : {
  "territorySelect": {"label": "Select territory"},
  "officeLocation": {"headline": "Office Location"}
  }, dealerLocator : {
  "unitName": "mi",
  "unitConversion": 0.62137,
  "back": "Back",
  "title": {
    "global": "Global Dealer Locator",
    "china": "China Dealer Locator"
    },
  "viewOnMaps": {
    "google": "View in Google Maps",
    "baidu": "View in Baidu Maps"
    },
  "result": {
    "storeMap": "Map",
    "openingHours": "Opening Hours",
    "viewDetails": "View all Details",
    "requestContact": "Request Contact",
    "getDirections": "Get Directions",
    "viewDealerWebsite": "View Dealer Website",
    "storeClosed": "Closed",
    "byAppointment": "By Appointment",
    "empty": "No dealers were found",
    "chooseLocation": "Choose your location",
    "preowned": "Pre-Owned"
    },
  "searchBar": {
    "label": "I'm looking around",
    "currentLocation": "My current Location",
    "searchPositionState": "Searching..."
    },
  "resultInfo": {
    "label": "Search Results",
    "detailText": {
      "empty": "No Dealers found around '{term}'",
      "one": "One Dealer around '{term}'",
      "multi": "{count} Dealers around '{term}'"
      }
    },
  "filterOptions": {},
  "searchOptions": {
    "sales": "Sales",
    "service": "Service",
    "pre-owned": "Pre-Owned"
    },
  "breadcrumb": {
    "result": "Search Result",
    "details": "Details",
    "directions": "Directions",
    "dealerResult": "Search '{dealerName}'"
    },
  "departmentClosed": "Closed",
  "error": {
    "fetchDealer": "Error occured while loading the data. Please check your internet connection",
    "dealerNotFound": "No dealer found with the specified id",
    "departmentNotFound": "No dealer found with the specified id",
    "geolocation": {
      "permissionDenied": "Please allow geolocation to proceed",
      "positionUnavailable": "Your location was not determined. Please check, if the GPS module is\n                activated\n              ",
      "timeout": "Timeout occured while determining your position. Please try again.\n              "
      },
    "geocoder.google": {
      "zeroResults": "No results were found for the search term.",
      "unknown": "Error occured while search for the term."
      },
    "geocoder.baidu": "No Result found for the search term. It is only possible to search for Chinese\n                locations in Chinese language\n              ",
    "googleDirectonsService": {
      "zeroResults": "No route could be found between the origin and the destination\n              ",
      "unknown": "A directions request could not be processed due to a server error.\n              "
      },
    "unknown": "An unknown error occured",
    "invalidUrl": "The URL you have followed is invalid."
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