import { connect } from "react-redux";
import { signup } from "../../actions/user_actions";
import { removeErrors } from "../../actions/user_actions";
import Signup from "./signup";

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
