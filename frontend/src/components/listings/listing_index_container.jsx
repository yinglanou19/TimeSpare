import { connect } from 'react-redux';
import ListingIndex from './listing_index';
<<<<<<< HEAD
import { getAllListings } from '../../actions/listing_actions';
=======
import { getAllListings, getCurrentUserListings, editListing, deleteListing } from '../../actions/listing_actions';
>>>>>>> master
// import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
    let listings = Object.values(state.entities.listings);
    // let users = state.entities.users;
    return {
        listings: listings
        // users: users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllListings: () => dispatch(getAllListings()),
        getCurrentUserListings: () => dispatch(getCurrentUserListings()),
        editListing: (listing) => dispatch(editListing(listing)),
        deleteListing: (id) => dispatch(deleteListing(id))
        // fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);