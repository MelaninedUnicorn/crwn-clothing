import React, { Component } from "react";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);
class ShopPage extends Component {
 
  componentDidMount() {
const {fetchCollectionsStartAsync} = this.props;
fetchCollectionsStartAsync();

  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
isCollectionFetching: selectIsCollectionFetching,
isCollectionLoaded:selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
