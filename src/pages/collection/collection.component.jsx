import React from "react";
import { connect } from "react-redux";


import { selectCollection } from "../../redux/shop/shop.selectors";

import {CollectionPageContainer, TitleContainer, ItemsContainer, CollectionItemContainer} from './collection.styles';

const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return(
        <CollectionPageContainer className="collection-page">
            <TitleContainer className="title">{title}</TitleContainer>
            <ItemsContainer className="items">
                {
                    items.map(item => (
                        <CollectionItemContainer key={item.id} item={item}/>
                    ))
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);