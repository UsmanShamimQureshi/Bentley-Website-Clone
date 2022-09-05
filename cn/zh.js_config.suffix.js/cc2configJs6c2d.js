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
  }}, carConfigurator : {
  "unsupportedBrowser": {
    "title": "不支持浏览",
    "message": "请点击刷新浏览器以打开车辆配置器。"
    },
  "maintenance": {
    "title": "维护中",
    "message": "我们在加载您的配置选择，请稍等。",
    "reload": "重新加载页面"
    },
  "header": {
    "changeModel": "改变",
    "toolbar": {
      "openTop": "开启车顶",
      "closeTop": "关闭车顶",
      "viewInterior": "查看内部",
      "viewExterior": "查看外部",
      "priceSettings": "计算价格",
      "enlarge": "放大",
      "reduce": "缩小",
      "share": "分享",
      "menu": "目录"
      },
    "menu": {
      "getcode": {
        "label": "寻回您的个性化选择",
        "shortLabel": "寻回您的个性化选择"
        },
      "savecode": {
        "label": "保存个性化选择",
        "shortLabel": "保存个性化选择"
        },
      "sendcode": {
        "label": "发送至经销商",
        "shortLabel": "发送至经销商"
        },
      "getpdf": {
        "label": "下载 PDF",
        "shortLabel": "下载 PDF"
        },
      "debug": {"label": "临时调试"},
      "changecountry": {"label": "改变市场"},
      "boom": {
        "label": "发送至BOOM",
        "shortLabel": "发送至BOOM"
        }
      }
    },
  "boom": {
    "headline": "将车辆配置信息保存并发送至BOOM",
    "richtext": "现在提交， 您的选择及相应的经销商和客户信息将被发送至BOOM。",
    "placeholder": "请在此留言",
    "success": "提交成功",
    "err404": "提交失败 - 地址未找到",
    "err503": "提交失败 - 系统目前不可用",
    "err400": "提交失败 - 选择被拒绝",
    "errDefault": "未知原因导致提交失败",
    "close": "关闭",
    "save": "保存",
    "cancel": "取消"
    },
  "featureNav": {
    "suggestions": "宾利为您推荐",
    "suggestionLabel": "个性化",
    "summary": "总结",
    "bentleyRecommends": "宾利推荐"
    },
  "suggestionItem": {
    "select": "选择",
    "label": "宾利为您推荐",
    "readMore": "更多",
    "highlightColourSplit": "内饰",
    "highlightExteriour": "外漆颜色",
    "highlightWheels": "轮毂款式",
    "explanationText": "宾利工厂的设计团队为您准备了几台推荐车辆，包含了我们引以为傲的诸多配置，希望为您配置自己的爱车时作为参考"
    },
  "customItem": {
    "select": "继续",
    "label": "宾利为您揭晓",
    "title": "您的车辆配置",
    "suggestionListLabel": "您配置的车辆",
    "readMore": "更多"
    },
  "summaryPage": {
    "label": "介绍",
    "title": "您的",
    "sectionTitle": "颜色和配饰",
    "marketingCodeLabel": "您的车辆配置码:",
    "form": {
      "title": "确认您的选择吗?",
      "save": "保存",
      "pdf": "下载PDF"
      },
    "pricing": {
      "options": "选配总额",
      "baseConfiguration": "基础车价",
      "priceSummary": "价格总结",
      "afterDiscount": "小结",
      "total": "总额"
      }
    },
  "loadingOverlay": {
    "errorText": {
      "notfound": {
        "title": "资源当前不可用",
        "message": "您请求的路径错误，因此内容不可用。"
        },
      "offline": {
        "title": "连接断开",
        "message": "请接入互联网并重试。"
        },
      "timeout": {
        "title": "请求已超时",
        "message": "超时。请您的网络连接。"
        },
      "unavailable": {
        "title": "服务当前不可用",
        "message": "错误内容"
        },
      "unknown": {
        "title": "未知错误",
        "message": "未知错误"
        },
      "invalid_dealer": {
        "title": "未授权",
        "message": "经销商码错误或当前不可用。"
        },
      "missing_dealerId": {
        "title": "未授权",
        "message": "无法识别经销商码。 请从Bentley HUB的配置器入口进入此页面。"
        },
      "unauthorized": {
        "title": "未授权",
        "message": "您要打开的页面将只能由授权会员浏览，请您登录。",
        "formLogin": "登录"
        }
      },
    "button": {
      "cancel": "取消",
      "retry": "重试",
      "overview": "车型概览",
      "home": "主页"
      }
    },
  "mco": {
    "headline": "找回您的个性化选择",
    "richtext": "您可以用此找回您之前的选择，或发送给经销商并让他们联系您。",
    "error": {
      "notFound": "车辆配置码无法识别。",
      "emptyField": "请输入车辆配置码"
      },
    "form": {
      "inputPlaceholder": "输入码",
      "submit": "加载"
      }
    },
  "scco": {
    "headline": "保存您的个性化选择。",
    "richtext": "您的宾利配置码是记录您的个性化选择的唯一识别码，您可以将它发给您的经销商来进行报价。",
    "codeNotFound": "车辆配置码无法识别。",
    "form": {
      "input": "加载中...",
      "submit": "发送给经销商",
      "share": "分享配置码",
      "home": "主页",
      "pdf": "下载 PDF"
      },
    "shareCode": "您的宾利配置码为:",
    "maintenanceHeadline": "系统维护中",
    "maintenanceRichtext": "系统维护中，请记录您的宾利配置码以便稍后继续。"
    },
  "dataVersionUpdateOverlay": {
    "headline": "细分车型已改变",
    "richtext": "此程序将会被升级",
    "form": {"accept": "接受"}
    },
  "helperMenu": {
    "suggestion": {
      "headerTooltip": "请在此对您的车辆进行选配",
      "listTooltip": "请选择方案以开始"
      },
    "derivativeList": {
      "headerTooltip": "请在此选择车型",
      "listTooltip": "请选择细分车型进行车辆配置"
      },
    "selectionContent": {
      "headerTooltip": "请在此选择车型",
      "listTooltip": "请选择细分车型"
      }
    },
  "contactForm": {
    "headline": "让我们知道您的喜好",
    "richtext": "\n                  为了更好的提供服务，请您提供以下信息\n                  <br>*必填内容<\/br>\n                ",
    "label": "宾利车辆配置器"
    },
  "carlineNav": {},
  "selection": {
    "headerLabel": "宾利车辆配置器",
    "salesGroupSelect": "选择",
    "derivativeSelect": "配置车辆",
    "derivativeMaintenanceButton": "系统维护中",
    "priceVersion": "价格表区域版本",
    "emptyPriceVersion": "n/a"
    },
  "engine": {
    "title": "Engine",
    "cta": "选择"
    },
  "conflictPanel": {
    "label": {
      "unresolvable": "适配冲突无法解决，请尝试重新配置您的新车。",
      "single": "为解决适配冲突已做出以下改变:",
      "multiple": "请选择解决适配冲突的方案:"
      },
    "resolutionTitle": "方案选择 #{number}",
    "button": {
      "accept": "接受",
      "cancel": "取消",
      "debug": "系统调试信息"
      },
    "priceLabel": "价格已变更"
    },
  "messages": {
    "changedHideColorToDefaultSecondary": {
      "headline": "您的真皮颜色已改变",
      "richtext": "您选择的真皮颜色在单色配色方案中不可选，因此内饰真皮颜色已改变。",
      "buttons": {
        "accept": "继续",
        "cancel": "取消"
        }
      },
    "changedExactPath": {
      "headline": "车型选择已改变",
      "message": "您选择的车型在与您车辆配置码匹配的配置器中已下线，您的选择将会最大限度的记录为{0}。",
      "buttons": {"accept": "继续"}
      },
    "changedModelName": {
      "headline": "车型选择已改变",
      "message": "您的车辆配置码识别为 {0}, 此车型在此配置器中不使用。适用于您的选择的最相近的内容 {1}。",
      "buttons": {"accept": "继续"}
      },
    "changedTenant": {
      "headline": "车型选择已改变",
      "message": "以您的车辆配置码导出的{0} 配置结果可能在此配置器中不适用。我们已尽可能将可使用内容全部存储在生成文件中。",
      "buttons": {"accept": "继续"}
      }
    },
  "customerCTAOverlay": {
    "savecode": {
      "tabLabel": "保存您的个性化选择",
      "tabShortLabel": "保存",
      "headline": "保存您的个性化选择",
      "richtext": "您的宾利配置码是记录您的个性化选择的唯一识别码，您可以将它发给您的经销商来进行报价。 保存配置码:",
      "codeCopied": "保存至粘贴板",
      "codeLoading": " 载入中..."
      },
    "getcode": {
      "tabLabel": "找回您的个性化选择",
      "tabShortLabel": "找回",
      "headline": "找回您的个性化选择",
      "richtext": "您可以用此找回您之前的选择，或发送给经销商并让他们联系您。",
      "inputLabel": "您的车辆配置码",
      "inputPlaceholder": "输入码",
      "emptyError": "请输入车辆配置码",
      "notFoundError": "车辆配置码无法识别。",
      "buttonSubmit": "加载",
      "error": {
        "empty": "请输入一个车辆配置码",
        "notFound": "车辆配置码无法找到",
        "gone": " 此车辆配置码为旧款车型的配置，本配置器已无法读取",
        "badRequest": "此车辆配置码格式错误",
        "default": "车辆配置码由于技术原因加载失败，请稍后重试"
        }
      },
    "getpdf": {
      "tabLabel": "下载PDF",
      "tabShortLabel": "PDF",
      "richtext": "请点击 \u201c下载PDF\u201d按钮在浏览器中查看您的个性化选择，并保存PDF文件",
      "buttonDownload": "下载PDF"
      },
    "form": {
      "separator": "发送E-mail",
      "headline": "将我的个性化选择Email给我",
      "richtext": "如果您希望通过邮件收到您个性化选择的车辆配置，请完成以下表格。您可以选择发送您创建的多个个性化配置到您的邮箱，以方便您跟宾利经销商进一步讨论 "
      }
    },
  "wltp": {"label": {
    "fuel": "carConfigurator.wltp.label.fuel",
    "co2": "carConfigurator.wltp.label.co2",
    "electric": "carConfigurator.wltp.label.electric"
    }},
  "configLossWarning": {
    "headline": "改变您的车型选择",
    "richtext": "改变车型将重新开始车辆配置并将丢失目前已选所有内容。请在继续前保存你的选择，或点击继续离开此页面。",
    "buttonCancel": "取消",
    "buttonContinue": "继续",
    "getpdf": {
      "separator": "下载 PDF",
      "buttonDownload": "下载 PDF"
      },
    "form": {
      "separator": "发送E-mail",
      "headline": "将我的个性化选择Email给我",
      "richtext": "如果您希望通过邮件收到您个性化选择的车辆配置，请完成以下表格。您可以选择发送您创建的多个个性化配置到您的邮箱，以方便您跟宾利经销商进一步讨论 "
      }
    }
  }});