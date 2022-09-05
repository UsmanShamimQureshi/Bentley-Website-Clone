bm_jquery.extend(true, bm.namespace("config"), {swipeNav : {"isActive": true},  queryCookieName: "bm_query_cookie" ,carConfigurator : {"appConfig": {"usePushState": true}}, dealerLocator : {
  "usePushState": true,
  "defaultImage": "https://www.bentleymotors.com/content/dam/bentley/Master/POM/BM_logo_haptic-sim_4c_pos_300dpi%20150%20x%2075%20for%20dealer%20locator.jpg",
  "filterOptions": [
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
    },
    {
    "id": "service",
    "imagePath": "/content/dam/bentley/Master/POM/dealer%20locator/Bentley%20Service%20SERVICE1%201%20HERO%20415%20x%20145.jpg",
    "initial": true,
    "exclusive": false
    },
    {
    "id": "body",
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
    "maxDealers": 3
    },
  "mapServiceConfig": {
    "google": {
      "staticMap": {"url": "//maps.googleapis.com/maps/api/staticmap?"},
      "inlineMap": {"url": "//maps.googleapis.com/maps/api/js?libraries=geometry,places&v=3.39&key=AIzaSyApFNmBILF7qkTClwqpKjKgs4cfwKhGZ5w&language=en"}
      },
    "baidu": {
      "country": "china",
      "countryFilter": [
        "Chinese Mainland",
        "Macau, China",
        "Hong Kong, China"
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
  }, consentManagement : {
  "enabled": true,
  "serviceMap": {
    "youtube": "BJz7qNsdj-7",
    "google_maps": "S1pcEj_jZX",
    "amp": "apKLaWLIP",
    "bm_configurator_cookie": "RbB2woh0O",
    "bm_anchor_cta": "RbB2woh0O",
    "bm_query_cookie": "RbB2woh0O",
    "bm_seen_browser_warning": "MJ9UrcqFV",
    "bm_mybentley_selected_region": "MJ9UrcqFV"
    }
  }, shareEnabled: false});bm_jquery.extend(bm.namespace("i18n"), {formValidation : {"mailError": "Please enter a valid email address."}, visualRangePreview : {
  "preTitle": "Your selection",
  "edit": "Edit"
  }, colorbox : {
  "next": "Next",
  "previous": "Previous",
  "close": "Close"
  }, gallery : {
  "open": "View full gallery",
  "close": "Close Gallery"
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
  "filterOptions": {
    "sales": "Sales",
    "pre-owned": "Pre-Owned",
    "service": "Service",
    "body": "body"
    },
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
  }}, carConfigurator : {
  "unsupportedBrowser": {
    "title": "Unsupported Browser",
    "message": "Please update your browser to use the car configurator."
    },
  "maintenance": {
    "title": "Under Maintenance",
    "message": "We are currently working on the car configurator. Please try again later.",
    "reload": "Reload Page"
    },
  "header": {
    "changeModel": "Change",
    "toolbar": {
      "openTop": "Open top",
      "closeTop": "Close top",
      "viewInterior": "View interior",
      "viewExterior": "View exterior",
      "priceSettings": "Price settings",
      "enlarge": "Enlarge",
      "reduce": "Reduce",
      "share": "Share",
      "menu": "Menu"
      },
    "menu": {
      "getcode": {
        "label": "Retrieve Configuration",
        "shortLabel": "Retrieve"
        },
      "savecode": {
        "label": "Save Configuration",
        "shortLabel": "Save"
        },
      "sendcode": {
        "label": "Enquire to Buy",
        "shortLabel": "Enquire to buy"
        },
      "getpdf": {
        "label": "Download PDF",
        "shortLabel": "PDF"
        },
      "debug": {"label": "Debug Overlay"},
      "changecountry": {"label": "Change Country"},
      "boom": {
        "label": "Send to Boom",
        "shortLabel": "Send to Boom"
        }
      }
    },
  "boom": {
    "headline": "Save configuration into BOOM",
    "richtext": "By submitting this form, the current configuration will be sent to BOOM including data about retailer and customer.",
    "placeholder": "Add comments here...",
    "success": "Submitting complete",
    "err404": "Submitting failed - addressee not found",
    "err503": "Submitting failed - service currently unavailable",
    "err400": "Submitting failed - request refused",
    "errDefault": "Submitting failed for unexpected reasons",
    "close": "close",
    "save": "save",
    "cancel": "cancel"
    },
  "featureNav": {
    "suggestions": "Bentley Suggests",
    "suggestionLabel": "Personalise",
    "summary": "Summary",
    "bentleyRecommends": "Recommended by Bentley"
    },
  "suggestionItem": {
    "select": "Configure",
    "label": "Bentley Suggests",
    "readMore": "Read more",
    "highlightColourSplit": "Interior",
    "highlightExteriour": "Exterior paint",
    "highlightWheels": "Wheels",
    "explanationText": "To provide a little inspiration, our team at the Bentley factory in Crewe has created a number of example configurations, demonstrating some of the wonderful combinations you can select."
    },
  "customItem": {
    "select": "Proceed",
    "label": "Bentley Presents",
    "title": "Your Configuration",
    "suggestionListLabel": "Your Configuration",
    "readMore": "Read more"
    },
  "summaryPage": {
    "label": "Introducing",
    "title": "Your",
    "sectionTitle": "Colour and Trim",
    "marketingCodeLabel": "Commissioning Code:",
    "form": {
      "title": "Happy with your selection?",
      "save": "Save",
      "pdf": "Download PDF"
      },
    "pricing": {
      "options": "total options",
      "baseConfiguration": "total with options",
      "priceSummary": "price summary",
      "afterDiscount": "sub total",
      "total": "total"
      }
    },
  "loadingOverlay": {
    "errorText": {
      "notfound": {
        "title": "Resource not available",
        "message": "The resource you have requested is not available due to a wrong path."
        },
      "offline": {
        "title": "Offline",
        "message": "Please connect your device to the internet and try again."
        },
      "timeout": {
        "title": "Request timeout",
        "message": "Timeout during data loading. Please check your internet connection."
        },
      "unavailable": {
        "title": "Service Unavailable",
        "message": "We are currently working on the car configurator. Please try again later."
        },
      "unknown": {
        "title": "Unknown error",
        "message": "Unknown error occurs"
        },
      "invalid_dealer": {
        "title": "Unauthorized Access",
        "message": "Invalid dealerId or dealer is not available for the current tenant."
        },
      "missing_dealerId": {
        "title": "Unauthorized Access",
        "message": "Missing dealerId. Please follow the car configurator link in Bentley HUB to come back."
        },
      "unauthorized": {
        "title": "Unauthorized Access",
        "message": "The resource you have requested is not available for unauthorized users. Please login via Bentley HUB.",
        "formLogin": "Login"
        }
      },
    "button": {
      "cancel": "Cancel",
      "retry": "Retry",
      "overview": "Model Overview",
      "home": "Homepage"
      }
    },
  "mco": {
    "headline": "Retrieve your Bentley Configuration",
    "richtext": "Use it to retrieve your Configuration or send to a dealer to have them contact you.",
    "error": {
      "notFound": "The marketing code could not be found in our system.",
      "emptyField": "Please enter a marketing code."
      },
    "form": {
      "inputPlaceholder": "Enter code",
      "submit": "Load"
      }
    },
  "scco": {
    "headline": "Save your Bentley Configuration ",
    "richtext": "Your Bentley Code is a unique ID that gives you access to your Configuration and can be sent to a Bentley dealer to commission your car.",
    "codeNotFound": "The marketing code could not be found in our system.",
    "form": {
      "input": "Loading...",
      "submit": "Enquire to Buy",
      "share": "Share code",
      "home": "Home Page",
      "pdf": "Download PDF"
      },
    "shareCode": "My Bentley Code:",
    "maintenanceHeadline": "Under Maintenance",
    "maintenanceRichtext": "Our systen is currently under maintenance. Here is your Bentley Code to proceed later."
    },
  "dataVersionUpdateOverlay": {
    "headline": "The Dataversion has been changed",
    "richtext": "The app will be updated to the latest version",
    "form": {"accept": "Accept"}
    },
  "helperMenu": {
    "suggestion": {
      "headerTooltip": "use this menu to customise the car's specifications",
      "listTooltip": "choose a suggestion to start"
      },
    "derivativeList": {
      "headerTooltip": "use this menu to select a vehicle model",
      "listTooltip": "choose a derivative you want to configure"
      },
    "selectionContent": {
      "headerTooltip": "use this menu to select a vehicle model",
      "listTooltip": "select a vehicle model to choose from its derivatives"
      }
    },
  "contactForm": {
    "headline": "Enquire to Buy",
    "richtext": "To help us provide a better service when we contact you, could you please provide the\n                  following details.<br>*Mandatory field",
    "label": "The Bentley Configurator"
    },
  "carlineNav": {},
  "selection": {
    "headerLabel": "The Bentley Configurator",
    "salesGroupSelect": "Select",
    "derivativeSelect": "Select",
    "derivativeMaintenanceButton": "Under Maintenance",
    "priceVersion": "Pricing Region and Version:",
    "emptyPriceVersion": "n/a"
    },
  "engine": {
    "title": "Engine",
    "cta": "Continue"
    },
  "conflictPanel": {
    "label": {
      "unresolvable": "The conflict could not be resolved. Please try another configuration.",
      "single": "The feature that you have added or removed is not configurable with your current configuration. Please confirm the below change to continue your commissioning experience.",
      "multiple": "The feature that you have added or removed is not configurable with your current configuration. Please select a resolution from below to continue your commissioning experience."
      },
    "resolutionTitle": "Resolution #{number}",
    "button": {
      "accept": "Accept",
      "cancel": "Cancel",
      "debug": "Debug Info"
      },
    "priceLabel": "Price Changes"
    },
  "messages": {
    "changedHideColorToDefaultSecondary": {
      "headline": "Your Hide has been changed",
      "richtext": "The hide color has been changed, because the selected hide color does not exist for mono tone color split.",
      "buttons": {
        "accept": "Proceed",
        "cancel": "Cancel"
        }
      },
    "changedExactPath": {
      "headline": "Your model has been changed.",
      "message": "The exact model for which you saved your marketing code for is no longer available in this configurator. Your individual preferences are therefore applied to a {0} as far as possible.",
      "buttons": {"accept": "Proceed"}
      },
    "changedModelName": {
      "headline": "Your model has been changed.",
      "message": "You marketing code was saved for a {0}, but this model is unavailable in this configurator. Your individual preferences are therefore applied to a {1}, which is the closest match.",
      "buttons": {"accept": "Proceed"}
      },
    "changedTenant": {
      "headline": "Your model has been changed.",
      "message": "The exact {0} configuration for which you saved your marketing code for might not be available in this configurator. Your saved configuration is applied as far as possible.",
      "buttons": {"accept": "Proceed"}
      }
    },
  "customerCTAOverlay": {
    "savecode": {
      "tabLabel": "Save your configuration",
      "tabShortLabel": "Save",
      "headline": "Save your Bentley configuration",
      "richtext": "Your Bentley Code is a unique ID that gives you access to your Configuration and can be sent to a Bentley dealer to commission your car. Copy code:",
      "codeCopied": "Copied to clipboard",
      "codeLoading": "Loading ..."
      },
    "getcode": {
      "tabLabel": "Retrieve configuration",
      "tabShortLabel": "Retrieve",
      "headline": "Retrieve your Bentley Configuration",
      "richtext": "Use it to retrieve your Configuration or send to a dealer to have them contact you.",
      "inputLabel": "Your code",
      "inputPlaceholder": "Enter code",
      "emptyError": "Please enter a marketing code.",
      "notFoundError": "The marketing code could not be found in our system.",
      "buttonSubmit": "Load",
      "error": {
        "empty": "Please enter a marketing code.",
        "notFound": "The marketing code could not be found in our system.",
        "gone": "This Bentley code was saved for a model that is no longer available in the car configurator.",
        "badRequest": "The marketing code you have entered is not in the expected format.",
        "default": "The marketing code failed to load due to technical issues, please try again later."
        }
      },
    "getpdf": {
      "tabLabel": "Download PDF",
      "tabShortLabel": "PDF",
      "richtext": "Please click the Download PDF button to immediately view details of your configuration in your browser and to save your PDF for future reference.",
      "buttonDownload": "Download PDF"
      },
    "form": {
      "separator": "send via E-mail",
      "headline": "Email me my configuration",
      "richtext": "If you would also like to receive details of your configuration by email, please complete the form below. You can send multiple configurations so that you have all your creations available in your inbox for future reference and for discussion with a Bentley dealer."
      }
    },
  "wltp": {"label": {
    "fuel": "Combined fuel economy",
    "co2": "Combined CO\u2082",
    "electric": "Electrical consumption  "
    }},
  "configLossWarning": {
    "headline": "Change Your Bentley Model",
    "richtext": "Changing your Bentley Model with restart your configuration and all configured elements will be lost. You will be able to save your Bentley Configuration before continuing or select continue to proceed.",
    "buttonCancel": "Cancel",
    "buttonContinue": "Continue",
    "getpdf": {
      "separator": "download as PDF",
      "buttonDownload": "Download"
      },
    "form": {
      "separator": "send via E-mail",
      "headline": "Email me my configuration",
      "richtext": "If you would also like to receive details of your configuration by email, please complete the form below. You can send multiple configurations so that you have all your creations available in your inbox for future reference and for discussion with a Bentley dealer."
      }
    }
  }});