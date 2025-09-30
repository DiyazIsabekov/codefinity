import BusinessAnalystImageFirst from './images/business-analyst_image-first.png';
import BusinessAnalystImageSecond from './images/business-analyst_image-second.png';
import BusinessAnalystImageThird from './images/business-analyst_image-third.png';
import DevOpsImageFirst from './images/dev-ops_image-first.png';
import DevOpsImageSecond from './images/dev-ops_image-second.png';
import DevOpsImageThird from './images/dev-ops_image-third.png';
import DevOpsImageFourth from './images/dev-ops_image-fourth.png';
import DataAnalyticsImageFirst from './images/data-analytics_image-first.png';
import DataAnalyticsImageSecond from './images/data-analytics_image-second.png';
import DataAnalyticsImageThird from './images/data-analytics_image-third.png';
import DataAnalyticsImageFourth from './images/data-analytics_image-fourth.png';
import FlutterImageFirst from './images/flutter_image-first.png';
import FlutterImageSecond from './images/flutter_image-second.png';
import FlutterImageThird from './images/flutter_image-third.png';
import FlutterImageFourth from './images/flutter_image-fourth.png';
import JavaImageFirst from './images/java_image-first.png';
import JavaImageSecond from './images/java_image-second.png';
import JavaImageThird from './images/java_image-third.png';
import JavaImageFourth from './images/java_image-fourth.png';
import JavaScriptImageFirst from './images/javascript_image-first.png';
import JavaScriptImageSecond from './images/javascript_image-second.png';
import JavaScriptImageThird from './images/javascript_image-third.png';
import ImageMobilDevOps from './images/image-mobil_dev-ops.png';
import ImageMobilDataAnalytics from './images/image-mobil_data-analytics.png';
import ImageMobilJava from './images/image-mobil_java.png';
import ImageMobilJavaScript from './images/image-mobil_java-script.png';

export const specialties = [
    {
        title: 'Курс Business analyst с нуля',
        description: 'Ты научишься общаться с заказчиками, решать проблемы бизнеса и сможешь работать бизнес-аналитиком в IT или Digital',
        imageItems: [
            BusinessAnalystImageFirst,
            BusinessAnalystImageSecond,
            BusinessAnalystImageThird
        ],
        imageMobil: null,
        loc: '/courses/business-analyst'
    },
    {
        title: 'Курс DevOps инженер',
        description: 'Ты научишься общаться с заказчиками, решать проблемы бизнеса и сможешь работать бизнес-аналитиком в IT или Digital',
        imageItems: [
            DevOpsImageFirst,
            DevOpsImageSecond,
            DevOpsImageThird,
            DevOpsImageFourth
        ],
        imageMobil: ImageMobilDevOps,
        loc: '/courses/dev-ops'
    },
    {
        title: 'Курс data analytics инженер с нуля',
        description: 'Ты научишься общаться с заказчиками, решать проблемы бизнеса и сможешь работать бизнес-аналитиком в IT или Digital',
        imageItems: [
            DataAnalyticsImageFirst,
            DataAnalyticsImageSecond,
            DataAnalyticsImageThird,
            DataAnalyticsImageFourth,
        ],
        imageMobil: ImageMobilDataAnalytics,
        loc: '/courses/data-analytics'
    },
    {
        title: 'Курс Flutter разработчик',
        description: 'Ты научишься общаться с заказчиками, решать проблемы бизнеса и сможешь работать бизнес-аналитиком в IT или Digital',
        imageItems: [
            FlutterImageFirst,
            FlutterImageSecond,
            FlutterImageThird,
            FlutterImageFourth
        ],
        imageMobil: null,
        loc: '/courses/flutter'
    },
    {
        title: 'Курс Java разработчик с нуля',
        description: 'Ты научишься общаться с заказчиками, решать проблемы бизнеса и сможешь работать бизнес-аналитиком в IT или Digital',
        imageItems: [
            JavaImageFirst,
            JavaImageSecond,
            JavaImageThird,
            JavaImageFourth
        ],
        imageMobil: ImageMobilJava,
        loc: '/courses/java'
    },
    {
        title: 'Курс JavaScript разработчик с нуля',
        description: 'Ты научишься общаться с заказчиками, решать проблемы бизнеса и сможешь работать бизнес-аналитиком в IT или Digital',
        imageItems: [
            JavaScriptImageFirst,
            JavaScriptImageSecond,
            JavaScriptImageThird
        ],
        imageMobil: ImageMobilJavaScript,
        loc: '/courses/javascript'
    },
]