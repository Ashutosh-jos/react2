
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Card from "../Cart";
test("should cart render ",()=>{
    const res={
        "id": "67385",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/38dd2056-8729-4a55-84ad-d927e6891edd_67385.jpg",
        "locality": "Vijay Nagar",
        "areaName": "Vijay Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "6.3K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-03-14 03:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "2.7K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }
    render(
<BrowserRouter>
<Provider>
        <Card resData={res} />
        </Provider>
        </BrowserRouter>)
    const  name= screen.getByText("Pizza Hut")
    expect(name).toBeInTheDocument();    
    
    })