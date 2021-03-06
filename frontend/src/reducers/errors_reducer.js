import { combineReducers } from "redux";

import session from "./session_errors_reducer";
import listings from "./listing_errors_reducer";
import userDisplayed from "./user_displayed_errors_reducer";
import reviews from "./review_errors_reducer";
export default combineReducers({
  session,
  listings,
  userDisplayed,
  reviews
});
